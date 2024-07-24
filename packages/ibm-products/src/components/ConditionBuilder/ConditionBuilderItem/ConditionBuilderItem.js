import React, { useState, useRef, useEffect, useContext } from 'react';

import { Popover, PopoverContent, Layer } from '@carbon/react';
import PropTypes from 'prop-types';
import { Add } from '@carbon/react/icons';
import {
  blockClass,
  valueRenderers,
} from '../ConditionBuilderContext/DataConfigs';
import { ConditionBuilderButton } from '../ConditionBuilderButton/ConditionBuilderButton';
import { useTranslations } from '../utils/useTranslations';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import { handleKeyDownForPopover } from '../utils/handleKeyboardEvents';

export const ConditionBuilderItem = ({
  children,
  className,
  label,
  renderIcon,
  title,
  type,
  showToolTip,
  condition,
  popOverClassName,
  config,
  renderChildren,
  onChange,
  ...rest
}) => {
  const popoverRef = useRef(null);
  const [open, setOpen] = useState(false);

  const [invalidText, addConditionText, labelText] = useTranslations([
    'invalidText',
    'addConditionText',
    label,
  ]);
  const { conditionBuilderRef } = useContext(ConditionBuilderContext);
  const getPropertyDetails = () => {
    const { property, operator } = condition || {};
    if (
      label === 'INVALID' ||
      (rest['data-name'] === 'propertyField' && property === 'INVALID') ||
      (rest['data-name'] === 'operatorField' && operator === 'INVALID')
    ) {
      return {
        propertyLabel: invalidText,
        isInvalid: true,
      };
    }
    const propertyId =
      rest['data-name'] == 'valueField' && type
        ? valueRenderers[type](label, config)
        : labelText;

    return {
      isInvalid: false,
      propertyLabel: propertyId,
    };
  };
  const { propertyLabel, isInvalid } = getPropertyDetails();

  useEffect(() => {
    /**
     * rest['data-name'] holds the current field name
     * popoverToOpen hold the next popover to be opened if required
     */
    if (condition) {
      const currentField = rest['data-name'];
      //if any condition is changed, state prop is triggered
      if (condition.popoverToOpen && currentField !== condition.popoverToOpen) {
        // close the previous popover
        closePopover();
      } else if (
        currentField == 'valueField' &&
        type == 'option' &&
        condition.operator !== 'oneOf'
      ) {
        //close the current popover if the field is valueField and  is a single select dropdown. For all other inputs ,popover need to be open on value changes.
        closePopover();
      }
      if (condition.popoverToOpen == currentField) {
        //current popover need to be opened
        openPopOver();
      }
    } else {
      // when we change any statement(if/ excl.if) which is not part of condition state, label change is triggered.
      //close popOver when statement is changed.
      closePopover();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [condition, label]);

  useEffect(() => {
    //this will focus the first input field in the popover
    if (open && popoverRef.current) {
      const firstFocusableElement =
        popoverRef.current.querySelector('input,textarea');
      if (firstFocusableElement) {
        setTimeout(() => firstFocusableElement.focus(), 0);
      }
    }
  }, [popoverRef, open]);

  const manageInvalidSelection = () => {
    //when the user didn't select any value , we need to show as incomplete
    if (
      (rest['data-name'] === 'propertyField' && !condition?.property) ||
      (rest['data-name'] === 'operatorField' && !condition?.operator) ||
      (rest['data-name'] === 'valueField' && !condition?.value)
    ) {
      onChange?.('INVALID');
    }
  };
  const closePopover = () => {
    if (open) {
      manageInvalidSelection();
    }
    setOpen(false);
  };
  const openPopOver = () => setOpen(true);
  const togglePopover = () => {
    if (children || renderChildren) {
      setOpen(!open);
    }
  };

  const handleKeyDownHandler = (evt) => {
    handleKeyDownForPopover(evt, conditionBuilderRef, popoverRef);
    if (evt.key === 'Escape') {
      manageInvalidSelection();
    }
  };

  return (
    <Popover
      open={open}
      isTabTip
      role="gridcell"
      className={`${popOverClassName} ${blockClass}__popover`}
      ref={popoverRef}
      onRequestClose={closePopover}
    >
      <ConditionBuilderButton
        label={propertyLabel ?? addConditionText}
        hideLabel={!label ? true : false}
        onClick={togglePopover}
        className={className}
        aria-haspopup
        aria-expanded={open}
        renderIcon={renderIcon ? renderIcon : label == undefined ? Add : null}
        showToolTip={showToolTip}
        isInvalid={isInvalid}
        condition={condition}
        {...rest}
      />

      {open && (
        <PopoverContent
          className={`${blockClass}__popover-content-wrapper`}
          role="dialog"
          aria-label={title}
          onKeyDown={handleKeyDownHandler}
        >
          <Layer>
            <h1 className={`${blockClass}__item__title`}>{title}</h1>
            <div className={`${blockClass}__popover-content`}>
              {renderChildren ? renderChildren(popoverRef) : children}
            </div>
          </Layer>
        </PopoverContent>
      )}
    </Popover>
  );
};

ConditionBuilderItem.propTypes = {
  /**
   * provide the contents of the popover
   */
  children: PropTypes.node,
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,
  /**
   * current condition state object
   */
  condition: PropTypes.object,

  /**
   * this is the config object again the current property from inputConfig
   */

  config: PropTypes.object,

  /**
   * text to be displayed in the field
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),

  /**
   * callback to update the current condition of the state tree
   */
  onChange: PropTypes.func,

  /**
   * class name for popover
   */
  popOverClassName: PropTypes.string,

  /**
   * callback prop that returns the jsx for children
   */
  renderChildren: PropTypes.func,

  /**
   * Optional prop to allow overriding the icon rendering.
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * show tool tip
   */
  showToolTip: PropTypes.bool,

  /**
   * title of the popover
   */
  title: PropTypes.string,
  /**
   * input type
   */
  type: PropTypes.string,
};

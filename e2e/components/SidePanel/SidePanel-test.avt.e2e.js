/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import { expect, test } from '@playwright/test';
import { visitStory } from '../../test-utils/storybook';

test.describe('SidePanel @avt', () => {
  test('@avt-default-state', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--slide-over',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page).toHaveNoACViolations('SidePanel @avt-default-state');
  });

  test('@avt-multi-step', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--panel-with-second-step',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page.getByText('Main view')).toBeVisible();
    await page.getByText('View all').click();
    await expect(page.getByText('Detail view')).toBeVisible();
    await page.getByLabel('back').click();
    await expect(page.getByText('Main view')).toBeVisible();
  });

  test('@avt-action-toolbar', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--with-action-toolbar',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page.getByLabel('Close')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByText('Copy')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Settings')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Delete')).toBeFocused();
  });

  test('@avt-focus-trap', async ({ page }) => {
    await visitStory(page, {
      component: 'SidePanel',
      id: 'ibm-products-components-side-panel-sidepanel--return-focus-to-open-button',
      globals: {
        carbonTheme: 'white',
      },
    });
    await page.getByText('Open side panel').click();
    await expect(page.getByLabel('Close')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Input A')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Input B')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Input C')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Input D')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Notes')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByLabel('Close')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByText('Open side panel')).toBeFocused();
  });
});

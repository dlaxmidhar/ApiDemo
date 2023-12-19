import { test, expect } from '@playwright/test';
const locators=require('../tests/ObjectRepo/locators7.json');

test('footer @smoke', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');
  await page.getByRole('button', { name: locators.allowButton }).click();
  const footer = await page.locator(locators.footerTextLocator).isVisible();
  expect(footer).toBe(true);
  const version= await page.locator(locators.versionLocator).isVisible();
  expect(version).toBe(true);
  
});


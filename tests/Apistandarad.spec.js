import { test, expect } from '@playwright/test';
const locators1 = require('../tests/ObjectRepo/locators1.json');
test('API Standarads', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');


  await page.getByRole('button', { name: locators1.allowButton }).click();

  await page.getByRole('heading', { name: locators1.heading }).isVisible();
  const text = await page.getByText(locators1.textContent).isVisible();
  expect(text).toBe(true);
  await page.getByPlaceholder(locators1.searchInput).isEditable();
  const button = await page.getByRole('button', { name: locators1.browseAllButton });

  const isclickable = await button.isEnabled();
  expect(isclickable).toBe(true);
  const image = await page.getByRole('img', { name: locators1.heroImage });
  const isvisible = await image.isVisible();
  expect(isvisible).toBe(true);
});
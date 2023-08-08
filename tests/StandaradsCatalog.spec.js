import { test, expect } from '@playwright/test';
const locators = require('../tests/ObjectRepo/locators5.json');
test('StandaradCatlog', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');
  await page.getByRole('button', { name: locators.allowAllButton }).click();
  const heading=await page.getByRole('heading', { name: locators.standardsCatalogHeading });
  await expect(heading).toHaveText('Standards Catalog');
  const isvisible=await page.getByText(locators.standardsCatalogText).isVisible();
  expect(isvisible).toBe(true);
  const buttom = await page.locator(locators.viewDetailsLink);
  const isclickable = await buttom.isEnabled();
  expect(isclickable).toBe(true);
  
  const image1=await page.getByRole('img', { name: locators.image1 }).isVisible();
  expect(image1).toBe(true);
  const image2 = await page.getByRole('img', { name: locators.image2 }).isVisible();
  expect(image2).toBe(true);
  const image3 = await page.getByRole('img', { name: locators.image3 }).isVisible();
  expect(image3).toBe(true);


});

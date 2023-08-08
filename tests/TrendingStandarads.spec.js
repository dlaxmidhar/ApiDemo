import { test, expect } from '@playwright/test';
const locators=require('../tests/ObjectRepo/locators3.json');
test('Trending Standards', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');

  await page.getByRole('button', { name: locators.allowButton}).click();
 const heading = await page.getByRole('heading', { name:locators.trendingHeading}).isVisible();
 expect(heading).toBe(true);

  const text =await page.getByText(locators.trendingText).isVisible();
  expect(text).toBe(true);

  for (let i = 0; i < locators.standardNames.length; i++) {
    const standard = locators.standardNames[i];
    const buttonLocator = locators.viewDetailsButtons[i];

   // await page.locator(`text=${standard}`).isVisible();
   const standardElement = page.locator(`text=${standard}`);
    const isStandardVisible = await standardElement.isVisible();
    expect(isStandardVisible).toBe(true);
//console.log(locators.standardNames.length);

const buttonElement = await page.locator(buttonLocator);
const isButtonVisible = await buttonElement.isVisible();
expect(isButtonVisible).toBe(true);
  }
  const text1=await page.getByText(locators.seeAllTrendingText).isVisible();
  expect(text1).toBe(true);
});



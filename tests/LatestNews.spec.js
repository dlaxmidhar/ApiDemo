import { test, expect } from '@playwright/test';
const locators = require('../tests/ObjectRepo/locators4.json');

test('Latest News @smoke', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');
  await page.getByRole('button', { name: locators.allowAllButton}).click();
  const isvisible=await page.getByRole('heading', { name: locators.latestNewsHeading}).isVisible();
 expect(isvisible).toBe(true);
  const element=await page.getByText(locators.readHereElement).isVisible();
  expect(element).toBe(true);
  await page.getByRole('link', { name: locators.seeAllAnnouncementsLink}).isVisible();
  
});


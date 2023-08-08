import { test, expect } from '@playwright/test';
const locators = require('../tests/ObjectRepo/locators.json');
test('Header navigation item are visible', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');


  await page.getByRole('button', { name: locators.cookie }).click();

  const logo = await page.getByRole('link', { name: locators.logo }).isVisible();
  expect(logo).toBe(true);
  const api = await page.getByRole('link', { name: locators.api }).isVisible();
  expect(api).toBe(true);

  const subscription = await page.getByRole('link', { name: locators.subscription }).isVisible();
  expect(subscription).toBe(true);
  const contact = await page.getByRole('link', { name: locators.contact }).isVisible();
  expect(contact).toBe(true);
  const line = await page.locator(locators.line).first().isVisible();
  expect(line).toBe(true);

  const verticalline = await page.locator(locators.verticalline).isVisible();
  expect(verticalline).toBe(true);
  const login = await page.getByRole('link', { name: locators.login }).isVisible();
  expect(login).toBe(true);
  const cart = await page.getByRole('link', { name: locators.cart }).isVisible();
  expect(cart).toBe(true);

});
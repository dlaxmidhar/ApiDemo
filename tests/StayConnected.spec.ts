import { test, expect } from '@playwright/test';
const locators= require('../tests/ObjectRepo/locators6.json');
test('Stay Connected', async ({ page }) => {
  await page.goto('https://www.apiwebstore.org/');
  await page.getByRole('button', { name: locators.allowAllButton }).click();

  const heading = await page.getByRole('heading', { name: locators.stayConnectedHeading }).isVisible();
  expect(heading).toBe(true);
  
  const headingtext = await page.locator(locators.headingTextXPath).isVisible();
  expect(headingtext).toBe(true);
  const ficon= await page.locator(locators.ficonXPath).isVisible();
  expect(ficon).toBe(true);
  const ticon=await page.locator(locators.ticonXPath).isVisible();
  expect(ticon).toBe(true);
  const licon= await page.locator(locators.liconXPath).isVisible();
  expect(licon).toBe(true);
  const yicon= await page.locator(locators.yiconXPath).isVisible();
  expect(yicon).toBe(true);
  

  const apiGlobals = await page.locator(locators.apiGlobalsXPath).isVisible();
  expect(apiGlobals).toBe(true);
  const ficon1= await page.locator(locators.ficon1XPath).isVisible();
  expect(ficon1).toBe(true);
  const ticon1= await page.locator(locators.ticon1XPath).isVisible();
  expect(ticon1).toBe(true);
  const licon1= await page.locator(locators.licon1XPath).isVisible();
  expect(licon1).toBe(true);
 const yicon1= await page.locator(locators.yicon1XPath).isVisible();
 expect(yicon1).toBe(true);


 const help = await  page.getByText(locators.help).first().isVisible();
 expect(help).toBe(true);
 const linkElement = await page.getByRole('link', { name: locators.contact });
 const isVisible = await linkElement.isVisible();
 expect(isVisible).toBe(true);

}); 


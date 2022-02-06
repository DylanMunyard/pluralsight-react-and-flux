import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

const TODO_ITEMS = [
  'buy some cheese',
  'feed the cat',
  'book a doctors appointment'
];

test.describe('Components', () => {
  test('should be able to fill out component 1', async ({ page }) => {
    // Create 1st todo.
    await page.locator('#component1').fill(TODO_ITEMS[0]);

    // Make sure the list now has two todo items.
    await expect(page.locator('#component1')).toHaveValue(TODO_ITEMS[0]);
  });

  test('should be able to fill out component 2', async ({ page }) => {
    // Create 1st todo.
    await page.locator('#component2').fill(TODO_ITEMS[1]);

    // Make sure the list now has two todo items.
    await expect(page.locator('#component2')).toHaveValue(TODO_ITEMS[1]);
  });
});
import { expect, test } from '@playwright/test';

test('test fetching', async ({ page }) => {
	await page.goto('/');
	await page.locator('#getJsonPH').click()
	await page.waitForFunction("document.querySelector('#part1').innerText.includes('Title:')")
	expect(await page.textContent('#part1')).toMatch("Title:");
	expect(await page.textContent('#part2')).toMatch("Body:");
});

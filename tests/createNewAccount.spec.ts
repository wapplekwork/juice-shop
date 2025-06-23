import { test } from '@playwright/test';
import { gotoUrl, closeBanners} from '../src/utils/commonFunctions';
import { BASE_URL_REGISTER, TIMEOUT, DEMO_USER } from '../src/test_datas/constants';
import { createAccountLocators } from '../src/page_locators/createAccountLocators'; 


test.beforeEach(async ({ page }) => {
    await gotoUrl(page, BASE_URL_REGISTER);
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
});

// create new account 
test('create new account', async ({ page }) => {   
    await closeBanners(page); 
    await page.getByRole(createAccountLocators.emailInput.role, { name: createAccountLocators.emailInput.name }).fill(DEMO_USER.email);
    await page.getByRole(createAccountLocators.passwordInput.role, { name: createAccountLocators.passwordInput.name }).nth(0).fill(DEMO_USER.password);
    await page.getByRole(createAccountLocators.passwordInput.role, { name: createAccountLocators.passwordInput.name }).nth(1).fill(DEMO_USER.password);
 

    const securityQuestionCombo = page.getByRole(createAccountLocators.securityQuestionCombo.role, { name: createAccountLocators.securityQuestionCombo.name });
    await securityQuestionCombo.waitFor({ state: 'visible' });
    await securityQuestionCombo.click();
    await page.getByRole(createAccountLocators.securityQuestionOption.role, { name: createAccountLocators.securityQuestionOption.name }).click();
    await page.getByRole(createAccountLocators.securityQuestionAnswerInput.role, { name: createAccountLocators.securityQuestionAnswerInput.name }).fill(DEMO_USER.answer); 
    await page.keyboard.press('PageDown');

    await page.locator(createAccountLocators.registerBtn.name).click();
    await page.waitForTimeout(TIMEOUT); // wait for registration to complete
    const registrationSuccess = await page.getByText('Login').first().isVisible();
    test.expect(registrationSuccess).toBeTruthy
});


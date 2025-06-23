import { Page, expect } from '@playwright/test';
import { loginPageLocators } from '../page_locators/loginPageLocators';
import { homePageLocators } from '../page_locators/homePageLocators';
import { addressPageLocators } from '../page_locators/addressPageLocators';
import { BASE_URL, DEMO_USER, TIMEOUT } from '../test_datas/constants';

// ลงทะเบียนสร้าง account ใหม่
export async function registerNewAccount(page: Page, email: string, password: string) {
    await page.goto(BASE_URL);
    await page.getByRole(loginPageLocators.accountBtn.role, { name: loginPageLocators.accountBtn.name }).click();
    await page.getByRole(loginPageLocators.registerMenu.role, { name: loginPageLocators.registerMenu.name }).click();
    await page.getByRole(loginPageLocators.emailInput.role, { name: loginPageLocators.emailInput.name }).fill(email);
    await page.getByRole(loginPageLocators.passwordInput.role, { name: loginPageLocators.passwordInput.name }).fill(password);
    await page.getByRole(loginPageLocators.confirmPasswordInput.role, { name: loginPageLocators.confirmPasswordInput.name }).fill(password);
    await page.getByRole(loginPageLocators.registerBtn.role, { name: loginPageLocators.registerBtn.name }).click();
    await expect(page.getByText(loginPageLocators.registrationSuccessMessage.name)).toBeVisible();
}


export async function gotoUrl(page: Page, url: string = BASE_URL) {
    await page.goto(url);
}

// Helper สำหรับปิด banner ทุกชนิด
export async function closeBanners(page: Page) {
    const closeBanners1 = page.getByRole(homePageLocators.closeBanners1.role, { name: homePageLocators.closeBanners1.name });
    const closeBanners2 = page.getByRole(homePageLocators.closeBanners2.role, { name: homePageLocators.closeBanners2.name });
    const closeBanners3 = page.getByRole(homePageLocators.closeBanners3.role, { name: homePageLocators.closeBanners3.name });
    if (await closeBanners1.isVisible()) {
        await closeBanners1.click();
    };
    if (await closeBanners2.isVisible()) {
        await closeBanners2.click();
    };
    if (await closeBanners3.isVisible()) {
        await closeBanners3.click();
    };
    await closeBanners1.isHidden();
}

export async function login(page: Page, email: string = DEMO_USER.email, password: string = DEMO_USER.password) {
    await page.getByRole(loginPageLocators.accountBtn.role, { name: loginPageLocators.accountBtn.name }).click();
    await page.getByRole(loginPageLocators.loginMenu.role, { name: loginPageLocators.loginMenu.name }).click();
    await page.getByRole(loginPageLocators.emailInput.role, { name: loginPageLocators.emailInput.name }).fill(email);    
    await page.getByRole(loginPageLocators.emailInput.role, { name: loginPageLocators.emailInput.name }).press('Tab');
    await page.getByRole(loginPageLocators.passwordInput.role, { name: loginPageLocators.passwordInput.name }).fill(password);
    await page.getByRole(loginPageLocators.loginBtn.role, { name: loginPageLocators.loginBtn.name }).nth(0).click();
    await page.waitForTimeout(TIMEOUT); // wait for login to complete
    const loginSuccess = await page.getByText(loginPageLocators.loginSuccessMessage.name).isVisible();
    expect(loginSuccess).toBeTruthy();
}

export async function logout(page: Page) {
    await page.getByRole(loginPageLocators.accountBtn.role, { name: loginPageLocators.accountBtn.name }).click();
    await page.getByLabel(homePageLocators.logoutBtn.name).click();
    await page.waitForTimeout(TIMEOUT); // wait for logout to complete
}

// เลือกสินค้าในหน้า home page
export async function selectProduct(page: Page, index: number) {
    const addBtn = page.getByRole(homePageLocators.addToBasketBtn.role,{ name: homePageLocators.addToBasketBtn.name }).nth(index);
    await addBtn.click();
}

// เปิดตะกร้าและคลิกปุ่ม Checkout
export async function openBasketAndCheckout(page: Page) {
    await page.getByText(homePageLocators.yourBasketBtn.name).click();
    await page.getByRole(homePageLocators.checkoutBtn.role, { name: homePageLocators.checkoutBtn.name }).click();
}

// Add address
export async function addAddress(page: Page, address: { country: string; name: string; mobile: string; zip: string; address: string; city: string }) {
    await page.getByText(addressPageLocators.addNewAddressBtn.name).click();
    await page.getByPlaceholder(addressPageLocators.countryInput.name).fill(address.country);
    await page.getByPlaceholder(addressPageLocators.nameInput.name).fill(address.name);
    await page.getByPlaceholder(addressPageLocators.mobileInput.name).fill(address.mobile); 
    await page.getByPlaceholder(addressPageLocators.zipInput.name).fill(address.zip);
    await page.getByPlaceholder(addressPageLocators.addressInput.name).fill(address.address);
    await page.getByPlaceholder(addressPageLocators.cityInput.name).fill(address.city);
    await page.getByRole(addressPageLocators.submitBtn.role, { name: addressPageLocators.submitBtn.name }).click();
    await expect(page.getByText(address.address).first()).toBeVisible();
}  

// find product by name
export async function findProductByName(page: Page, productName: string) {
    const searchIconHomepage = page.locator(homePageLocators.searchIconInput.name, { hasText: homePageLocators.searchIcon.name });    
    if (await searchIconHomepage.isVisible()) {
        await searchIconHomepage.click();
        await page.locator(homePageLocators.searchInput.name).fill(productName);
        await page.locator(homePageLocators.searchInput.name).press('Enter');
        await page.waitForTimeout(TIMEOUT);
    }; 
}


// Verify product by name
export async function verifyProductByName(page: Page, productName: string, i: number) {    
    const productLocator = page.locator(homePageLocators.rowProductName.name, { hasText: new RegExp(productName, 'i') });
    const productCount = await productLocator.count();
    expect (productCount).toBe(i);
}

// Verify product not exist
export async function verifyProductNotExist(page: Page, productName: string, i: number) {
    const productLocator = page.locator(homePageLocators.rowProductName.name, { hasText: new RegExp(productName, 'i') });
    const productCount = await productLocator.count();
    expect (productCount).toBe(i);
}
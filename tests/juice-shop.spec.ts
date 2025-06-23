import { test } from '@playwright/test';
import { gotoUrl, closeBanners, login, selectProduct, openBasketAndCheckout, addAddress, findProductByName, verifyProductByName, verifyProductNotExist} from '../src/utils/commonActions';
import { ADDRESS_1, ADDRESS_2, DEMO_PRODUCT } from '../src/test_datas/constants';


test.beforeEach(async ({ page }) => {
    await gotoUrl(page);
    await page.context().clearCookies();
    await page.evaluate(() => localStorage.clear());
});

test('1 should complete after checkout with one item', async ({ page }) => {
    await closeBanners(page);
    await login(page);
    await selectProduct(page, 0);   
    await openBasketAndCheckout(page);
    await addAddress(page, ADDRESS_1);

});

test('2 should complete after checkout with two items', async ({ page }) => {
    await closeBanners(page);
    await login(page);
    await selectProduct(page, 0);
    await selectProduct(page, 1);
    await openBasketAndCheckout(page);
    await addAddress(page, ADDRESS_2);
});

test('3 should search for apple and verify results', async ({ page }) => {
    await closeBanners(page);
    await findProductByName(page, DEMO_PRODUCT.name1);
    await verifyProductByName(page, DEMO_PRODUCT.name1, 2);
    await verifyProductNotExist(page, DEMO_PRODUCT.name2, 0);
});




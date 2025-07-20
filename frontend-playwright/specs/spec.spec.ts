import { test } from "@playwright/test";
import { SpecPage } from "../page_objects/specPage.ts";
import { TestData } from "../fixtures/testData.ts";
import { ExpResults } from "../fixtures/expectedResults.ts";

test.describe("User buy a product", () => {
  test("User login", async ({ page }) => {
    const specs = new SpecPage(page);
    const data = new TestData();
    const expected = new ExpResults();

    await specs.gotoUrl(`${process.env.BASEURL}`);
    //await specs.titleHeader();
    await specs.nameUser(`${process.env.NAMEUSER}`);
    await specs.passUser(`${process.env.PASS}`);

    await specs.submitForm();
    await specs.gotoUrl(process.env.BASEURL + "inventory.html");

    await specs.productsTittle();

    await specs.productsList();

    await specs.clickSecondProduct();

    await specs.gotoUrl(process.env.BASEURL + "inventory-item.html?id=2");

    await specs.showProductTitle();

    await specs.showProductDesc();

    await specs.showProductPrice();

    await specs.showBtnAddToCart();

    await specs.showShoppingCart();

    await specs.gotoUrl(process.env.BASEURL + "cart.html");

    await specs.showCartInventoryItem();

    await specs.showcheckoutBtn();

    await specs.gotoUrl(process.env.BASEURL + "checkout-step-one.html");

    await specs.showCheckoutInfo(expected.checkoutInfo);

    await specs.showForm();

    await specs.fillForm(
      data.userInfo.userFName,
      data.userInfo.userLName,
      data.userInfo.userPCode
    );

    await specs.clickContinue();

    await specs.gotoUrl(process.env.BASEURL + "checkout-step-two.html");

    await specs.showCheckoutInfo(expected.checkoutOverview);

    await specs.showOverviewCartList();

    await specs.showPaymentInfoLabel(expected.paymentInfoLable);

    await specs.showPaymentInfoValue(expected.paymentInfoValue);

    await specs.showShippingInfoLabel(expected.shippingInfoLabel);

    await specs.showShippingInfoValue(expected.shippingInfoValue);

    await specs.showTotalPriceLabel(expected.totalPriceLabel);

    await specs.showSubTotal();
    await specs.showTaxApplied();
    //await specs.showTotalPrice();
    await specs.showBtnFinish();

    await specs.gotoUrl(process.env.BASEURL + "checkout-complete.html");

    await specs.showCompleteMessage(expected.thanksMessage);
  });
});

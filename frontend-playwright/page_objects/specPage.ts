import { expect, Locator, Page } from "@playwright/test";

export class SpecPage {
  readonly page: Page;
  readonly pageHeader: Locator;
  readonly userNameInput: Locator;
  readonly userPassInput: Locator;
  readonly submitBtn: Locator;
  readonly productsHeader: Locator;
  readonly inventoryList: Locator;
  readonly clickedProduct: Locator;
  readonly headerClickedProduct: Locator;
  readonly productDescription: Locator;
  readonly productPrice: Locator;
  readonly addToCart: Locator;
  readonly shoppingCart: Locator;
  readonly cartInventoryItem: Locator;
  readonly checkoutBtn: Locator;
  readonly checkoutInfo: Locator;
  readonly checkoutForm: Locator;
  readonly userFirstName: Locator;
  readonly userLastName: Locator;
  readonly userPostalCode: Locator;
  readonly btnContinue: Locator;
  readonly checkoutOverview: Locator;
  readonly overviewCartList: Locator;
  readonly paymentInfoLabel: Locator;
  readonly paymentInfoValue: Locator;
  readonly shippingInfoLabel: Locator;
  readonly shippingInfoValue: Locator;
  readonly totalPriceLabel: Locator;
  readonly subTotal: Locator;
  readonly taxApplied: Locator;
  readonly totalPrice: Locator;
  readonly btnFinish: Locator;
  readonly completeMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageHeader = page.locator("class='login_logo'");
    this.userNameInput = page.locator("data-test=username");
    this.userPassInput = page.locator("data-test=password");
    this.submitBtn = page.locator("data-test=login-button");
    this.productsHeader = page.locator("data-test=title");
    this.inventoryList = page.locator("data-test=inventory-list");
    this.clickedProduct = page.locator('[data-test="inventory-item"]').nth(1);
    this.headerClickedProduct = page.locator("data-test=inventory-item-name");
    this.productDescription = page.locator("data-test=inventory-item-desc");
    this.productPrice = page.locator("data-test=inventory-item-price");
    this.addToCart = page.locator("data-test=add-to-cart");
    this.shoppingCart = page.locator("data-test=shopping-cart-link");
    this.cartInventoryItem = page.locator("data-test=inventory-item");
    this.checkoutBtn = page.locator("data-test=checkout");
    this.checkoutInfo = page.locator("data-test=title");
    this.checkoutForm = page.locator("data-test=checkout-info-container");
    this.userFirstName = page.locator("data-test=firstName");
    this.userLastName = page.locator("data-test=lastName");
    this.userPostalCode = page.locator("data-test=postalCode");
    this.btnContinue = page.locator("data-test=continue");
    this.overviewCartList = page.locator("data-test=cart-list");
    this.paymentInfoLabel = page.locator("data-test=payment-info-label");
    this.paymentInfoValue = page.locator("data-test=payment-info-value");
    this.shippingInfoLabel = page.locator("data-test=shipping-info-label");
    this.shippingInfoValue = page.locator("data-test=shipping-info-value");
    this.totalPriceLabel = page.locator("data-test=total-info-label");
    this.subTotal = page.locator("data-test=subtotal-label");
    this.taxApplied = page.locator("data-test=tax-label");
    this.totalPrice = page.locator('class="summary_total_label"');
    this.btnFinish = page.locator("data-test=finish");
    this.completeMessage = page.locator("data-test=complete-header");
  }

  async titleHeader() {
    await expect(this.pageHeader).toBeVisible();
  }

  async nameUser(value: string) {
    await this.userNameInput.click();
    await this.userNameInput.fill(value);
  }

  async passUser(value: string) {
    await this.userPassInput.click();
    await this.userPassInput.fill(value);
  }
  async submitForm() {
    await this.submitBtn.click();
  }
  async gotoUrl(url: string) {
    await this.page.goto(url);
  }

  async productsTittle() {
    await expect(this.productsHeader).toBeVisible();
  }

  async productsList() {
    await expect(this.inventoryList).toBeVisible();
  }
  async clickSecondProduct() {
    await this.clickedProduct.click();
  }

  async showProductTitle() {
    await expect(this.headerClickedProduct).toBeVisible();
  }

  async showProductDesc() {
    await expect(this.productDescription).toBeVisible();
  }

  async showProductPrice() {
    await expect(this.productPrice).toBeVisible();
  }

  async showBtnAddToCart() {
    await expect(this.addToCart).toBeVisible();
    await this.addToCart.click();
  }

  async showShoppingCart() {
    await expect(this.shoppingCart).toBeVisible();
    (await this.shoppingCart.innerText()) === "1";
    await this.shoppingCart.click();
  }

  async showCartInventoryItem() {
    await expect(this.cartInventoryItem).toBeVisible();
  }

  async showcheckoutBtn() {
    await expect(this.checkoutBtn).toBeVisible();
    await this.checkoutBtn.click();
  }

  async showCheckoutInfo(title: string) {
    await expect(this.checkoutInfo).toBeVisible();
    (await this.checkoutInfo.innerText()) === title;
  }

  async showForm() {
    await expect(this.checkoutForm).toBeVisible();
  }
  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await this.userFirstName.fill(firstName);
    await this.userLastName.fill(lastName);
    await this.userPostalCode.fill(postalCode);
  }

  async clickContinue() {
    await expect(this.btnContinue).toBeVisible();
    await this.btnContinue.click();
  }
  async showOverviewCartList() {
    await expect(this.overviewCartList).toBeVisible();
  }

  async showPaymentInfoLabel(label: string) {
    await expect(this.paymentInfoLabel).toBeVisible();
    (await this.paymentInfoLabel.innerText()) === label;
  }
  async showPaymentInfoValue(value: string) {
    await expect(this.paymentInfoValue).toBeVisible();
    (await this.paymentInfoValue.innerText()) === value;
  }

  async showShippingInfoLabel(label: string) {
    await expect(this.shippingInfoLabel).toBeVisible();
    (await this.shippingInfoLabel.innerText()) === label;
  }

  async showShippingInfoValue(value: string) {
    await expect(this.shippingInfoValue).toBeVisible();
    (await this.shippingInfoValue.innerText()) === value;
  }
  async showTotalPriceLabel(label: string) {
    await expect(this.totalPriceLabel).toBeVisible();
    (await this.totalPriceLabel.innerText()) === label;
  }

  async showSubTotal() {
    await expect(this.subTotal).toBeVisible();
  }
  async showTaxApplied() {
    await expect(this.taxApplied).toBeVisible();
  }

  async showTotalPrice() {
    await expect(this.totalPrice).toBeVisible();
  }

  async showBtnFinish() {
    await expect(this.btnFinish).toBeVisible();
    await this.btnFinish.click();
  }
  async showCompleteMessage(message: string) {
    await expect(this.completeMessage).toBeVisible();
    (await this.completeMessage.innerText()) === message;
  }
}

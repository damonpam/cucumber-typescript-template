import { Given, Then, When } from 'cucumber';
import { expect } from 'tests/support/chai';
import { Product } from 'types/cucumber';

Given('Daniel has an empty product list', function () {
  expect(this.productList).to.be.empty;
});

When('he adds a {ProductName} to the list', function (product: Product) {
  this.productList.push(product);
});

Then('the product list should contain {int} product', function (amount: number) {
  expect(this.productList.length).to.be.equal(amount);
});

import { expect, test } from 'vitest';
import { Configuration, Environments, ProductsApi } from '../dist';

const PRODUCT_ID = process.env.TEST_PRODUCT_ID as string;

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: process.env.SANDBOX_API_TOKEN,
});

const api = new ProductsApi(config);

test("list products", async () => {
  const products = await api.listProducts().then(({ data }) => data.products);

  expect(products.length).toBeGreaterThan(0);

  products.slice(0, 10).forEach(product => {
    expect(product).toHaveProperty("id");
    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("currency_codes");
  });
});

test("get a product", async () => {
  const product = await api.getProduct(PRODUCT_ID).then(({ data }) => data.product);

  expect(product.id).toEqual(PRODUCT_ID);
  expect(product).toHaveProperty("name");
  expect(product).toHaveProperty("currency_codes");
});

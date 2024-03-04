import { expect, test } from 'vitest';
import { Configuration, Environments, InvoicesApi } from '../dist';

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: process.env.SANDBOX_API_TOKEN,
});

const api = new InvoicesApi(config);

test("list invoices", async () => {
  const invoices = await api.listInvoices().then(({ data }) => data.invoices);

  expect(invoices.length).toBeGreaterThan(0);

  invoices.forEach(invoice => {
    expect(invoice).toHaveProperty("id");
    expect(invoice).toHaveProperty("po_number");
    expect(invoice).toHaveProperty("amount");
    expect(invoice).toHaveProperty("created_at");
  });
});

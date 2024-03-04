import { expect, test } from 'vitest';
import { Configuration, Environments, FundingSourcesApi } from '../dist';

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: process.env.SANDBOX_API_TOKEN,
});

const api = new FundingSourcesApi(config);

test("list funding sources", async () => {
  const fundingSources = await api.listFundingSources().then(({ data }) => data.funding_sources);

  expect(fundingSources.length).toBeGreaterThan(0);

  fundingSources.slice(0, 10).forEach(fundingSource => {
    expect(fundingSource).toHaveProperty("id");
    expect(fundingSource).toHaveProperty("method");
    expect(fundingSource).toHaveProperty("meta");
  });
});

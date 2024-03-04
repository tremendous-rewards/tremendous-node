import { expect, test } from 'vitest';
import { Configuration, Environments, CampaignsApi } from '../dist';

const CAMPAIGN_ID = process.env.TEST_CAMPAIGN_ID as string;

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: process.env.SANDBOX_API_TOKEN,
});

const api = new CampaignsApi(config);

test("list campaigns", async () => {
  const campaigns = await api.listCampaigns().then(({ data }) => data.campaigns);

  expect(campaigns.length).toBeGreaterThan(0);

  campaigns.forEach(campaign => {
    expect(campaign).toHaveProperty("id");
    expect(campaign).toHaveProperty("name");
    expect(campaign).toHaveProperty("description");
    expect(campaign).toHaveProperty("products");
  });
});

test("get a campaign", async () => {
  const campaign = await api.getCampaign(CAMPAIGN_ID).then(({ data }) => data.campaign);

  expect(campaign.id).toEqual(CAMPAIGN_ID);
  expect(campaign.products).toHaveLength(3);
  expect(campaign.name).toEqual("Default Campaign")
});

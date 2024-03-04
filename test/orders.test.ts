import { expect, test } from 'vitest';
import { Configuration, Environments, OrdersApi, CreateOrderRequest } from '../dist';

const CAMPAIGN_ID = process.env.TEST_CAMPAIGN_ID as string;
const RECIPIENT_EMAIL = process.env.TEST_RECIPIENT_EMAIL as string;

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: process.env.SANDBOX_API_TOKEN,
});

const api = new OrdersApi(config);

test("list orders", async () => {
  const orders = await api.listOrders().then(({ data }) => data.orders);

  expect(orders.length).toBeGreaterThan(0);

  orders.forEach(order => {
    expect(order).toHaveProperty("id");
    expect(order).toHaveProperty("created_at");
    expect(order).toHaveProperty("payment");
  });
});

test("submit an order with a campaign", async () => {
  const params: CreateOrderRequest = {
    payment: {
      funding_source_id: "balance",
    },
    reward:
      {
        delivery: {
          method: "EMAIL"
        },
        recipient: {
          name: "Recipient Name",
          email: RECIPIENT_EMAIL
        },
        value: {
          denomination: 5.0,
          currency_code: "USD",
        },
         campaign_id: CAMPAIGN_ID,
      }
  };

  const { data } = await api.createOrder(params);
  expect(data.order).toHaveProperty("id");
  expect(data.order.campaign_id).toEqual(CAMPAIGN_ID);
});


test("raise validation errors", async () => {
  try {
    await api.createOrder({ payment: { funding_source_id: "WRONG ID" }, reward: {}});
  } catch(error) {
    const { status, data } = error.response;
    expect(status).toEqual(422);
    expect(data.errors).toHaveProperty("payload");
    expect(data.errors).toHaveProperty("message");
  }
});

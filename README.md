A node.js client library for the [Tremendous API][docs].

> [!NOTE]
> This branch includes the v3 version of the Tremendous Node.JS client, a new version based
> on our [API schema][ref] docs. If you are using the v2 versions, please check our
> [`UPGRADING`](UPGRADING.md) guide

## Installation

```console
$ npm install tremendous
```

## Getting started

All API requests require an access token.  A sandbox access token is assigned upon signup through the [Tremendous Sandbox Environment][docs]. Once you are ready to move to production, you will be assigned a production access token.

### Authentication
## Getting started

All endpoints require a `Configuration` object with a `basePath` and an `accessToken` for either your
Production or Sandbox account:

```typescript
import { Configuration, Environments } from "tremendous";

// when you are testing your code with the sandbox environment:
const configuration = new Configuration({
  basePath: Environments.testflight,
  accessToken: "YOUR-TESTFLIGHT-TOKEN",
});

// when you are ready to use the API:
const configuration = new Configuration({
  basePath: Environments.production,
  accessToken: "YOUR-PRODUCTION-TOKEN",
});
```

## Examples

Submitting an order:

```typescript
import { OrdersApi, CreateOrderRequest } from "tremendous";

const orders = new OrdersApi(configuration);
const params: CreateOrderRequest = {
  payment: {
    funding_source_id: "[FUNDING SOURCE ID HERE]",
  },
  reward:
    {
      delivery: {
        method: "EMAIL"
      },
      recipient: {
        name: "Recipient Name",
        email: "recipient@domain"
      },
      value: {
        denomination: 5.0,
        currency_code: "USD",
      },
       campaign_id: "[CAMPAIGN_ID]",
    }
};

const { data } = await orders.createOrder(params);
console.log(`Order created! ID: ${data.order.id}`);
```

Retrieving an Order and a Reward

```typescript
import { OrdersApi, RewardsApi } from "tremendous";

const orders = new OrdersApi(configuration);
const rewards = new RewardsApi(configuration);

const { order } = (await orders.getOrder("[ORDER_ID]")).data;
const { reward } = (await rewards.getReward("[REWARD_ID]")).data;

console.log(`The order status is ${order.status}`);
console.log(`The reward was delivered to ${reward.recipient.email}`);
```

Listing products:

```typescript
import { ProductsApi } from "tremendous";

const client = new ProductsApi(configuration);

const { data } = await client.listProducts();

data.products.forEach(product => { /* */ });
```

Listing funding sources:

```typescript
import { FundingSourcesApi } from "tremendous";

const client = new FundingSourcesApi(configuration);

const { data } = await client.listFundingSources();

data.fundingSources.forEach(product => { /* */ });
```

[ref]: https://developers.tremendous.com/reference
[docs]: https://tremendous.com/docs

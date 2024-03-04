# Upgrading from v2.2.0

The `3.x.x` releases are a full rewrite based on our [API schema][ref] docs, that includes TypeScript
support and replaces callbacks with promises using Axios.

Here we have "before and after" of how a few API calls looked like with our v2 version, and how they
can be written using the new library.

## Creating an `Order`

### `v2`

```js
var Tremendous = require("tremendous");

var client = new Tremendous("[SANDBOX_ACCESS_TOKEN]", "https://testflight.tremendous.com/api/v2/");

const params = {
  payment: {
    funding_source_id: "[FUNDING_SOURCE_ID]",
  },
  reward: {
    value: {
      denomination: 25,
      currency_code: "USD"
    },
    campaign_id: "[CAMPAIGN_ID]",
    delivery: {
      method: "EMAIL",
    },
    recipient: {
      name: "Tremendous Recipient",
      email: "steve@stevens.com"
    }
  }
}

client.createOrder(params, function(error, response) {
  if (err) {
    console.log(`something went wrong ${error}`);
  } else {
    console.log(`Order created! ID: ${response.data.order.id}`);
  }
});
```

### `v3`

```js
import { Configuration, Environments, OrdersApi } from "tremendous";
const orders = new OrdersApi(configuration);

const configuration = new Configuration({
  basePath: Environments.testflight,
  accessToken: "[SANDBOX_ACCESS_TOKEN]",
});

const params = {
  payment: {
    funding_source_id: "[FUNDING_SOURCE_ID]",
  },
  reward: {
    value: {
      denomination: 25,
      currency_code: "USD"
    },
    campaign_id: "[CAMPAIGN_ID]",
    delivery: {
      method: "EMAIL",
    },
    recipient: {
      name: "Tremendous Recipient",
      email: "steve@stevens.com"
    }
  }
}

try {
  const { data } = await orders.createOrder(params);
  console.log(`Order created! ID: ${data.order.id}`);
} catch(error) {
  console.log(`something went wrong ${error}`);
}
```

## Retrieving an `Order`

### `v2`

```js
var Tremendous = require("tremendous");

var client = new Tremendous("[SANDBOX_ACCESS_TOKEN]", "https://testflight.tremendous.com/api/v2/");

client.getOrder("[ORDER_ID]", function(err, response) {
  console.log(`Order was created at: ${response.data.order.created_at}`);
});
```

### `v3`

```js
import { Configuration, Environments, OrdersApi } from "tremendous";
const orders = new OrdersApi(configuration);

const configuration = new Configuration({
  basePath: Environments.testflight,
  accessToken: "[SANDBOX_ACCESS_TOKEN]",
});

const { data } = api.getOrder("[ORDER_ID]");
console.log(`Order was created at: ${data.order.created_at}`);
```

## Listing `Funding Source`s

### `v2`

```js
var Tremendous = require("tremendous");

var client = new Tremendous("[SANDBOX_ACCESS_TOKEN]", "https://testflight.tremendous.com/api/v2/");

client.getFundingSources({}, function(err, response) {
  const fundingSources = response.funding_sources;
  console.log(fundingSources.map(f => f.method));
});
```

### `v3`

```js
import { Configuration, Environments, FundingSourcesApi } from '../dist';

const config = new Configuration({
  basePath: Environments.testflight,
  accessToken: "[SANDBOX_ACCESS_TOKEN]",
});

const api = new FundingSourcesApi(config);
const fundingSources = await api.listFundingSources().then(({ data }) => data.funding_sources);

console.log(fundingSources.map(f => f.method));
```

[ref]: https://developers.tremendous.com/reference

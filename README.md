tremendous
==============

A node.js client library for the [Tremendous API][1].

## Installation

```console
$ npm install tremendous
```

## Getting started

All API requests require an access token.  A sandbox access token is assigned upon signup through the [Tremendous Sandbox Environment][2]. Once you are ready to move to production, you will be assigned a production access token.

### Authentication

```javascript
var Tremendous = require('tremendous');

// Sandbox environment
var client = new Tremendous("[SANDBOX_ACCESS_TOKEN]", "https://testflight.tremendous.com/api/v2/");

// Production environment
var client = new Tremendous("[PRODUCTION_ACCESS_TOKEN]", "https://www.tremendous.com/api/v2/");
```


### Orders

See [API documentation][3] for all Order attributes.

```javascript
// Create a new order, specifying your gift options
// as an array of objects.

const order_data = {
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

client.createOrder(order_data, function(err, results) {
  console.log(JSON.stringify(err, null, 2));
  console.log(JSON.stringify(results, null, 2));
});


// Return a reward by ID
client.getReward("[REWARD_ID]", function(err, result) {
  console.log(JSON.stringify(result, null, 2));
});
```

### Funding Sources
Production funding sources must be added through the web dashboard. A sandbox funding source is provided during development.

```javascript
// Retrieve a list of your funding sources (credit card, ach, etc).
client.getFundingSources({}, function(err, results) {
  console.log(JSON.stringify(results, null, 2));
});
```

### Products

```javascript
client.getProducts({}, function(err, results) {
  console.log(JSON.stringify(results, null, 2));
});
```

[1]: https://tremendous.com/docs
[2]: https://testflight.tremendous.com/rewards
[3]: https://tremendous.com/docs

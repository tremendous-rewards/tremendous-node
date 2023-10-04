'use strict';

var _ = require('lodash');
var request = require('request');
var jwt = require('jsonwebtoken');

var Tremendous = module.exports = function(accessToken, uri) {
  if (_.isNil(accessToken)) {
    throw new Error('Tremendous "Access Token" required');
  } else if (_.isNil(uri)) {
    throw new Error('Tremendous "URI" required');
  } else {
    this.accessToken = accessToken;
    this.uri = uri;
  }
};

// Organizations
Tremendous.prototype.createOrganization = _.partial(client, 'organizations', "POST");
Tremendous.prototype.getOrganizations = _.partial(client, 'organizations', "GET", {});

// products
Tremendous.prototype.getProducts = _.partial(client, 'products', "GET");

// Orders
Tremendous.prototype.createOrder = _.partial(client, 'orders', "POST");
Tremendous.prototype.getOrders = _.partial(client, 'orders', "GET");
Tremendous.prototype.getOrder = function(id, callback) {
  return client.call(this, 'orders/' + id, "GET", {}, callback);
};

// Gifts
Tremendous.prototype.getReward = function(id, callback) {
  return client.call(this, 'rewards/' + id, "GET", {}, callback);
};

// FundingSources
Tremendous.prototype.getFundingSources = _.partial(client, 'funding_sources', "GET");

// Tokenize for the embedded client
Tremendous.prototype.tokenizeEmbed = function(payload) {
  return jwt.sign(payload, this.accessToken, {algorithm: "HS256"});
};

function client(path, method, options, callback) {
  var data = _.merge({}, {
    url: this.uri + path,
    method: method,
    headers: {
      "User-agent": "Tremendous Node v2.2.0",
      "authorization": "Bearer " + this.accessToken
    },
    json: true
  }, method == "GET" ? {qs: options} : {json: options});

  return request(data, handleResponse(callback));
};

function handleResponse(callback) {
  function handler(err, res, body) {
    if (err) {
      callback(err, null);
    } else if (res.statusCode != 200) {
      callback(body, null);
    } else {
      callback(null, body);
    }
  }

  // If a callback is not specified, noop.
  return callback ? handler : function() {};
};

'use strict';

var _ = require('lodash');
var request = require('request');
var jwt = require('jsonwebtoken');

var Tremendous = module.exports = function(accessToken, domain) {
  if (_.isNil(accessToken)) {
    throw new Error('Tremendous "Access Token" required');
  } else {
    this.accessToken = accessToken;
    this.domain = domain || "https://www.tremendous.com";
  }
};

// Organizations
Tremendous.prototype.createOrganization = _.partial(client, 'organizations', "POST");
Tremendous.prototype.getOrganizations = _.partial(client, 'organizations', "GET", {});

// Organizations
Tremendous.prototype.getCatalog = function(callback) {
  client.call(this, 'catalog', "GET", {}, callback);
};

// Organization Members
Tremendous.prototype.createOrganizationMember = function(accountId, options, callback) {
  return client.call(this, 'organizations/' + accountId + '/members', "POST", options, callback);
};
Tremendous.prototype.getOrganizationMembers = function(accountId, callback) {
  return client.call(this, 'organizations/' + accountId + '/members', "GET", {}, callback);
};

// Orders
Tremendous.prototype.createOrder = _.partial(client, 'orders', "POST");
Tremendous.prototype.getOrders = _.partial(client, 'orders', "GET");
Tremendous.prototype.getOrder = function(orderId, callback) {
  return client.call(this, 'orders/' + orderId, "GET", {}, callback);
};

// Gifts
Tremendous.prototype.getGifts = _.partial(client, 'gifts', "GET");
Tremendous.prototype.getGift = function(giftId, callback) {
  return client.call(this, 'gifts/' + giftId, "GET", {}, callback);
};

// FundingSources
Tremendous.prototype.getFundingSources = _.partial(client, 'funding_sources', "GET");

// Tokenize for the embedded client
Tremendous.prototype.tokenizeEmbed = function(payload) {
  return jwt.sign(payload, this.accessToken, {algorithm: "HS256"});
};

function client(path, method, options, callback) {
  var opts = _.merge({}, {
    access_token: this.accessToken,
  }, options);

  var data = _.merge({}, {
    url: this.domain + "/api/v1/" + path,
    method: method,
    headers: {
      "User-agent": "Plaid Node v2.0.0"
    },
    json: true
  }, method == "GET" ? {qs: opts} : {json: opts});

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

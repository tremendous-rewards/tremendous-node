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

// Orders
Tremendous.prototype.createOrder = _.partial(client, 'orders', "POST");
Tremendous.prototype.getOrders = _.partial(client, 'orders', "GET");
Tremendous.prototype.getOrder = function(orderId, callback) {
  return client.call(this, 'orders/' + orderId, "GET", {}, callback);
};

// Rewards
Tremendous.prototype.getRewards = _.partial(client, 'rewards', "GET");
Tremendous.prototype.getReward = function(rewardId, callback) {
  return client.call(this, 'rewards/' + rewardId, "GET", {}, callback);
};

// Campaigns
Tremendous.prototype.getCampaigns = _.partial(client, 'campaigns', "GET");

// Products
Tremendous.prototype.getProducts = _.partial(client, 'products', "GET");

// FundingSources
Tremendous.prototype.getFundingSources = _.partial(client, 'funding_sources', "GET");
Tremendous.prototype.getFundingSource = function(fundingSourceId, callback) {
  return client.call(this, 'funding_sources/' + fundingSourceId, "GET", {}, callback);
};

// Invoices
Tremendous.prototype.createInvoice = _.partial(client, 'invoices', "POST");
Tremendous.prototype.getInvoices = _.partial(client, 'invoices', "GET");
Tremendous.prototype.getInvoice = function(invoiceId, callback) {
  return client.call(this, 'invoices/' + invoiceId, "GET", {}, callback);
};
Tremendous.prototype.destroyInvoice = function(invoiceId, callback) {
  return client.call(this, 'invoices/' + invoiceId, "DELETE", {}, callback);
};
Tremendous.prototype.getInvoicePdf = function(invoiceId, callback) {
  return client.call(this, 'invoices/' + invoiceId + '/pdf', "GET", {}, callback);
};

// Organizations
Tremendous.prototype.createOrganization = _.partial(client, 'organizations', "POST");
Tremendous.prototype.getOrganizations = _.partial(client, 'organizations', "GET", {});
Tremendous.prototype.getOrganization = function(organizationId, callback) {
  return client.call(this, 'organizations/' + organizationId, "GET", {}, callback);
};

// Members
Tremendous.prototype.createMember = _.partial(client, 'members', "POST");
Tremendous.prototype.getMembers = _.partial(client, 'members', "GET");
Tremendous.prototype.getMember = function(memberId, callback) {
  return client.call(this, 'members/' + memberId, "GET", {}, callback);
};

// Tokenize for the embedded client
Tremendous.prototype.tokenizeEmbed = function(payload) {
  return jwt.sign(payload, this.accessToken, {algorithm: "HS256"});
};

function client(path, method, options, callback) {
  var opts = _.merge({}, {
    access_token: this.accessToken,
  }, options);

  var data = _.merge({}, {
    url: this.domain + "/api/v2/" + path,
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

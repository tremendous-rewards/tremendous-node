# Changelog

## [4.2.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v4.1.0...tremendous-v4.2.0) (2026-02-07)


### Features

* add create field endpoint (POST /fields) ([0817971](https://github.com/tremendous-rewards/tremendous-node/commit/0817971273bed122ef728906556c429b3d708dee))
* regenerate SDK ([#250](https://github.com/tremendous-rewards/tremendous-node/issues/250)) ([0817971](https://github.com/tremendous-rewards/tremendous-node/commit/0817971273bed122ef728906556c429b3d708dee))


### Bug Fixes

* type field data as structured object instead of untyped record ([0817971](https://github.com/tremendous-rewards/tremendous-node/commit/0817971273bed122ef728906556c429b3d708dee))

## [4.1.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v4.0.0...tremendous-v4.1.0) (2026-01-28)


### Features

* add currency support to invoices (USD, EUR, GBP) ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))
* add new Topups API (create, get, list) ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))
* allow BALANCE keyword in get_funding_source ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))
* expand fraud review schema with additional fields ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))
* regenerate SDK ([#244](https://github.com/tremendous-rewards/tremendous-node/issues/244)) ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))


### Bug Fixes

* make funding source meta fields nullable ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))
* update redemption method enum values ([74af7fa](https://github.com/tremendous-rewards/tremendous-node/commit/74af7fa96c32d6ca7d93481e42acf284654b4ad3))

## [4.0.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.11.0...tremendous-v4.0.0) (2025-10-21)


### ⚠ BREAKING CHANGES

* require Node 20+ ([#218](https://github.com/tremendous-rewards/tremendous-node/issues/218))

### Features

* add `subcategory` enum to Products ([524c992](https://github.com/tremendous-rewards/tremendous-node/commit/524c9929c8903551b6137a5ae218087b2a321f6e))
* regenerate SDK ([#219](https://github.com/tremendous-rewards/tremendous-node/issues/219)) ([524c992](https://github.com/tremendous-rewards/tremendous-node/commit/524c9929c8903551b6137a5ae218087b2a321f6e))
* remove `pending_confirmation` status from Funding Sources ([524c992](https://github.com/tremendous-rewards/tremendous-node/commit/524c9929c8903551b6137a5ae218087b2a321f6e)), closes [#207](https://github.com/tremendous-rewards/tremendous-node/issues/207)


### Miscellaneous Chores

* require Node 20+ ([#218](https://github.com/tremendous-rewards/tremendous-node/issues/218)) ([39cac0f](https://github.com/tremendous-rewards/tremendous-node/commit/39cac0f379bd555aac07deb624b384000030b6af))

## [3.11.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.10.0...tremendous-v3.11.0) (2025-08-11)


### Features

* add Cash App as product category ([410c035](https://github.com/tremendous-rewards/tremendous-node/commit/410c0359cb3de7ae5d9952b4fbb697a24c97c5a8))
* make funding source's address fields nullable ([410c035](https://github.com/tremendous-rewards/tremendous-node/commit/410c0359cb3de7ae5d9952b4fbb697a24c97c5a8))
* regenerate SDK ([#200](https://github.com/tremendous-rewards/tremendous-node/issues/200)) ([410c035](https://github.com/tremendous-rewards/tremendous-node/commit/410c0359cb3de7ae5d9952b4fbb697a24c97c5a8))

## [3.10.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.9.0...tremendous-v3.10.0) (2025-07-28)


### Features

* add credit_limit_cents to funding source for commercial invoicing ([0b441ef](https://github.com/tremendous-rewards/tremendous-node/commit/0b441efbd075451874fe55e61e686a59d4165b7e))
* include invoice data in funding sources schema ([0b441ef](https://github.com/tremendous-rewards/tremendous-node/commit/0b441efbd075451874fe55e61e686a59d4165b7e))
* regenerate SDK ([#194](https://github.com/tremendous-rewards/tremendous-node/issues/194)) ([0b441ef](https://github.com/tremendous-rewards/tremendous-node/commit/0b441efbd075451874fe55e61e686a59d4165b7e))
* update limit param in List rewards ([0b441ef](https://github.com/tremendous-rewards/tremendous-node/commit/0b441efbd075451874fe55e61e686a59d4165b7e)), closes [#181](https://github.com/tremendous-rewards/tremendous-node/issues/181)


### Bug Fixes

* update amount_money to amount in topup api ([0b441ef](https://github.com/tremendous-rewards/tremendous-node/commit/0b441efbd075451874fe55e61e686a59d4165b7e))

## [3.9.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.8.0...tremendous-v3.9.0) (2025-06-09)


### Features

* add more fields to the Funding Source resource ([1a316f7](https://github.com/tremendous-rewards/tremendous-node/commit/1a316f78b1bb7eb9b4165c43ea4114c8bb862beb))
* add support for the Cancel Reward endpoint ([1a316f7](https://github.com/tremendous-rewards/tremendous-node/commit/1a316f78b1bb7eb9b4165c43ea4114c8bb862beb))
* add support for the Connected Organization and Connected ([1a316f7](https://github.com/tremendous-rewards/tremendous-node/commit/1a316f78b1bb7eb9b4165c43ea4114c8bb862beb))
* regen SDK code ([#179](https://github.com/tremendous-rewards/tremendous-node/issues/179)) ([1a316f7](https://github.com/tremendous-rewards/tremendous-node/commit/1a316f78b1bb7eb9b4165c43ea4114c8bb862beb))
* update fields regarding disclosures on the Products resource ([1a316f7](https://github.com/tremendous-rewards/tremendous-node/commit/1a316f78b1bb7eb9b4165c43ea4114c8bb862beb))


### Bug Fixes

* expect `200` instead of `201` when creating a Report or a Campaign ([1a316f7](https://github.com/tremendous-rewards/tremendous-node/commit/1a316f78b1bb7eb9b4165c43ea4114c8bb862beb))

## [3.8.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.7.0...tremendous-v3.8.0) (2024-12-03)


### Features

* add `DeliveryMetadata` to `POST /orders` ([#126](https://github.com/tremendous-rewards/tremendous-node/issues/126)) ([850e653](https://github.com/tremendous-rewards/tremendous-node/commit/850e6535678f6e00dda17acb07d2f47fe2c637c3)), closes [#120](https://github.com/tremendous-rewards/tremendous-node/issues/120)


### Bug Fixes

* add missing `FraudReviewReason` value ([850e653](https://github.com/tremendous-rewards/tremendous-node/commit/850e6535678f6e00dda17acb07d2f47fe2c637c3))
* fix typos ([850e653](https://github.com/tremendous-rewards/tremendous-node/commit/850e6535678f6e00dda17acb07d2f47fe2c637c3))

## [3.7.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.6.0...tremendous-v3.7.0) (2024-11-08)


### Features

* add `discount` to `Order` payment details ([c74239d](https://github.com/tremendous-rewards/tremendous-node/commit/c74239df35ddedaae0277766dcd818f960b1429a))
* add `risk` property to fraud reviews ([c74239d](https://github.com/tremendous-rewards/tremendous-node/commit/c74239df35ddedaae0277766dcd818f960b1429a))
* include `order` property when possible on balance transactions endpoint ([#114](https://github.com/tremendous-rewards/tremendous-node/issues/114)) ([c74239d](https://github.com/tremendous-rewards/tremendous-node/commit/c74239df35ddedaae0277766dcd818f960b1429a))


### Bug Fixes

* fix `POST /orders` "created" response schema ([#117](https://github.com/tremendous-rewards/tremendous-node/issues/117)) ([4cade2d](https://github.com/tremendous-rewards/tremendous-node/commit/4cade2dd9880ea902e21398210f9bcede6ba8092))

## [3.6.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.5.1...tremendous-v3.6.0) (2024-11-04)


### Features

* add /reports endpoints ([#112](https://github.com/tremendous-rewards/tremendous-node/issues/112)) ([eb7e536](https://github.com/tremendous-rewards/tremendous-node/commit/eb7e5360e3cfaede2a18725454fa7a3b032c9d4c))
* add support for updated_phone and updated_email on POST /api/v2/reward/:id/resend ([eb7e536](https://github.com/tremendous-rewards/tremendous-node/commit/eb7e5360e3cfaede2a18725454fa7a3b032c9d4c))

## [3.5.1](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.5.0...tremendous-v3.5.1) (2024-09-26)


### Bug Fixes

* regenerate internal classes after spec cleanup ([#100](https://github.com/tremendous-rewards/tremendous-node/issues/100)) ([5ee0221](https://github.com/tremendous-rewards/tremendous-node/commit/5ee0221a6cb4ce33cd3f7d944cec49752984acc9))

## Changelog

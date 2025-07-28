# Changelog

## [4.0.0](https://github.com/tremendous-rewards/tremendous-node/compare/tremendous-v3.9.0...tremendous-v4.0.0) (2025-07-28)


### ⚠ BREAKING CHANGES

* update amount_money to amount in topup api

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

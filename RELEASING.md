## Step 1 - How to re-generate the SDK

The source code from this repo is generated using [OpenAPI generator][1] and the Open API specification for the Tremendous API, available to Tremendous engineers.

```console
# generate a fresh Open API spec file
cd core && bin/openapi-bundle

# generate new `.ts` files and compile them into `./dist`
cd tremendous-node-spike && bin/generate [PATH TO YML] && npm run build
```

## Step 2 - Update the version on `package.json`

Bump the version on `package.json` manually following [Semantic Versioning][2] practices - most changes here should be backwards compatible and deserve a MINOR version update

## Step 3 - Publish a new release on GitHub

The [publish.yml](.github/workflows/publish.yml) workflow is responsible for publishing the package to NPM when a new release is published on GitHub.


[1]: https://openapi-generator.tech
[2]: https://semver.org

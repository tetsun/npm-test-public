# npm-test-public

## Get started with GitHubPackages

```
 // Step 1: Use `publishConfig` option in your package.json
"publishConfig": { "registry": "https://npm.pkg.github.com/" }

// Step 2: Authenticate
// or add access token to .npmrc
$ npm login --registry=https://npm.pkg.github.com/

// Step 3: Publish
$ npm publish
```

## github actions で release

参考) https://help.github.com/ja/actions/language-and-framework-guides/publishing-nodejs-packages#publishing-packages-to-the-npm-registry


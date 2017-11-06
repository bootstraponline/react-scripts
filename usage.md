Contents of this repo are from:
- https://github.com/bootstraponline/create-react-app-typescript-1/tree/master/packages/react-scripts

The primary benefit of `create-react-app-typescript-1` is having CI setup on Travis / Bitrise. However `--scripts-version=` won't work when pointed at the full `create-react-app`. That's why this repo exists, to enable the scripts package to be installed directly from GitHub.

Install with:

```
create-react-app my_app --scripts-version=git+https://github.com/bootstraponline/react-scripts.git
```

```
git clone https://github.com/facebookincubator/create-react-app.git
cd create-react-app/packages/react-dev-utils
yarn
yarn link
```

```
cd my_app
yarn link react-dev-utils
yarn start
```

## Related Issues

- [wmonk/create-react-app-typescript#183](https://github.com/wmonk/create-react-app-typescript/pull/183) - `Upstream sync`
- [wmonk/create-react-app-typescript#182](https://github.com/wmonk/create-react-app-typescript/issues/182) - `Deps out of date`
- [create-react-app#3415](https://github.com/facebookincubator/create-react-app/issues/3415) - `Official TypeScript support`
- [create-react-app#682](https://github.com/facebookincubator/create-react-app/issues/682) - `--scripts-version fork docs`

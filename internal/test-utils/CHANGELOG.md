# @repo/test-utils

## 0.0.1

### Patch Changes

- [#310](https://github.com/tenedev/js-utils-kit/pull/310) [`2187ffb`](https://github.com/tenedev/js-utils-kit/commit/2187ffbc13149847d5d2e3e7b6ae0cdc5bfd78c3) Thanks [@tenedev](https://github.com/tenedev)! - Improved string utilities and package name validation:

  - `countWords` now returns `0` for empty and whitespace-only strings.
  - `isValidPackageName` now rejects npm-reserved names, including `node_modules` and `favicon.ico`.
  - `capitalize` now supports Unicode letters, correctly capitalizing strings such as `élan` and `über`.

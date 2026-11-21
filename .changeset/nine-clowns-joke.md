---
'@js-utils-kit/pm': patch
'@js-utils-kit/string': patch
'@repo/test-utils': patch
'@js-utils-kit/core': patch
js-utils-kit: patch
---

Improved string utilities and package name validation:

- `countWords` now returns `0` for empty and whitespace-only strings.
- `isValidPackageName` now rejects npm-reserved names, including `node_modules` and `favicon.ico`.
- `capitalize` now supports Unicode letters, correctly capitalizing strings such as `élan` and `über`.

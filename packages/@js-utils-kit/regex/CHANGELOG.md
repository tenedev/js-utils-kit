# @js-utils-kit/regex

## 0.3.1

### Patch Changes

- [`9b26c5c`](https://github.com/tenedev/js-utils-kit/commit/9b26c5cf209c28b01fda65e170d8894ee4584193) Thanks [@tenedev](https://github.com/tenedev)! - Fix a Regular Expression Denial of Service (ReDoS) vulnerability in HTML tag matching patterns.

  - Update "HTML_TAG_REGEX" to prevent quadratic-time execution on malformed input.
  - Update "STRICT_HTML_TAG_REGEX" with the same safe character-class restriction.
  - Prevent repeated "<" characters from being consumed during unsuccessful matching attempts.
  - Add regression tests covering malformed tags, incomplete tags, and adversarial input.
  - Preserve existing HTML tag and React fragment matching behavior.

## 0.3.0

### Minor Changes

- [#230](https://github.com/tenedev/js-utils-kit/pull/230) [`b34ae26`](https://github.com/tenedev/js-utils-kit/commit/b34ae260c2e86661733a9d2288defa483f050aac) Thanks [@tenedev](https://github.com/tenedev)! - Add `HTML_TAG_REGEX` and `STRICT_HTML_TAG_REGEX` regexes

## 0.2.0

### Minor Changes

- [#184](https://github.com/teneplaysofficial/js-utils-kit/pull/184) [`58b4795`](https://github.com/teneplaysofficial/js-utils-kit/commit/58b47959ef6c893ee56a649269b2a101f7bf7f07) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Add `NPM_PACKAGE_NAME_REGEX` for validating scoped and unscoped npm package names following npm naming conventions, including support for lowercase letters, numbers, `.`, `-`, and `_`.

## 0.1.0

### Minor Changes

- [#167](https://github.com/teneplaysofficial/js-utils-kit/pull/167) [`42bed98`](https://github.com/teneplaysofficial/js-utils-kit/commit/42bed982054ee2c84da302141b9ec08441ae996d) Thanks [@teneplaysofficial](https://github.com/teneplaysofficial)! - Introduce regex utilities package

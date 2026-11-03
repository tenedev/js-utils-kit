---
"@js-utils-kit/regex": patch
---

Fix a Regular Expression Denial of Service (ReDoS) vulnerability in HTML tag matching patterns.

- Update "HTML_TAG_REGEX" to prevent quadratic-time execution on malformed input.
- Update "STRICT_HTML_TAG_REGEX" with the same safe character-class restriction.
- Prevent repeated "<" characters from being consumed during unsuccessful matching attempts.
- Add regression tests covering malformed tags, incomplete tags, and adversarial input.
- Preserve existing HTML tag and React fragment matching behavior.

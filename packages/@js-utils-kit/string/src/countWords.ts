import { splitString } from './splitString';

/**
 * Counts the number of words in a string.
 *
 * @returns Number of words in the string.
 *
 * @example
 * ```ts
 * countWords("js utils kit");         // 3
 * countWords("   js   utils   kit");  // 3
 * countWords("");                     // 0
 * ```
 */
export function countWords(
  /** The input string */
  str: string,
): number {
  const value = str.trim();

  return value ? splitString(value).length : 0;
}

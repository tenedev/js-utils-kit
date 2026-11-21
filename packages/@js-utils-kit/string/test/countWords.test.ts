import { expect, it } from 'vitest';
import { countWords } from '../src';

it('should count words separated by spaces', () => {
  expect(countWords('js utils kit')).toBe(3);
});

it('should ignore multiple spaces', () => {
  expect(countWords('js    utils         kit')).toBe(3);
});

it('should handle leading/trailing spaces', () => {
  expect(countWords('   js utils kit   ')).toBe(3);
});

it('should return 0 for an empty string', () => {
  expect(countWords('')).toBe(0);
});

it('should return 0 for whitespace-only strings', () => {
  expect(countWords('   ')).toBe(0);
});

it('should return 0 for tabs and newlines only', () => {
  expect(countWords('\t\n\r')).toBe(0);
});

it('should count a single word', () => {
  expect(countWords('javascript')).toBe(1);
});

it('should handle tabs between words', () => {
  expect(countWords('js\tutils\tkit')).toBe(3);
});

it('should handle newlines between words', () => {
  expect(countWords('js\nutils\nkit')).toBe(3);
});

it('should handle mixed whitespace', () => {
  expect(countWords('  js\t utils\n  kit  ')).toBe(3);
});

it('should count words with punctuation', () => {
  expect(countWords('hello, world!')).toBe(2);
});

it('should handle Unicode words', () => {
  expect(countWords('café résumé über')).toBe(3);
});

it('should count numbers as words', () => {
  expect(countWords('123 456 789')).toBe(3);
});

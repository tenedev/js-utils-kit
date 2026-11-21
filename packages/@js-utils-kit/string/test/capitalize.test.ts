import { expect, it } from 'vitest';
import { capitalize } from '../src';

it('capitalizes the first lowercase letter', () => {
  expect(capitalize('hello')).toBe('Hello');
});

it('leaves already-capitalized strings unchanged', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

it('handles a single character', () => {
  expect(capitalize('h')).toBe('H');
  expect(capitalize('H')).toBe('H');
});

it('handles strings starting with a number (unchanged)', () => {
  expect(capitalize('1hello')).toBe('1hello');
  expect(capitalize('123')).toBe('123');
});

it('handles strings starting with symbols (unchanged)', () => {
  expect(capitalize('_hello')).toBe('_hello');
  expect(capitalize('!hello')).toBe('!hello');
  expect(capitalize('@hello')).toBe('@hello');
  expect(capitalize('#hello')).toBe('#hello');
  expect(capitalize('$hello')).toBe('$hello');
});

it('handles empty string', () => {
  expect(capitalize('')).toBe('');
});

it('handles strings with leading spaces', () => {
  expect(capitalize(' hello')).toBe(' hello');
  expect(capitalize('   hello')).toBe('   hello');
});

it('handles strings containing only spaces', () => {
  expect(capitalize('   ')).toBe('   ');
});

it('capitalizes Unicode letters', () => {
  expect(capitalize('élan')).toBe('Élan');
  expect(capitalize('über')).toBe('Über');
  expect(capitalize('ñandú')).toBe('Ñandú');
  expect(capitalize('привет')).toBe('Привет');
  expect(capitalize('こんにちは')).toBe('こんにちは');
});

it('leaves already-capitalized Unicode strings unchanged', () => {
  expect(capitalize('Élan')).toBe('Élan');
  expect(capitalize('Über')).toBe('Über');
  expect(capitalize('Привет')).toBe('Привет');
});

it('preserves the remaining characters', () => {
  expect(capitalize('hELLO')).toBe('HELLO');
  expect(capitalize('javaScript')).toBe('JavaScript');
  expect(capitalize('hello world')).toBe('Hello world');
});

it('handles mixed-case Unicode strings', () => {
  expect(capitalize('élAN')).toBe('ÉlAN');
  expect(capitalize('überCool')).toBe('ÜberCool');
});

it('handles strings containing only numbers and symbols', () => {
  expect(capitalize('12345')).toBe('12345');
  expect(capitalize('!@#$%')).toBe('!@#$%');
});

it('handles emojis at the beginning', () => {
  expect(capitalize('😀hello')).toBe('😀hello');
  expect(capitalize('🚀javascript')).toBe('🚀javascript');
});

it('handles supplementary-plane Unicode letters', () => {
  expect(capitalize('𐐨hello')).toBe('𐐀hello');
});

it('does not capitalize letters after leading whitespace or symbols', () => {
  expect(capitalize(' hello')).toBe(' hello');
  expect(capitalize('_hello')).toBe('_hello');
  expect(capitalize('!hello')).toBe('!hello');
});

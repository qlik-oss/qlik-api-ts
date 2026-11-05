/* -------------------------------------------------------------------------- */
/*                          Random String Generation                          */
/* -------------------------------------------------------------------------- */

// Alphabet used by nanoid: URL-safe characters (a-zA-Z0-9_-)
const NANOID_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
const HEX_ALPHABET = "0123456789abcdef";

/**
 * Generates a random string from the given alphabet using crypto.getRandomValues
 * Works in both browser and Node.js environments
 */
function generateRandomFromAlphabet(alphabet: string, length: number): string {
  const bytes = new Uint8Array(length);
  globalThis.crypto.getRandomValues(bytes);

  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet[bytes[i] % alphabet.length];
  }
  return result;
}

/**
 * Method helper for generating a random string [a-zA-Z0-9\-_]{length}
 * @param length - the length of the string
 */
export function generateRandomString(targetLength: number): string {
  return generateRandomFromAlphabet(NANOID_ALPHABET, targetLength);
}

/**
 * Method helper for generating a random hexadecimal-string [0-9a-f]{length}
 * @param length - the length of the string
 */
export function generateRandomHexString(targetLength: number): string {
  return generateRandomFromAlphabet(HEX_ALPHABET, targetLength);
}

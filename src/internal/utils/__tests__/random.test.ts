import { describe, expect, it } from "vitest";
import { generateRandomHexString, generateRandomString } from "../random";

describe("oauth-utils.ts", () => {
  describe("generateRandomString", () => {
    it("should generate a random string of the specified length", async () => {
      let length = 10;
      let randomString = generateRandomString(length);
      expect(randomString).toHaveLength(length);
      length = 20;
      randomString = generateRandomString(length);
      expect(randomString).toHaveLength(length);
      // and some primes
      length = 13;
      randomString = generateRandomString(length);
      expect(randomString).toHaveLength(length);
      length = 17;
      randomString = generateRandomString(length);
      expect(randomString).toHaveLength(length);
    });

    it("should generate a different string each time it is called", async () => {
      const length = 10;
      const randomString1 = generateRandomString(length);
      const randomString2 = generateRandomString(length);
      expect(randomString1).not.toEqual(randomString2);
    });
  });
  describe("generateRandomHexString", () => {
    it("should generate a string with only hexadecimal characters", async () => {
      const str = generateRandomHexString(200);
      const charSet = "1234567890abcdef";
      for (const ch of str) {
        expect(charSet).toContain(ch);
      }
    });
  });
});

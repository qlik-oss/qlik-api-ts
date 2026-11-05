import { describe, it, vi } from "vitest";
import { escapeAngularJsExpressions } from "../oauth/callback";

// Stub the storage helpers so importing callback.ts does not pull in the
// storage-helpers -> auth-errors -> auth-module-registry -> oauth.ts import
// cycle, which would run handleOAuthCallback() against a half-initialized module
vi.mock("../oauth/storage-helpers", () => ({
  loadAndDeleteFromSessionStorage: vi.fn(),
  saveInSessionStorage: vi.fn(),
}));

const ZWSP = "\u200b";

describe("escapeAngularJsExpressions", () => {
  it("should break up {{ and }} so no interpolation markers remain", ({ expect }) => {
    const result = escapeAngularJsExpressions("{{constructor.constructor('alert(1)')()}}");

    expect(result).not.toContain("{{");
    expect(result).not.toContain("}}");
    expect(result).toBe(`{${ZWSP}{constructor.constructor('alert(1)')()}${ZWSP}}`);
  });

  it("should leave text without consecutive braces untouched", ({ expect }) => {
    const text = '<code>{"error":"access_denied","error_code":"1000"}</code>';

    expect(escapeAngularJsExpressions(text)).toBe(text);
  });

  it("should break up runs of three or more braces completely", ({ expect }) => {
    const result = escapeAngularJsExpressions("{{{a}}}");

    expect(result).not.toContain("{{");
    expect(result).not.toContain("}}");
    expect(result).toBe(`{${ZWSP}{${ZWSP}{a}${ZWSP}}${ZWSP}}`);
  });

  it("should neutralize a realistic rendered error payload", ({ expect }) => {
    const payload = `<code>${JSON.stringify({
      error: "access_denied",
      error_description: "{{$eval.constructor('alert(1)')()}}",
    })}</code>`;
    const result = escapeAngularJsExpressions(payload);

    expect(result).not.toContain("{{");
    expect(result).not.toContain("}}");
  });

  it("should render braces visually unchanged when zero-width spaces are stripped", ({ expect }) => {
    const text = '{{"a":{"b":"}}"}}}';
    const result = escapeAngularJsExpressions(text);

    expect(result.replaceAll(ZWSP, "")).toBe(text);
  });
});

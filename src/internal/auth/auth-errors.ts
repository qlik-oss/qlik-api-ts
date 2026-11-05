import type { AuthType } from "./auth-types";
import { getRegisteredAuthModules } from "./internal/auth-module-registry";

/* -------------------------------------------------------------------------- */
/*                             auth module errors                             */
/* -------------------------------------------------------------------------- */

/** Error is thrown when a host config has incorrect or missing settings */
export class InvalidHostConfigError extends Error {
  constructor(message: string) {
    super(`Invalid host config: ${message}`);
    this.name = "InvalidHostConfigError";
  }
}

/** Error is thrown when a host config has an auth type with incompatible settings */
export class UnexpectedAuthTypeError extends Error {
  constructor(...expectedAuthTypes: AuthType[]) {
    const ors = expectedAuthTypes.map((item, index) => (index === 0 ? `"${item}"` : `or "${item}"`)).join(" ");
    super(`HostConfig is not properly configured. authType is expected to be ${ors}`);
    this.name = "UnexpectedAuthTypeError";
  }
}

/** Error is thrown when a host config uses an auth type that has not been registered */
export class InvalidAuthTypeError extends Error {
  constructor(authType?: string) {
    const validAuthModules = getRegisteredAuthModules();
    super(
      `Not a valid auth type: ${authType}, valid auth types are; '${validAuthModules
        .filter((name) => name.toLowerCase() !== "qmfeembedframerauthmodule")
        .join("', '")}'`,
    );
    this.name = "InvalidAuthTypeError";
  }
}

export type AuthError = {
  title: string;
  detail: string;
  code: string;
  status: number;
};

function errorToString({ title, detail, code, status }: AuthError) {
  if (detail) {
    return `${title} - ${detail} (Status: ${status}, Code: ${code})`;
  }
  return `${title} (Status: ${status}, Code: ${code})`;
}

export class AuthorizationError extends Error {
  public errors: AuthError[] | undefined;
  constructor(errors: AuthError | AuthError[]) {
    if (typeof errors !== "object") {
      super("Unknown error");
      return;
    }
    const errorArray = Array.isArray(errors) ? errors : [errors];
    super(errorArray.map(errorToString).join(", "));
    this.errors = errorArray;
  }
}

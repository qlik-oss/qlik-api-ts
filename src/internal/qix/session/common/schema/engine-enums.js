/**
 * Get enunm definitions from Engine API based on engine's json specification
 */

import spec from "./engine-api";

const { enums } = spec;
for (const key in enums) {
  // Map each enum with a prefixed version "Nx" for backwards
  // compatibility:
  enums[`Nx${key}`] = enums[key];
}
export default enums;

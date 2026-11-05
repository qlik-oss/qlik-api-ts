import { vi } from "vitest";
import failOnConsole from "vitest-fail-on-console";
import createFetchMock from "vitest-fetch-mock";

failOnConsole();

createFetchMock(vi).enableMocks();

import { beforeEach, describe, expect, test } from "vitest";
import { extractMeta, getPlatform } from "../platform-functions";
import type { Platform, ProductInfo } from "../platform-types";

const productInfo = {
  composition: {
    productName: "Qlik Sense Mock",
    version: "0.0.0",
    senseId: "test build",
    releaseLabel: "test version",
    deploymentEnvironment: "test",
  },
  externalUrls: {
    serverHelpBaseUrl: "https://help.qlik.com/en-US/sense-cloud/csh/",
    personalHelpBaseUrl: "https://help.qlik.com/en-US/sense-cloud/csh/",
    cloudBaseUrl: "https://qlikcloud.com/",
    cloudUploadUrl: "https://qlikcloud.com/upload?",
    personalUpgradeBase: "qlik.com/QlikSenseDesktopUpgrade",
    personalUpgradeUrl:
      "https://github.com/qlik-download/saas-download-links/releases/download/qcs/Qlik_Sense_Desktop_setup.exe",
    qlikWebPageUrl: "https://www.qlik.com/",
  },
} satisfies ProductInfo;

describe("product-info", () => {
  const result = (data: Partial<Platform>): Platform => ({
    isCloud: false,
    isQCS: false,
    isQCG: false,
    isCloudConsole: false,
    isWindows: false,
    isQSE: false,
    isQSD: false,
    isQSM: false,
    isQSMOffline: false,
    isUnknown: false,
    ...data,
  });

  const updateServerResponse = ({ data, status = 200 }: { data?: ProductInfo; status?: number }) => {
    fetchMock.mockResponse(JSON.stringify(data), { status });
  };

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(productInfo), { status: 200 });
    globalThis.window.QlikMain = undefined;
  });

  test("should return the correct platform based on information in the product-info object", async () => {
    // Default handler returns a valid object, it implicitly is qcs
    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isCloud: true, isQCS: true, meta: extractMeta(productInfo) }),
    );

    let updatedProductInfo: ProductInfo = {
      ...productInfo,
      composition: {
        senseId: "test",
        releaseLabel: "test version",
        deploymentType: "qliksensedesktop",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );

    updatedProductInfo = {
      ...productInfo,
      composition: {
        senseId: "test",
        releaseLabel: "test version",
        deploymentType: "qliksenseserver",
        provider: "qlik",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isQSE: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );

    updatedProductInfo = {
      ...productInfo,
      composition: {
        senseId: "test",
        releaseLabel: "test version",
        deploymentType: "qlikanalyticsmobileoffline",
        provider: "qlik",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isQSM: true, isQSMOffline: true, meta: extractMeta(updatedProductInfo) }),
    );

    updatedProductInfo = {
      ...productInfo,
      composition: {
        senseId: "test",
        releaseLabel: "test version",
        deploymentType: "QlikSenseMobile",
        provider: "qlik",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isQSM: true, isQSE: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );

    updatedProductInfo = {
      ...productInfo,
      composition: {
        senseId: "QlikCloudServices",
        releaseLabel: "-",
        deploymentEnvironment: "stage",
        deploymentType: "qlikcloudservices",
        provider: "fedramp",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isCloud: true, isQCG: true, meta: extractMeta(updatedProductInfo) }),
    );

    updatedProductInfo = {
      ...productInfo,
      composition: {
        senseId: "QlikCloudServices",
        releaseLabel: "-",
        deploymentType: "cloud-console",
        provider: "eks",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ noCache: true })).toEqual(
      result({ isCloud: true, isCloudConsole: true, meta: extractMeta(updatedProductInfo) }),
    );
    expect(
      await getPlatform({
        noCache: true,
        hostConfig: { accessCode: "accessCode", clientId: "clientId" },
      }),
    ).toEqual(result({ isCloud: true, isCloudConsole: true, meta: extractMeta(updatedProductInfo) }));
  });

  test("should cache the http call for each host", async () => {
    let updatedProductInfo: ProductInfo = {
      ...productInfo,
      composition: {
        senseId: "test",
        releaseLabel: "test version",
        deploymentType: "qliksensedesktop",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ hostConfig: { authType: "windowscookie", host: "http://host-1.com" } })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );
    expect(await getPlatform({ hostConfig: { authType: "windowscookie", host: "http://host-1.com" } })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );
    expect(await getPlatform({ hostConfig: { authType: "windowscookie", host: "http://host-1.com" } })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );

    expect(fetch).toHaveBeenCalledOnce();

    updatedProductInfo = {
      ...productInfo,
      composition: {
        senseId: "test",
        releaseLabel: "test version",
        deploymentType: "qliksensedesktop",
      },
    };
    updateServerResponse({
      data: updatedProductInfo,
    });

    expect(await getPlatform({ hostConfig: { authType: "windowscookie", host: "http://host-2.com" } })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );
    expect(await getPlatform({ hostConfig: { authType: "windowscookie", host: "http://host-2.com" } })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );
    expect(await getPlatform({ hostConfig: { authType: "windowscookie", host: "http://host-2.com" } })).toEqual(
      result({ isQSD: true, isWindows: true, meta: extractMeta(updatedProductInfo) }),
    );

    expect(fetch).toHaveBeenCalledTimes(2);
  });

  test("should not cache if if `noCache: true` is provided", async () => {
    updateServerResponse({
      data: {
        ...productInfo,
        composition: {
          senseId: "test",
          releaseLabel: "test version",
          deploymentType: "qliksensedesktop",
        },
      },
    });

    await getPlatform({ noCache: true });
    await getPlatform({ noCache: true });
    await getPlatform({ noCache: true });
    await getPlatform({ noCache: true });

    expect(fetch).toHaveBeenCalledTimes(4);
  });

  test("should not cache if http call fails", async () => {
    updateServerResponse({
      status: 500,
      // Keeping payload here just make sure it handles the status code
      // and not the response shape
      data: {
        ...productInfo,
        composition: {
          senseId: "test",
          releaseLabel: "test version",
          deploymentType: "qliksensedesktop",
        },
      },
    });

    await getPlatform();
    await getPlatform();
    await getPlatform();
    await getPlatform();

    expect(fetch).toHaveBeenCalledTimes(4);

    updateServerResponse({
      status: 404,
      data: undefined,
    });

    await getPlatform();
    await getPlatform();
    await getPlatform();
    await getPlatform();

    expect(fetch).toHaveBeenCalledTimes(8);
  });

  test("should extract host-specific product-info from QlikMain if available", async () => {
    const host = "https://clip.eu.qlik-stage.com";
    globalThis.window.QlikMain = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      import: <T>(_id: string) => {
        return Promise.resolve({} as T);
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      resourceNeedsCredentials: (_resourcesUrl: string) => {
        return false;
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      applyFeatureOverrides: (_featureFlags: Record<string, boolean>) => {
        return Promise.resolve();
      },
      getRootUrl: () => {
        return host;
      },
      PRODUCT_INFO: productInfo,
      REGION: "",
      ENVIRONMENT: "",
      INTERNAL__DO_NOT_USE: {},
    };
    const qcgProductInfo: ProductInfo = {
      composition: {
        productName: "Qlik Cloud Services",
        senseId: "QlikCloudServices",
        releaseLabel: "-",
        deploymentEnvironment: "fed-stage",
        deploymentType: "qlikcloudservices",
        provider: "fedramp",
      },
      externalUrls: {
        serverHelpBaseUrl: "https://betahelp.qliktech.com/en-US/cloud-services/csh/",
        personalHelpBaseUrl: "https://betahelp.qliktech.com/en-US/cloud-services/csh/",
        cloudBaseUrl: "https://qlikcloud.com/",
        cloudUploadUrl: "https://qlikcloud.com/upload?",
        personalUpgradeBase: "qlik.com/QlikSenseDesktopUpgrade",
        personalUpgradeUrl: "http://qlik.com/QlikSenseDesktopUpgrade",
        qlikWebPageUrl: "https://www.qlik.com/",
      },
    };
    updateServerResponse({
      data: qcgProductInfo,
    });
    expect(await getPlatform({ hostConfig: { host }, noCache: true })).toEqual(
      result({ isCloud: true, isQCS: true, meta: extractMeta(productInfo) }),
    );
    expect(fetch).toHaveBeenCalledTimes(0);
    // Ensure that the product info is fetched for non-matching host.
    expect(await getPlatform({ hostConfig: { host: "https://qcs.fed.qlik-stage.com" }, noCache: true })).toEqual(
      result({ isCloud: true, isQCG: true, meta: extractMeta(qcgProductInfo) }),
    );
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  describe("extractMeta", () => {
    test("should only take some data from product info", () => {
      expect(extractMeta(productInfo)).toEqual({
        productId: "test build",
        productLabel: "Qlik Sense Mock (test version)",
        version: "0.0.0",
        urls: {
          personalHelpBaseUrl: "https://help.qlik.com/en-US/sense-cloud/csh/",
          personalUpgradeBase: "qlik.com/QlikSenseDesktopUpgrade",
          personalUpgradeUrl:
            "https://github.com/qlik-download/saas-download-links/releases/download/qcs/Qlik_Sense_Desktop_setup.exe",
          qlikWebPageUrl: "https://www.qlik.com/",
          serverHelpBaseUrl: "https://help.qlik.com/en-US/sense-cloud/csh/",
        },
      });
      expect(
        extractMeta({
          ...productInfo,
          composition: { ...productInfo.composition, releaseLabel: undefined, version: undefined },
        }),
      ).toEqual({
        productId: "test build",
        productLabel: "Qlik Sense Mock",
        urls: {
          personalHelpBaseUrl: "https://help.qlik.com/en-US/sense-cloud/csh/",
          personalUpgradeBase: "qlik.com/QlikSenseDesktopUpgrade",
          personalUpgradeUrl:
            "https://github.com/qlik-download/saas-download-links/releases/download/qcs/Qlik_Sense_Desktop_setup.exe",
          qlikWebPageUrl: "https://www.qlik.com/",
          serverHelpBaseUrl: "https://help.qlik.com/en-US/sense-cloud/csh/",
        },
      });
      // @ts-expect-error for testing
      expect(extractMeta({ ...productInfo, externalUrls: undefined })).toEqual(undefined);
    });
  });
});

import 'jest-preset-angular/setup-jest';

// @ts-ignore
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  }
}

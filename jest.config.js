module.exports = {
  displayName: 'AngularBuilders',
  modulePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/cache/',
    '<rootDir>/node_modules/',
    '<rootDir>/out-tsc/',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      isolatedModules: false,
    },
  },
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};

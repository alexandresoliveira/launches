import { pathsToModuleNameMapper } from 'ts-jest'
// @ts-ignore
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'


const jestConfig: JestConfigWithTsJest = {
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src'],
    testEnvironment: "jsdom",
    modulePaths: [compilerOptions.baseUrl], // <-- This will be set to 'baseUrl' value
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),

    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    // Module file extensions for importing
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    transformIgnorePatterns: [
        "<rootDir>/node_modules/(?!@foo)"
    ]
}

export default jestConfig;
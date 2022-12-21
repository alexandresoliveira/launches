module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/"],
    moduleNameMapper: {
        "^@application/(.*)$": "<rootDir>/src/application/$1",
        "^@domain/(.*)$": "<rootDir>/src/domain/$1",
        "^@infrastructure/(.*)$": "<rootDir>/src/infrastructure/$1",
        "^@shared/(.*)$": "<rootDir>/src/shared/$1",
    },
    collectCoverage: true,
    collectCoverageFrom: ["./src/domain/**", "./src/application/**", "./src/infrastructure/**"],
    coverageThreshold: {
        global: {
            lines: 60,
            funcs: 60,
            branch: 60,
            stmts: 60,
        },
    }
};
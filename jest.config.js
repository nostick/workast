module.exports = {
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            statements: 100,
        }
    },
    collectCoverageFrom: [
        '**/*.js',
    ],
    coveragePathIgnorePatterns: [
        'jest.config.js',
        'knexfile.js',
        '/coverage/',
        '/seeds/',
        '/scripts/',
        '/node_modules/',
        'tests/.*.js',
    ],
    verbose: true
};

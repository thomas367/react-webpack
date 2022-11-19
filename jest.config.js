module.exports = {
    clearMocks: true,
    // collectCoverageFrom: ['**/*.{js,jsx}'],
    maxWorkers: '50%',
    modulePaths: ['<rootDir>/src/'],
    moduleDirectories: ['node_modules', 'src'],
    roots: ['<rootDir>/src/'],
    testMatch: ['**/__tests__/**/?(*.)+(spec|test).js'],
    transformIgnorePatterns: ['/node_modules/'],
};

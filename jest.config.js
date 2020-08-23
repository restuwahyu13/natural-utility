module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/lib/**"],
  projects: [{
     dispayName: 'e2e test',
     testMatch: ['<rootDir>/__tests__/**/*.test.js']
  }]
}

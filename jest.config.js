module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/lib/**"],
  projects: [{
     dispayName: 'e2e testing',
     testMatch: ['<rootDir>/__tests__/**/*.test.js']
  }]
}

module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  collectCoverageFrom: ["**/lib/**"],
  roots: ["__tests__/"],
  testMatch: [
    "__tests__/.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)",
     "lib/.[jt]s?(x)", "**/?(*.)+(js|ts).[jt]s?(x)"
    ],
  coveragePathIgnorePatterns: ["node_modules", "small.dumy.json","big.dumy.json"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}

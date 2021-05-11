'use strict';

module.exports = {
  clearMocks: true,

  coverageDirectory: "coverage",

  moduleFileExtensions: [
    "js",
    "json",
    "jsx",
    "ts",
    "tsx",
    "node"
  ],

  roots: [
    "<rootDir>/src"
  ],

  testRegex: "(test|__test__)/.*.test.(tsx|ts|jsx|js)?$",

  
  transform: {
    "^.+.(tsx|ts)?$": "ts-jest"
  },


  moduleNameMapper: {
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};

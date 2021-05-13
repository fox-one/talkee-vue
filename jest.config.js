'use strict';

module.exports = {
  clearMocks: true,

  coverageDirectory: "coverage",

  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    "vue"
  ],

  roots: [
    "<rootDir>/src"
  ],

  testRegex: "(test|__test__)/.*.test.(vue|tsx|ts|jsx|js)?$",

  
  transform: {
    "^.+.ts$": "ts-jest",
    '^.+.vue$': 'vue-jest'
  },


  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  }
};

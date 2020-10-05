const {defaults} = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',  
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest"
   },
  moduleDirectories: ["node_modules","../src/Model"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
}
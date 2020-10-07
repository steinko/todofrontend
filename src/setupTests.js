require('jest-fetch-mock').enableMocks()
module.exports = {
    automomock: false,
    setupTestFrameworkScriptFile: "mock-local-storage",
    preset: '@shelf/jest-elasticsearch'
}

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.sessionStorage = sessionStorageMock;




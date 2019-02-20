exports.config = {
  specs: [
    'test_scripts/open-page.js'
  ], //chứa các test script cần test
  host: 'localhost',
  port: 9515,
  path: '/',
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 680800
  },
  logLevel: 'error',
}
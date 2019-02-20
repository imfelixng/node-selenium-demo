exports.config = {
  spec: [], //chứa các test script cần test
  host: 'localhost',
  port: 4444,
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
  logLevel: 'verbose',
}
describe('API Command', () => {
  it('Open Page', () => {
    browser.url('https://google.com');
    browser.pause(3000);
  });
});
import { RKAppPage } from './app.po';

describe('rkapp App', () => {
  let page: RKAppPage;

  beforeEach(() => {
    page = new RKAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

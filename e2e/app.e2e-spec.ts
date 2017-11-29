import { HomedepotPage } from './app.po';

describe('homedepot App', function() {
  let page: HomedepotPage;

  beforeEach(() => {
    page = new HomedepotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

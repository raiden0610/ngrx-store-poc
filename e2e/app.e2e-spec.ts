import { PocreduxPage } from './app.po';

describe('pocredux App', () => {
  let page: PocreduxPage;

  beforeEach(() => {
    page = new PocreduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

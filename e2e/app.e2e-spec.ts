import { GimmeMoneyPage } from './app.po';

describe('gimme-money App', () => {
  let page: GimmeMoneyPage;

  beforeEach(() => {
    page = new GimmeMoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

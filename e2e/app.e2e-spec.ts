import { PortfolioMikePage } from './app.po';

describe('portfolio-mike App', () => {
  let page: PortfolioMikePage;

  beforeEach(() => {
    page = new PortfolioMikePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

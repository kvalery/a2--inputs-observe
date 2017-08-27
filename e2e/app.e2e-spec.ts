import { ObservePage } from './app.po';

describe('observe App', () => {
  let page: ObservePage;

  beforeEach(() => {
    page = new ObservePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

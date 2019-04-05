import { Ng4practicePage } from './app.po';

describe('ng4practice App', () => {
  let page: Ng4practicePage;

  beforeEach(() => {
    page = new Ng4practicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

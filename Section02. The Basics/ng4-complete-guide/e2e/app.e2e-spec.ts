import { Ng4CompleteGuidePage } from './app.po';

describe('ng4-complete-guide App', () => {
  let page: Ng4CompleteGuidePage;

  beforeEach(() => {
    page = new Ng4CompleteGuidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

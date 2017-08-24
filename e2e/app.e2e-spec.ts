import { AngularThreeExamplesPage } from './app.po';

describe('angular-three-examples App', () => {
  let page: AngularThreeExamplesPage;

  beforeEach(() => {
    page = new AngularThreeExamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

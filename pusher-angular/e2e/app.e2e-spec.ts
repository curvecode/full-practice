import { PusherAngularPage } from './app.po';

describe('pusher-angular App', () => {
  let page: PusherAngularPage;

  beforeEach(() => {
    page = new PusherAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

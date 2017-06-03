import { ExpressEntryPage } from './app.po';

describe('express-entry App', () => {
  let page: ExpressEntryPage;

  beforeEach(() => {
    page = new ExpressEntryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to ee!!'))
      .then(done, done.fail);
  });
});

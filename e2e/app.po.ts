import { browser, by, element } from 'protractor';

export class ExpressEntryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ee-root h1')).getText();
  }
}

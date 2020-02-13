import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('cobiro test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should go to the webpage', () => {
    page.navigateTo();
  });
});

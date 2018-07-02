import { AgGridRowGroupingPage } from './app.po';

describe('ag-grid-row-grouping App', () => {
  let page: AgGridRowGroupingPage;

  beforeEach(() => {
    page = new AgGridRowGroupingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

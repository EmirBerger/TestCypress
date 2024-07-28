class searchPage {
  constructor() {
    this.searchText = '#search_action';
    this.searchButton = '#search_action > .action';
  }

  search(text) {
    cy.get(this.searchText).type(text)
    cy.get(this.searchButton).click()
  }
}

export default new searchPage()
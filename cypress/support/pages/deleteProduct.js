class deleteProduct{
  constructor() {
    this.removeItem = '#removeItem';
    this.emptyCart = '.action-primary';
  }

  deleteItem() {
    cy.get(this.removeItem,{ timeout: 10000 }).click()
    cy.get(this.emptyCart).click()
  }
}

export default new deleteProduct()
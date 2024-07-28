class checkQuotasPage{
  constructor() {
    this.openInstallmentsModal = '#open-installments-modal';
    this.inputBanckModal = '#inputbank';
    this.bankCredicoop = '#ui-id-21';
    this.inputCardModal = '#inputCard';
    this.cardVisa = '[data-card="Visa"]';
    this.calculateInstallmentsBtnModal = '#calculate_btn > .btn-primary';
    this.installmentsTable = '#installmentsTable'
  }

  openInstallments(){
    cy.get(this.openInstallmentsModal).click()
  }

  selectBanck(){
    cy.get(this.inputBanckModal).click()
    cy.get(this.bankCredicoop).click()
  }

  selectCard(){
    cy.get(this.inputCardModal).click()
    cy.get(this.cardVisa).click()
  }

  calculateInstallments = () =>{
    cy.get(this.calculateInstallmentsBtnModal).click()
  }

  validateNo60Quotas(){
    cy.get('#installmentsTable').should('not.contain', '60 cuotas')
  }

  validate3Quotas(){
    cy.get(this.installmentsTable).should('contain', '3 cuotas sin interés')
  }
}

export default new checkQuotasPage();
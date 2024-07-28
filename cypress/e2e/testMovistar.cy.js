/// <reference types="cypress" />

import searchPage from "../support/pages/searchPage"
import checkQuotasPage from "../support/pages/checkQuotasPage"
import deleteProduct from "../support/pages/deleteProduct"

describe('Pruebas de la tienda Movistar', () => {
  beforeEach(() => {
    cy.visit("https://tiendaonline.movistar.com.ar")
    cy.viewport(1280, 720);
  })

  it.only('CP001 - Validar cuotas en compra de equipo A14 - Cuotas.3', () => {
    searchPage.search('A14')
    cy.selectProduct('#product-item-info_14908')
    checkQuotasPage.openInstallments()
    checkQuotasPage.selectBanck()
    checkQuotasPage.selectCard()
    checkQuotasPage.calculateInstallments()
    checkQuotasPage.validate3Quotas()
    cy.screenshot('validate-3-quotas')
  })

  it('CP002 - Aplicar filtro de equipos', () => {
    //no se encuentra el filtro indicado en la consigna, lo reemplazo.
    cy.applyFilter('[data-value="250000_500000"] > a')
    cy.applyFilter('[data-value="802"] > a')
    cy.get('div.products > ol > li.product-item').its('length').as('equipmentCount').then((equipmentCount) => {
      cy.log(`Cantidad de equipos:  ${equipmentCount}`)
    })
  })

  it('CP002 - Aplicar filtro de equipos - Resolución menor ', () => {
    cy.viewport(1000, 660);
    cy.applyFilterSmallResolution('[data-value="250000_500000"] > a')
    cy.applyFilterSmallResolution('[data-value="802"] > a')
    cy.get('div.products > ol > li.product-item').its('length').as('equipmentCount').then((equipmentCount) => {
      cy.log(`Cantidad de equipos:  ${equipmentCount}`)
    })
  })

  it('CP003 - Validar cuotas en compra de equipo', () => {
    cy.selectProductIndex(2)
    checkQuotasPage.openInstallments()
    checkQuotasPage.selectBanck()
    checkQuotasPage.selectCard()
    checkQuotasPage.calculateInstallments()
    checkQuotasPage.validateNo60Quotas();
    cy.screenshot('validate-no-60-quotas')
  })

  // CP004 - Agregar un producto al carrito y validarlo.
  // - Seleccionar un producto del inicio de la tienda de movistar y agregarlo al carrito.
  // - En el carrito verificar si el producto seleccionado es el mismo del carrito (Nombre y precio).
  // - Eliminar el producto del carrito.

  it('CP004 - Verificar agregado correcto al carrito', () =>{
    cy.selectProductIndex(6)
    cy.getProductDetails().then(({ nameProduct, priceProduct}) =>{
      cy.addToCart()
      cy.cartProduct(nameProduct, priceProduct)
    })
    deleteProduct.deleteItem()
  })
})
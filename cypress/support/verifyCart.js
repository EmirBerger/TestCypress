Cypress.Commands.add('getProductDetails', () =>{
  let productDetails = {};
  cy.get('.base').invoke('text').then((name) => {
    productDetails.nameProduct = name.trim()
  })
  cy.get('#tab_card > .price_information > .price-content > .price-box > #final_price_terminals > .price-iva > :nth-child(1) > .price-container > #product-price-17653 > .price').invoke('text').then((price) => {
    productDetails.priceProduct = price.trim()
  }).then(() =>{
    return productDetails;
  })
})

Cypress.Commands.add('cartProduct', (expectedName, expectedPrice) =>{
  cy.get('.item > .product-item-details > .product-item-name > a').invoke('text').then((cartName) => {
    expect(cartName.trim()).to.contain(expectedName)
  })
  cy.get('.cart-price > .price').invoke('text').then((cartPrice) => {
    if(cartPrice.endsWith(',00')){
      cartPrice = cartPrice.slice(0, -3);
    }
    expect(cartPrice.trim()).to.eq(expectedPrice)
  })
})

Cypress.Commands.add('addToCart',() =>{
  cy.get('#swatch_attribute_card').click()
})
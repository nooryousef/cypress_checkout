/// <reference types= "cypress" /> 
describe('template spec', () => {
  it('log in ', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
    cy.get('#loginFrm_loginname').type('nooryousef12')
    cy.get('#loginFrm_password').type('ab1993Cd')
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.get(':nth-child(1) > .active').click()
    cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
    cy.get('#block_frame_bestsellers_1771 > .thumbnails > :nth-child(4) > .thumbnail > .pricetag > .productcart > .fa').click()
    cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click()
  })
})
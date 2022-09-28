describe('Test Login', function() {
  

  xit('should login sucessfully and dislay welcome page', ()=>{
      cy.get('input[type= "password"]').type('dummy')
      cy.get('button').click()
      cy.contains('Welcome')
   })


   

  it('should failure login' , ()=>{
	  cy.visit('/')
      cy.get('input[type= "password"]').type('cool')
      cy.get('button').click()
      cy.contains('Invalid Credentials')
  })


})
describe("Welcome page", () => {
  xit("should display welcome page", () => {  
       cy.visit('/welcome/stein')
       cy.contains( 'Welcome')
  })
})



describe('Test Error', () => {
  beforeEach('', ()=>{
    cy.visit('/klmrl')
   })
  xit('Visits ToDdApp', () => {
      cy.contains("Unknown Path")
  })

})

describe('Login', () => { 
  it('should display login page', () => {   
       cy.visit('/')
       cy.contains( 'User Name')
  })
})

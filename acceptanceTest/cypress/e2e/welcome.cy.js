beforeEach('', () => { 
    cy.visit('/')
      cy.get('input[type= "password"]').type('dummy')
      cy.get('button').click()
      cy.contains('Welcome')

})

xit('should diplay a hello world message on welcome page', ()=>{
     
      cy.get('button').contains('Get Welcome Message').click()
      cy.contains('Hello World')
   })

   xit('should diplay a hello world bean message on welcome page', ()=>{
     
      cy.get('button').contains('Get Welcome Bean Message').click()
      cy.contains('Hello World Bean')
   })

  
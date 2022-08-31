describe('todos API', () => {
  
    
  it('returns Hello World', () => {

  
    cy.request('/hello-world')
    .then((response) => {
           expect(response.body).to.equal('Hello World')
     })
    })

    it('returns Hello World Bean', () => {
    cy.request('/hello-world-bean')
    .then((response) => {
           expect(response.body).to.deep.equal({ message: 'Hello World Bean' })
        })
    })

    it('returns Hello World Bean', () => {
    cy.request('/hello-world/path-variabel/stein')
    .then((response) => {
        expect(response.body).to.deep.equal({message:"Hello World , stein"})
       })
      })

 })
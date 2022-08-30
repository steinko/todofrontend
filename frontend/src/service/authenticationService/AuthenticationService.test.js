import AuthenticationService from './AutenticationService'
it("should exists a AutenticationService",   () => {
	     let aut = AuthenticationService
	     expect(aut).not.toBeNull()
  })

  it("should store username",   () => {
		 let username = 'steinko'
		 let password = 'dummy'
		 AuthenticationService.registerSucessfulLogin(username, password)
	     expect(sessionStorage.getItem('authenticatedUser')).toBe(username)
  })

  it("should be logged in ",   () => { 
		 sessionStorage.setItem('authenticatedUser', 'username')
		  let aut = AuthenticationService
	     expect(aut.isLogin()).toBeTruthy()
  })


  it("should be logged in ",   () => { 
		 sessionStorage.setItem('authenticatedUser', 'username')
		 sessionStorage.removeItem('authenticatedUser')
		  let aut = AuthenticationService
	     expect(aut.isLogin()).toBeFalsy()
  })






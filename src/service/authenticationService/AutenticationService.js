class AutheniationcService {
	
	registerSucessfulLogin(username, password) {

		sessionStorage.setItem('authenticatedUser', username)

	}


	logOut() { 

	   sessionStorage.removeItem('authenticatedUser')

	}

	
	isLogin() { 

		if (sessionStorage.getItem('authenticatedUser')=== null)
		  return false
		else 
		  return true 

	}

	getUserName () { 
		return  sessionStorage.getItem('authenticatedUser')
	}



}

export default new AutheniationcService() 

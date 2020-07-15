
    
export default class { 
	
	constructor (id,username,description,targetDate,done) {  
		this.id = id
		this.username = username
		this.decription = description
		this.targetDate = targetDate
		this.done = done
	}

	getId(){  
		return this.id
	}

	getUserName(){  
		return this.username
	}

	getDecription(){  
		return this.description
	}

	getTargetDate(){  
		return this.targetDate
	}

	getDone(){  
		return this.done
	}


}
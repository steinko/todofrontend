require('jest-fetch-mock').enableMocks()
module.exports = {
    automomock: false,
    reporters: [
        "default",
        [
            "@reportportal/agent-js-jest",
            {
                "token": "ebd7ede9-4418-4f6c-a169-6ac871879d84",                
                "endpoint": "http://35.228.86.9:8080/api/v1",
                "project": "todo",
                "launch": "frontend",
                "description": " unit and interation tests of the freontend of the todo application",
            }
        ]
    ] 
}




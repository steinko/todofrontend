import React from 'react'
import {Component} from 'react'
import TodoApp from './TodoApp'
import log4javascript from 'log4javascript'
 window.myLogger = log4javascript.getLogger();


export default class App extends Component { 
    
   

     compoentDidMount() { 
         
	      var ajaxAppender = new log4javascript.AjaxAppender('/api/logger');
 	      ajaxAppender.setBatchSize(10); // send in batches of 10
 	      ajaxAppender.setSendAllOnUnload(); // send all remaining messages on window.beforeunload()
	      window.myLogger.addAppender(ajaxAppender);

	      //report all user console errors
	      window.onerror = function(message, url, lineNumber) {
		   var errorMsg = "Console error- "+url+" : "+lineNumber + ": "+message
	 	   window.myLogger.error(errorMsg);
	       return true;
         }
       }


    render()  { 
            //Sending error message to server
            window.myLogger.error("test error message");
           //Sending info log to server 
            window.myLogger.info("test info");
            console.info('app')
            return (<TodoApp />)
        }
}

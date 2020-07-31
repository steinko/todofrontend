import React from 'react'
import { defineFeature, loadFeature } from 'jest-cucumber'
import { render, fireEvent } from '@testing-library/react'
import App from '../App'
 
const feature = loadFeature('./src/features/Login.feature')

defineFeature(feature, test => {

   test('Login Sucessfully', ({ given, and, when, then }) => {

	   const { queryByText, queryByLabelText,queryByTestId } = render(<App />);
	
    	given('I am currently logged out', () => {
		  let loginLink = queryByText('Login')
		  expect(loginLink).not.toBeNull()
		  fireEvent.click(loginLink)

    	});


    	and('I enter password dummy', () => {
		   fireEvent.change( queryByLabelText('Password:'), { target: { value: 'dummy' } })
    	});

    	when('I activate Login', () => {
          fireEvent.click(queryByTestId('Login'))
    	});

    	then('I am loggedin', () => {
			  expect(queryByText('Welcome!')).not.toBeNull()

    	});
    });


    test('Login failure', ({ given, and, when, then }) => {
    	given('I am currently logged out', () => {

    	});

    	and('I enter user name stein', () => {

    	});

    	and('I enter password dummy', () => {

    	});

    	when('I activate Login', () => {

    	});

    	then(/^a message (.*)$/, (arg0) => {

    	});
    });

});
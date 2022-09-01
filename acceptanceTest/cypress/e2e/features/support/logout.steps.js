import React from 'react'
import { Given,When ,Then } from 'cucumber';
import { render, fireEvent } from '@testing-library/react'
import App from '../../App'
 
    	Given('I am currently logged in', () => {
          const { queryByText, queryByLabelText} = render(<App />);
		  fireEvent.click(queryByText('Login'))
          fireEvent.change( queryByLabelText('Password:'), { target: { value: 'dummy' } })
          expect(queryByText('Logout')).not.toBeNull()
    	});

    	When('I activate Logout', () => {
			 const { queryByText} = render(<App />);
			fireEvent.click(queryByText('Logout'))

    	});

    	Then('I am loggedout', () => {
			     const { queryByText} = render(<App />);
                expect(queryByText('Login')).not.toBeNull()
    	});

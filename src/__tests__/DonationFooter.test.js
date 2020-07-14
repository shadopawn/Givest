import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import DonateFooter from '../components/DonateFooter';

afterEach(cleanup)

test('Calls function on button click', () =>{
    const mockFunction = jest.fn()
	const { getByText } = render(<DonateFooter showDonationModal={mockFunction}/>);
	const donateButton = getByText(/donate/i);
	const leftClick = { button: 1 }
	fireEvent.click(donateButton, leftClick)
	expect(mockFunction).toHaveBeenCalledTimes(1);
});
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)

describe('Renders app components', () => {

	test('Renders app title', () => {
		const { getByText} = render(<App />);
		const title = getByText(/givest/i);
		expect(title).toBeInTheDocument();
	});

	test('Renders leaderboard', () => {
		const { getByTestId} = render(<App />);
		const leaderboard = getByTestId("leaderboard");
		expect(leaderboard).toBeInTheDocument();
	});

	test('Renders donate button', () =>{
		const { getByText } = render(<App />);
		const donateButton = getByText(/donate/i);
		expect(donateButton).toBeInTheDocument();
	});
});
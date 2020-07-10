import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup)

describe('renders app components', () => {

	test('renders app title', () => {
		const { getByText} = render(<App />);
		const title = getByText(/givest/i);
		expect(title).toBeInTheDocument();
	});

	test('renders leaderboard', () => {
		const { getByTestId} = render(<App />);
		const leaderboard = getByTestId("leaderboard");
		expect(leaderboard).toBeInTheDocument();
	});

	test('renders donate button', () =>{
		const { getByText } = render(<App />);
		const donateButton = getByText(/donate/i);
		expect(donateButton).toBeInTheDocument();
	});

});

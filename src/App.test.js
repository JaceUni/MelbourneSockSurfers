import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/header/header';        // An item to test
import Navbar from './components/navigation/navbar';    // An item to test
import Weather from './components/weather/weather';     // An item to test

// Test 1
describe('Header', () => {
  test('Header is rendered', () => {
    render(<Header />);
    const linkElement = screen.getByText(/Home of Melbourne's\s*Best Sliders/i);


    // explicit assertion
    expect(linkElement).toBeInTheDocument();
  });
});

// Test 2
describe('Navigation', () => {
  test('renders navigation items', () => {
    const { getByText } = render(<Navbar />);

    // Verify that all navigation items are rendered
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Results')).toBeInTheDocument();
    expect(getByText('Events')).toBeInTheDocument();
    expect(getByText('Gallery')).toBeInTheDocument();
    expect(getByText('Video')).toBeInTheDocument();
    expect(getByText('Newsletter')).toBeInTheDocument();
  });
});

// Test 3
describe('Weather', () => {
  test('Weather section present', () => {
    const { getByText } = render(<Weather />);

    // Verify all are rendered
    expect(getByText('Loading weather data...')).toBeInTheDocument();
  });
});

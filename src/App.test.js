// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PixelLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PixelLink/i);
    expect(titleElement).toBeInTheDocument();
});

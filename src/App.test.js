import { render, screen } from '@testing-library/react';
import App from './App';

test('renders digital growth portfolio headline', () => {
  render(<App />);
  expect(screen.getAllByText(/digital growth portfolio/i).length).toBeGreaterThan(0);
});

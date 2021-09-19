import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test link', () => {
  render(<div>learn react</div>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Notes App/i);
  expect(linkElement).toBeInTheDocument();
});
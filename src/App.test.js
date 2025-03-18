import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router";
import App from './App';

test('renders learn react link', () => {
  render( <BrowserRouter>
    <App />
  </BrowserRouter>);
  const linkElement = screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i);
  expect(linkElement).toBeInTheDocument();
});

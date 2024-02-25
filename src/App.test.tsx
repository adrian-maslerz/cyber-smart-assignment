import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./routes/RouterRoutes', () => {
  return {
    RouterRoutes: () => '<routes />'
  }
})
describe('App component', () => {
  it('Should render routes', () => {
    render(<App />);
    expect(screen.getByText(/routes/i)).toBeInTheDocument()
  })
});

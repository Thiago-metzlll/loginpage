import { BrowserRouter } from 'react-router-dom'; // Use BrowserRouter ou MemoryRouter
import React from 'react';
import { render, screen } from '@testing-library/react';

test('renders a simple div', () => {
  render(
    <BrowserRouter>
      <div>Teste</div>
    </BrowserRouter>
  );
  expect(screen.getByText('Teste')).toBeInTheDocument();
});
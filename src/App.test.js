import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renderiza o Header e a rota inicial / (GeoquizPage)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Verifica se o Header está na tela
    expect(screen.getByText(/header/i)).toBeInTheDocument(); // Ajuste esse texto para algo que o Header renderize

    // Verifica se algo da GeoquizPage aparece (ajuste para um texto ou elemento presente)
    expect(screen.getByText(/geoquiz/i)).toBeInTheDocument(); // ajuste conforme seu componente

  });

  test('renderiza página de login na rota /login', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    // Verifique algo do LoginPage renderizado, como texto ou botão
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument(); // ajuste conforme seu LoginPage
  });

  test('renderiza formulário de cadastro na rota /cadastro', () => {
    render(
      <MemoryRouter initialEntries={['/cadastro']}>
        <App />
      </MemoryRouter>
    );

    // Verifica se o formulário de cadastro está na tela
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import '@testing-library/jest-dom';

describe('Theme toggle', () => {
  it('toggles theme from dark to light and back', () => {
    localStorage.setItem('theme', 'dark');

    render(
      <MemoryRouter>
        <Layout>
          <div>Test content</div>
        </Layout>
      </MemoryRouter>
    );

    const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});

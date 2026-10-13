import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { services } from '@/data/content';

describe('App', () => {
  it('renders every section with its heading', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/sheet metal/i);
    for (const title of [
      /built on the shop floor/i,
      /every process your drawing needs/i,
      /machine capability/i,
      /ambernath midc/i,
      /send us your drawing/i,
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
    }
  });

  it('lists all services', () => {
    render(<App />);
    const servicesSection = document.getElementById('services')!;
    for (const service of services) {
      expect(
        within(servicesSection).getByRole('heading', { name: service.title }),
      ).toBeInTheDocument();
    }
  });

  it('links WhatsApp buttons safely to the primary number', () => {
    render(<App />);
    const links = screen.getAllByRole('link', { name: /^whatsapp$/i });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute('href', 'https://wa.me/918591240616');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    }
  });
});

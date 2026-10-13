import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { QuoteForm } from './QuoteForm';

describe('QuoteForm', () => {
  it('shows validation errors and does not open mail on invalid input', async () => {
    const onOpenMailto = vi.fn();
    render(<QuoteForm email="quotes@example.com" onOpenMailto={onOpenMailto} />);

    await userEvent.click(screen.getByRole('button', { name: /send quote request/i }));

    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/valid 10-digit mobile/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true');
    expect(onOpenMailto).not.toHaveBeenCalled();
  });

  it('opens a pre-filled mailto link on valid submit', async () => {
    const user = userEvent.setup();
    const onOpenMailto = vi.fn();
    render(<QuoteForm email="quotes@example.com" onOpenMailto={onOpenMailto} />);

    await user.type(screen.getByLabelText('Name'), 'Asha Patil');
    await user.type(screen.getByLabelText('Phone'), '+91 98765 43210');
    await user.type(screen.getByLabelText(/company/i), 'Acme Engg');
    await user.selectOptions(
      screen.getByLabelText(/service required/i),
      'Cable Tray Manufacturing',
    );
    await user.type(screen.getByLabelText(/job details/i), 'SS304, 2mm, 50 pcs');
    await user.click(screen.getByRole('button', { name: /send quote request/i }));

    expect(onOpenMailto).toHaveBeenCalledOnce();
    const url = onOpenMailto.mock.calls[0]![0] as string;
    const body = new URLSearchParams(url.split('?')[1]).get('body');
    expect(url.startsWith('mailto:quotes@example.com?')).toBe(true);
    expect(body).toContain('Company: Acme Engg');
    expect(body).toContain('Phone: 9876543210');
    expect(body).toContain('SS304, 2mm, 50 pcs');
    expect(await screen.findByText(/opening your email app/i)).toBeInTheDocument();
  });
});

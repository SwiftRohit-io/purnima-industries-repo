import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { workGallery } from '@/data/work';
import { Work } from './Work';

describe('Work gallery', () => {
  it('resolves an image file for every gallery entry', () => {
    for (const item of workGallery) {
      expect(item.thumb).toMatch(/\.webp/);
      expect(item.full).toMatch(/\.webp/);
    }
  });

  it('opens the lightbox and cycles through images', async () => {
    const user = userEvent.setup();
    render(<Work />);

    const [first, second] = workGallery;
    await user.click(
      screen.getByRole('button', { name: new RegExp(`view larger: ${first!.title}`, 'i') }),
    );

    const dialog = screen.getByRole('dialog', { name: first!.title });
    expect(within(dialog).getByAltText(first!.alt)).toHaveAttribute('src', first!.full);

    await user.click(within(dialog).getByRole('button', { name: /next image/i }));
    expect(within(dialog).getByAltText(second!.alt)).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: /previous image/i }));
    await user.click(within(dialog).getByRole('button', { name: /previous image/i }));
    expect(within(dialog).getByAltText(workGallery.at(-1)!.alt)).toBeInTheDocument();

    await user.click(within(dialog).getByRole('button', { name: /close/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

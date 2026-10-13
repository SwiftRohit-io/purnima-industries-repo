import { useEffect, useRef } from 'react';
import type { WorkImage } from '@/types/content';

interface LightboxProps {
  images: WorkImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onChange: (index: number | null) => void;
}

const navButton =
  'absolute top-1/2 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-line-strong bg-surface text-xl text-ink hover:border-accent hover:text-accent focus-visible:outline-3 focus-visible:outline-accent';

/** Full-size image viewer built on the native <dialog> (focus trap, Esc to close, top layer). */
export function Lightbox({ images, index, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const image = index === null ? undefined : images[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (image && !dialog.open) dialog.showModal();
    if (!image && dialog.open) dialog.close();
  }, [image]);

  const step = (delta: number) => {
    if (index === null) return;
    onChange((index + delta + images.length) % images.length);
  };

  return (
    // Backdrop click and arrow keys are conveniences; the buttons inside provide the same actions.
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      aria-label={image ? image.title : 'Image viewer'}
      onClose={() => onChange(null)}
      onClick={(e) => {
        // Clicks on the backdrop land on the <dialog> element itself.
        if (e.target === e.currentTarget) dialogRef.current?.close();
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') step(1);
        if (e.key === 'ArrowLeft') step(-1);
      }}
      className="m-auto max-h-[calc(100dvh-32px)] w-[min(92vw,820px)] overflow-visible border-0 bg-transparent p-0 backdrop:bg-black/80"
    >
      {image && (
        <figure className="relative m-0 border border-line bg-surface p-2.5">
          <img
            src={image.full}
            alt={image.alt}
            width={1200}
            height={1200}
            className="block aspect-square max-h-[calc(100dvh-120px)] w-full object-contain"
          />
          <figcaption className="flex flex-wrap items-baseline justify-between gap-2 px-1 pt-2.5 pb-0.5 font-mono text-[0.75rem] tracking-[0.05em] text-muted uppercase">
            <span className="text-ink">{image.title}</span>
            <span>
              {index! + 1} / {images.length}
            </span>
          </figcaption>

          <button
            type="button"
            aria-label="Close"
            onClick={() => dialogRef.current?.close()}
            className="absolute -top-3 -right-3 flex size-10 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-surface text-lg text-ink hover:border-accent hover:text-accent"
          >
            ✕
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={() => step(-1)}
                className={`${navButton} left-2 sm:-left-5`}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={() => step(1)}
                className={`${navButton} right-2 sm:-right-5`}
              >
                ›
              </button>
            </>
          )}
        </figure>
      )}
    </dialog>
  );
}

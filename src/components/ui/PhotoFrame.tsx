import { cn } from '@/lib/cn';

interface PhotoFrameProps {
  src: string;
  /** Optional responsive sources, e.g. `a-640.webp 640w, a-1100.webp 1100w`. */
  srcSet?: string;
  sizes?: string;
  /** Intrinsic size of `src`, so the browser reserves space before the image loads. */
  width: number;
  height: number;
  alt: string;
  caption: [string, string];
  className?: string;
  imgClassName?: string;
}

export function PhotoFrame({
  src,
  srcSet,
  sizes,
  width,
  height,
  alt,
  caption,
  className,
  imgClassName,
}: PhotoFrameProps) {
  return (
    <figure className={cn('m-0 border border-line bg-surface px-2.5 pt-2.5', className)}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={cn('block h-[300px] w-full object-cover', imgClassName)}
      />
      <figcaption className="flex justify-between gap-2.5 px-1 py-2.5 font-mono text-[0.72rem] tracking-[0.05em] text-muted uppercase">
        <span>{caption[0]}</span>
        <span>{caption[1]}</span>
      </figcaption>
    </figure>
  );
}

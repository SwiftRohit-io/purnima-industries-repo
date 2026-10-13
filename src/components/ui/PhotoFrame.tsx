import { cn } from '@/lib/cn';

interface PhotoFrameProps {
  src: string;
  alt: string;
  caption: [string, string];
  className?: string;
  imgClassName?: string;
}

export function PhotoFrame({ src, alt, caption, className, imgClassName }: PhotoFrameProps) {
  return (
    <figure className={cn('m-0 border border-line bg-surface px-2.5 pt-2.5', className)}>
      <img
        src={src}
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

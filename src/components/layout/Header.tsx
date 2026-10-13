import logo from '@/assets/logo.png';
import { navLinks } from '@/data/content';
import { site, whatsappUrl } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/88 backdrop-blur-[10px]">
      <Container className="flex items-center justify-between gap-5 py-3.5">
        <a href="#top" className="flex min-w-0 items-center gap-3 text-ink no-underline">
          <img
            src={logo}
            alt={`${site.name} logo`}
            width={46}
            height={46}
            className="size-[46px] shrink-0 border-[1.5px] border-line-strong bg-white object-contain p-1"
          />
          <span className="flex min-w-0 flex-col leading-[1.15]">
            <b className="font-display text-[1.05rem] tracking-[0.02em] uppercase">{site.name}</b>
            <span className="font-mono text-[0.68rem] tracking-[0.08em] text-muted uppercase">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="flex gap-7 text-[0.92rem] font-medium max-[860px]:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted no-underline transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 gap-2.5 max-[420px]:gap-1.5">
          <ButtonLink variant="whatsapp" href={whatsappUrl()} external className="max-[420px]:px-3">
            WhatsApp
          </ButtonLink>
          <ButtonLink href="#contact" className="max-[420px]:px-3">
            <span className="max-[560px]:hidden">Get a</span> Quote
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

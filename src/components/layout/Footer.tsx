import { navLinks } from '@/data/content';
import { site, whatsappUrl } from '@/config/site';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink pt-10 pb-7 text-bg">
      <Container>
        <div className="flex flex-wrap justify-between gap-[30px]">
          <div>
            <b className="font-display text-[1.05rem] uppercase">{site.name}</b>
            <p className="mt-2 mb-0 max-w-[38ch] text-[0.85rem] text-bg/70">
              {site.address.oneLine}
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-[22px] text-[0.88rem]">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="no-underline hover:text-accent">
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:text-accent"
            >
              WhatsApp
            </a>
          </nav>
        </div>
        <div className="mt-[30px] flex flex-wrap justify-between gap-2.5 border-t border-bg/20 pt-5 font-mono text-[0.78rem] text-bg/65">
          <span>
            &copy; {year} {site.name}. All rights reserved.
          </span>
          <span>Director: {site.director}</span>
        </div>
      </Container>
    </footer>
  );
}

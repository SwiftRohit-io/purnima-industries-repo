import { telUrl, whatsappUrl } from '@/config/site';
import { cn } from '@/lib/cn';

const item =
  'border-r border-line px-1.5 py-[13px] text-center text-[0.78rem] font-semibold text-ink no-underline last:border-r-0';

/** Fixed call / WhatsApp / quote bar shown on small screens only. */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-60 hidden border-t border-line bg-surface shadow-[0_-6px_20px_var(--shadow)] max-[700px]:block"
    >
      <div className="grid grid-cols-3">
        <a className={item} href={telUrl()}>
          Call
        </a>
        <a className={item} href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a className={cn(item, 'bg-accent text-accent-ink')} href="#contact">
          Get Quote
        </a>
      </div>
    </nav>
  );
}

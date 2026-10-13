import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteServiceOptions } from '@/data/content';
import { site } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { buildQuoteMailto, quoteSchema, type QuoteFormInput, type QuoteRequest } from '@/lib/quote';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/Button';

const labelClass = 'font-mono text-[0.72rem] tracking-[0.08em] text-muted uppercase';
const inputClass =
  'rounded-[2px] border border-line bg-bg px-[13px] py-[11px] font-sans text-[0.96rem] text-ink outline-none focus:border-accent aria-invalid:border-danger';

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="m-0 text-[0.8rem] text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

interface QuoteFormProps {
  email?: string;
  /** Injected for tests; defaults to navigating the browser to the mailto: URL. */
  onOpenMailto?: (url: string) => void;
}

export function QuoteForm({
  email = site.email,
  onOpenMailto = (url) => window.location.assign(url),
}: QuoteFormProps) {
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    phone: `${uid}-phone`,
    company: `${uid}-company`,
    service: `${uid}-service`,
    details: `${uid}-details`,
  };
  const [status, setStatus] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormInput, unknown, QuoteRequest>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      phone: '',
      company: '',
      service: quoteServiceOptions[0],
      details: '',
    },
  });

  const onSubmit = (quote: QuoteRequest) => {
    if (!email) {
      setStatus('Quote inbox not set up yet — please use WhatsApp above for now.');
      return;
    }
    trackEvent('generate_lead', { method: 'quote_form', service: quote.service });
    onOpenMailto(buildQuoteMailto(email, quote));
    setStatus('Opening your email app...');
  };

  const a11y = (key: keyof typeof ids, hasError: boolean) => ({
    id: ids[key],
    'aria-invalid': hasError || undefined,
    'aria-describedby': hasError ? `${ids[key]}-error` : undefined,
  });

  return (
    <form
      noValidate
      aria-label="Quote request"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 border border-line bg-surface p-7"
    >
      <div className="grid grid-cols-2 gap-3.5 max-[480px]:grid-cols-1">
        <Field id={ids.name} label="Name" error={errors.name?.message}>
          <input
            {...register('name')}
            {...a11y('name', !!errors.name)}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </Field>
        <Field id={ids.phone} label="Phone" error={errors.phone?.message}>
          <input
            {...register('phone')}
            {...a11y('phone', !!errors.phone)}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile"
            className={inputClass}
          />
        </Field>
      </div>

      <Field id={ids.company} label="Company (optional)" error={errors.company?.message}>
        <input
          {...register('company')}
          {...a11y('company', !!errors.company)}
          type="text"
          autoComplete="organization"
          placeholder="Company name"
          className={inputClass}
        />
      </Field>

      <Field id={ids.service} label="Service Required" error={errors.service?.message}>
        <select
          {...register('service')}
          {...a11y('service', !!errors.service)}
          className={inputClass}
        >
          {quoteServiceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <Field id={ids.details} label="Job Details" error={errors.details?.message}>
        <textarea
          {...register('details')}
          {...a11y('details', !!errors.details)}
          rows={4}
          placeholder="Material, thickness, quantity, drawing reference..."
          className={cn(inputClass, 'resize-y')}
        />
      </Field>

      <p className="-mt-1 mb-0 text-[0.8rem] text-muted">
        Opens your email app with these details pre-filled, addressed straight to us.
      </p>
      <Button type="submit" disabled={isSubmitting} className="justify-center">
        Send Quote Request
      </Button>
      <output
        aria-live="polite"
        className={cn('min-h-[1.2em] font-mono text-[0.85rem]', email && 'text-success')}
      >
        {status}
      </output>
    </form>
  );
}

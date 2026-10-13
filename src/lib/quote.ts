import { z } from 'zod';
import { quoteServiceOptions } from '@/data/content';

/** Strips spaces, dashes and an optional +91 / 0 prefix, leaving the 10-digit mobile number. */
const normalisePhone = (value: string) =>
  value.replace(/[\s()-]/g, '').replace(/^(\+?91|0)(?=\d{10}$)/, '');

export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  phone: z
    .string()
    .trim()
    .transform(normalisePhone)
    .pipe(z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number')),
  company: z.string().trim().max(120).optional().default(''),
  service: z.enum(quoteServiceOptions),
  details: z.string().trim().max(2000, 'Please keep details under 2000 characters').default(''),
});

export type QuoteFormInput = z.input<typeof quoteSchema>;
export type QuoteRequest = z.output<typeof quoteSchema>;

export function buildQuoteMailto(email: string, quote: QuoteRequest): string {
  const subject = `Quote Request: ${quote.service} - ${quote.name}`;
  const body = [
    `Name: ${quote.name}`,
    `Phone: ${quote.phone}`,
    ...(quote.company ? [`Company: ${quote.company}`] : []),
    `Service Required: ${quote.service}`,
    '',
    'Job Details:',
    quote.details || '(not provided)',
  ].join('\n');

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

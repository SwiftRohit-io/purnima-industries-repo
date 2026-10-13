import { describe, expect, it } from 'vitest';
import { buildQuoteMailto, quoteSchema } from './quote';

describe('quoteSchema', () => {
  it('normalises Indian mobile numbers', () => {
    for (const phone of ['98765 43210', '+91 98765-43210', '09876543210', '919876543210']) {
      const parsed = quoteSchema.parse({ name: 'Asha', phone, service: 'Laser Cutting' });
      expect(parsed.phone).toBe('9876543210');
    }
  });

  it('rejects invalid input', () => {
    const result = quoteSchema.safeParse({ name: 'A', phone: '12345', service: 'Laser Cutting' });
    expect(result.success).toBe(false);
    const fields = result.error?.issues.map((i) => i.path[0]);
    expect(fields).toEqual(expect.arrayContaining(['name', 'phone']));
  });
});

describe('buildQuoteMailto', () => {
  it('builds a pre-filled mailto link', () => {
    const url = buildQuoteMailto('quotes@example.com', {
      name: 'Asha',
      phone: '9876543210',
      company: '',
      service: 'CNC Bending',
      details: '',
    });
    const [address, query] = url.split('?');
    const params = new URLSearchParams(query);

    expect(address).toBe('mailto:quotes@example.com');
    expect(params.get('subject')).toBe('Quote Request: CNC Bending - Asha');
    expect(params.get('body')).toContain('Phone: 9876543210');
    expect(params.get('body')).not.toContain('Company:');
    expect(params.get('body')).toContain('(not provided)');
  });
});

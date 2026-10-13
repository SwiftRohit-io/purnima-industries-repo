import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export interface SpecColumn<T> {
  header: string;
  render: (row: T) => ReactNode;
  /** Monospace accent styling for numeric / model values. */
  mono?: boolean;
}

interface SpecTableProps<T> {
  caption: string;
  columns: SpecColumn<T>[];
  rows: T[];
  getRowKey: (row: T) => string;
  className?: string;
}

/**
 * Spec-sheet style table. A real <table> for accessibility; on narrow screens each row
 * stacks into a card with the column header shown as a label above each value.
 */
export function SpecTable<T>({ caption, columns, rows, getRowKey, className }: SpecTableProps<T>) {
  return (
    <table
      className={cn(
        'w-full border-collapse border border-line bg-bg text-left text-[0.92rem]',
        'max-[700px]:block',
        className,
      )}
    >
      <caption className="sr-only">{caption}</caption>
      <thead className="max-[700px]:hidden">
        <tr className="bg-ink font-mono text-[0.76rem] tracking-[0.08em] text-bg uppercase">
          {columns.map((col) => (
            <th
              key={col.header}
              scope="col"
              className="border-r border-bg/25 px-[18px] py-4 font-normal last:border-r-0"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="max-[700px]:block">
        {rows.map((row) => (
          <tr
            key={getRowKey(row)}
            className="border-b border-line last:border-b-0 max-[700px]:block"
          >
            {columns.map((col) => (
              <td
                key={col.header}
                data-label={col.header}
                className={cn(
                  'border-r border-line px-[18px] py-4 align-top last:border-r-0',
                  'max-[700px]:block max-[700px]:border-r-0 max-[700px]:border-b max-[700px]:border-dotted max-[700px]:last:border-b-0',
                  'max-[700px]:before:mb-1 max-[700px]:before:block max-[700px]:before:font-mono max-[700px]:before:text-[0.68rem] max-[700px]:before:tracking-[0.06em] max-[700px]:before:text-muted max-[700px]:before:uppercase max-[700px]:before:content-[attr(data-label)]',
                  col.mono && 'font-mono font-semibold text-accent',
                )}
              >
                {col.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { createElement } from 'react';

const levelStyles = {
  h1: 'font-poppins font-black text-4xl sm:text-5xl md:text-6xl leading-tight text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]',
  h2: 'font-poppins font-black text-4xl md:text-5xl lg:text-6xl drop-shadow-[4px_4px_0_rgba(0,0,0,1)]',
  h3: 'font-poppins font-bold text-2xl leading-tight',
  h4: 'font-poppins font-bold text-xl drop-shadow-[1px_1px_0_rgba(0,0,0,1)]',
} as const;

const accentColors = {
  white: 'text-white',
  yellow: 'text-[#FFD93D]',
  pink: 'text-[#FF6B9D]',
  orange: 'text-[#EA580C]',
} as const;

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

export type HeadingProps = {
  as?: HeadingLevel;
  accent?: keyof typeof accentColors;
  className?: string;
  children: React.ReactNode;
};

export function Heading({
  as = 'h2',
  accent,
  className = '',
  children,
}: HeadingProps) {
  const colorClass = accent ? accentColors[accent] : '';
  const classes = `${levelStyles[as]} ${colorClass} ${className}`.trim();
  return createElement(as, { className: classes }, children);
}

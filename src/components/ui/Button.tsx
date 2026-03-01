import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const sizeStyles = {
  sm: 'px-4 py-2 text-base rounded-lg',
  md: 'px-6 py-3 text-lg rounded-xl',
  lg: 'px-8 py-4 text-xl rounded-2xl',
} as const;

const colorStyles = {
  yellow:
    'bg-[#FFD93D] text-black border-black font-black sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:sticker-shadow-none',
  white:
    'bg-white text-black border-black font-bold sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:sticker-shadow-none',
  pink: 'bg-[#FF6B9D] text-white border-black font-bold sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:sticker-shadow-none',
  orange: 'bg-[#EA580C] text-white border-black font-bold hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none',
  'orange-inverse': 'bg-white text-black border-black font-bold hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-0 active:shadow-none',
  pill: 'bg-[#FF6B9D] text-white border-black px-6 py-2 rounded-full font-bold text-lg sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:sticker-shadow-none',
  icon: 'bg-white text-black p-3 rounded-xl border-black sticker-shadow',
} as const;

export type ButtonSize = keyof typeof sizeStyles;
export type ButtonColor = keyof typeof colorStyles;

type BaseProps = {
  size?: ButtonSize;
  color?: ButtonColor;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps & {
  as?: 'button';
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type ButtonAsAnchor = BaseProps & {
  as: 'a';
  href: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button({ size = 'md', color = 'yellow', as = 'button', className = '', children, ...props }, ref) {
    const base = 'border-4 font-poppins transition-all inline-flex items-center justify-center gap-2';
    const sizeClass = color === 'icon' ? 'p-3 rounded-xl' : sizeStyles[size];
    const colorClass = colorStyles[color];
    const classes = `${base} ${sizeClass} ${colorClass} ${className}`.trim();

    const motionProps = {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    };

    if (as === 'a') {
      const { href, target, rel, onClick } = props as ButtonAsAnchor;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          {...motionProps}
          className={classes}
        >
          {children}
        </motion.a>
      );
    }

    const { onClick } = props as ButtonAsButton;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        onClick={onClick}
        {...motionProps}
        className={classes}
      >
        {children}
      </motion.button>
    );
  }
);

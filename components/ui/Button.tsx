import React from 'react';
import { theme } from '@/lib/theme';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borderRadius.lg,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      transition: theme.animations.transition.normal,
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      textDecoration: 'none',
    };

    const sizeStyles = {
      sm: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.xs,
      },
      md: {
        padding: `${theme.spacing.md} ${theme.spacing.lg}`,
        fontSize: theme.typography.fontSize.sm,
      },
      lg: {
        padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
        fontSize: theme.typography.fontSize.base,
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: theme.colors.primary.brand,
        color: theme.colors.background.light,
      },
      secondary: {
        backgroundColor: 'transparent',
        color: theme.colors.text.secondary,
        border: `1px solid ${theme.colors.border.light}`,
      },
    };

    const hoverStyles = {
      primary: {
        backgroundColor: theme.colors.primary.brandHover,
        transform: 'translateY(-1px)',
      },
      secondary: {
        borderColor: theme.colors.border.medium,
        color: theme.colors.text.primary,
      },
    };

    const combinedStyles = {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };

    return (
      <button
        ref={ref}
        className={`linear-button linear-button--${variant} linear-button--${size} ${className}`}
        style={combinedStyles}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles[variant]);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, combinedStyles);
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
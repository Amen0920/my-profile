import React from 'react';
import { theme } from '@/lib/theme';

export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, helperText, size = 'md', className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const baseStyles = {
      backgroundColor: theme.colors.background.tertiary,
      border: `1px solid ${error ? theme.colors.status.error : theme.colors.border.light}`,
      borderRadius: theme.borderRadius.lg,
      fontSize: theme.typography.fontSize.sm,
      color: theme.colors.text.primary,
      outline: 'none',
      transition: theme.animations.transition.normal,
      width: '100%',
    };

    const sizeStyles = {
      sm: {
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.xs,
      },
      md: {
        padding: `${theme.spacing.md} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.sm,
      },
      lg: {
        padding: `${theme.spacing.lg} ${theme.spacing.md}`,
        fontSize: theme.typography.fontSize.base,
      },
    };

    const focusStyles = isFocused
      ? {
          borderColor: error ? theme.colors.status.error : theme.colors.primary.brand,
          boxShadow: error
            ? `0 0 0 3px rgba(239, 68, 68, 0.1)`
            : `0 0 0 3px rgba(94, 106, 210, 0.1)`,
        }
      : {};

    const combinedStyles = {
      ...baseStyles,
      ...sizeStyles[size],
      ...focusStyles,
    };

    const labelStyles = {
      display: 'block',
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      color: theme.colors.text.primary,
      marginBottom: theme.spacing.sm,
    };

    const helperTextStyles = {
      fontSize: theme.typography.fontSize.xs,
      color: error ? theme.colors.status.error : theme.colors.text.secondary,
      marginTop: theme.spacing.xs,
    };

    return (
      <div className={`linear-input-wrapper ${className}`}>
        {label && (
          <label style={labelStyles} className="linear-input-label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`linear-input linear-input--${size}`}
          style={combinedStyles}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {(error || helperText) && (
          <div style={helperTextStyles} className="linear-input-helper">
            {error || helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
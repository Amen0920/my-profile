import React from 'react';
import { theme } from '@/lib/theme';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  image?: string;
  imageAlt?: string;
  imageHeight?: string;
}

const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ children, hover = true, padding = 'md', image, imageAlt = '', imageHeight = '200px', className = '', ...props }, ref) => {
    const baseStyles = {
      backgroundColor: theme.colors.background.secondary,
      border: `1px solid ${theme.colors.border.light}`,
      borderRadius: theme.borderRadius.xl,
      boxShadow: theme.shadows.sm,
      transition: theme.animations.transition.normal,
    };

    const paddingStyles = {
      sm: { padding: theme.spacing.md },
      md: { padding: theme.spacing.lg },
      lg: { padding: theme.spacing.xl },
    };

    const hoverStyles = hover
      ? {
          boxShadow: theme.shadows.md,
          transform: 'translateY(-2px)',
        }
      : {};

    const combinedStyles = {
      ...baseStyles,
      ...(image ? {} : paddingStyles[padding]),
    };

    const contentStyles = image ? paddingStyles[padding] : {};

    return (
      <div
        ref={ref}
        className={`linear-card linear-card--${padding} ${className}`}
        style={combinedStyles}
        onMouseEnter={(e) => {
          if (hover) {
            Object.assign(e.currentTarget.style, {
              ...combinedStyles,
              ...hoverStyles,
            });
          }
        }}
        onMouseLeave={(e) => {
          if (hover) {
            Object.assign(e.currentTarget.style, combinedStyles);
          }
        }}
        {...props}
      >
        {image && (
          <div className="card-image" style={{ overflow: 'hidden', borderRadius: `${theme.borderRadius.xl} ${theme.borderRadius.xl} 0 0` }}>
            <img
              src={image}
              alt={imageAlt}
              style={{
                width: '100%',
                height: imageHeight,
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        )}
        <div className="card-content" style={contentStyles}>
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
import React from 'react';
import { theme } from '@/lib/theme';

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Props {
  items: NavigationItem[];
  logo?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const Navigation: React.FC<Props> = ({
  items,
  logo,
  actions,
  className = '',
}) => {
  const navStyles = {
    backgroundColor: 'rgba(13, 14, 16, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${theme.colors.border.light}`,
    padding: `${theme.spacing.md} 0`,
    position: 'sticky' as const,
    top: '0',
    zIndex: 50,
    width: '100%',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `0 ${theme.spacing.lg}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const navListStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing.lg,
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const navItemStyles = {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.secondary,
    textDecoration: 'none',
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.borderRadius.md,
    transition: theme.animations.transition.normal,
  };

  const activeNavItemStyles = {
    ...navItemStyles,
    color: theme.colors.text.primary,
    backgroundColor: theme.colors.background.tertiary,
  };

  const logoStyles = {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text.primary,
  };

  return (
    <nav className={`linear-navigation ${className}`} style={navStyles}>
      <div className="linear-navigation-container" style={containerStyles}>
        {logo && (
          <div className="linear-navigation-logo" style={logoStyles}>
            {logo}
          </div>
        )}
        
        <ul className="linear-navigation-list" style={navListStyles}>
          {items.map((item, index) => (
            <li key={index} className="linear-navigation-item">
              <a
                href={item.href}
                className={`linear-navigation-link ${
                  item.active ? 'linear-navigation-link--active' : ''
                }`}
                style={item.active ? activeNavItemStyles : navItemStyles}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    Object.assign(e.currentTarget.style, {
                      ...navItemStyles,
                      color: theme.colors.text.primary,
                    });
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    Object.assign(e.currentTarget.style, navItemStyles);
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {actions && (
          <div className="linear-navigation-actions">
            {actions}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
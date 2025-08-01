"use client";

import React from "react";
import { Menu, X, Home, User, Mail, Settings } from "lucide-react";
import { theme } from '@/lib/theme';

interface Props {
  className?: string;
}

const Nav: React.FC<Props> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: Home, label: "ホーム", href: "/" },
    { icon: User, label: "プロフィール", href: "/profile" },
    { icon: Settings, label: "サービス", href: "/services" },
    { icon: Mail, label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <nav
      className={`w-full ${className}`}
      style={{
        backgroundColor: theme.colors.background.primary,
        borderBottom: `1px solid ${theme.colors.border.light}`,
        backdropFilter: "blur(12px)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="w-full px-4 sm:px-6 lg:px-8"
        style={{
          width: "100%",
          padding: `0 ${theme.spacing.md}`,
        }}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className="text-xl font-bold"
              style={{
                color: theme.colors.text.primary,
                fontSize: theme.typography.fontSize.xl,
                fontWeight: theme.typography.fontWeight.bold,
              }}
            >
              Linear Design
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    style={{
                      color: theme.colors.text.secondary,
                      fontSize: theme.typography.fontSize.sm,
                      fontWeight: theme.typography.fontWeight.medium,
                      borderRadius: theme.borderRadius.md,
                      transition: theme.animations.transition.normal,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.text.primary;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.background.secondary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.text.secondary;
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <IconComponent size={16} className="mr-2" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
              style={{
                color: theme.colors.text.secondary,
                borderRadius: theme.borderRadius.md,
                transition: theme.animations.transition.normal,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  theme.colors.background.secondary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              style={{
                borderTop: `1px solid ${theme.colors.border.light}`,
                marginTop: theme.spacing.sm,
                paddingTop: theme.spacing.sm,
              }}
            >
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    style={{
                      color: theme.colors.text.secondary,
                      fontSize: theme.typography.fontSize.base,
                      fontWeight: theme.typography.fontWeight.medium,
                      borderRadius: theme.borderRadius.md,
                      transition: theme.animations.transition.normal,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.text.primary;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.background.secondary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.text.secondary;
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <IconComponent size={20} className="mr-3" />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
export type { Props };

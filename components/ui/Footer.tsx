"use client";

import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { theme } from '@/lib/theme';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className = "" }) => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Mail, label: "メール", href: "mailto:contact@example.com" },
  ];

  const footerLinks = [
    {
      title: "プロダクト",
      links: [
        { label: "機能", href: "/features" },
        { label: "価格", href: "/pricing" },
        { label: "ドキュメント", href: "/docs" },
        { label: "API", href: "/api" },
      ],
    },
    {
      title: "会社",
      links: [
        { label: "私たちについて", href: "/about" },
        { label: "ブログ", href: "/blog" },
        { label: "キャリア", href: "/careers" },
        { label: "ニュース", href: "/news" },
      ],
    },
    {
      title: "サポート",
      links: [
        { label: "ヘルプセンター", href: "/help" },
        { label: "お問い合わせ", href: "/contact" },
        { label: "ステータス", href: "/status" },
        { label: "コミュニティ", href: "/community" },
      ],
    },
  ];

  return (
    <footer
      className={`w-full ${className}`}
      style={{
        backgroundColor: theme.colors.background.secondary,
        borderTop: `1px solid ${theme.colors.border.light}`,
        marginTop: "auto",
      }}
    >
      <div
        className="w-full px-4 sm:px-6 lg:px-8 py-12"
        style={{
          width: "100%",
          padding: `${theme.spacing.xl} ${theme.spacing.md}`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3
              className="text-lg font-bold mb-4"
              style={{
                color: theme.colors.text.primary,
                fontSize: theme.typography.fontSize.lg,
                fontWeight: theme.typography.fontWeight.bold,
                marginBottom: theme.spacing.md,
              }}
            >
              Linear Design
            </h3>
            <p
              className="mb-4"
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.fontSize.sm,
                lineHeight: theme.typography.lineHeight.relaxed,
                marginBottom: theme.spacing.md,
              }}
            >
              モダンで最小限、目的に特化したデザインシステムで、
              生産性を向上させるために構築されています。
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md transition-colors duration-200"
                    style={{
                      color: theme.colors.text.secondary,
                      borderRadius: theme.borderRadius.md,
                      transition: theme.animations.transition.normal,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.primary.brand;
                      e.currentTarget.style.backgroundColor =
                        theme.colors.background.tertiary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.text.secondary;
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="">
              <h4
                className="font-semibold mb-4"
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize.base,
                  fontWeight: theme.typography.fontWeight.semibold,
                  marginBottom: theme.spacing.md,
                }}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="transition-colors duration-200"
                      style={{
                        color: theme.colors.text.secondary,
                        fontSize: theme.typography.fontSize.sm,
                        transition: theme.animations.transition.normal,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.colors.text.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          theme.colors.text.secondary;
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{
            marginTop: theme.spacing.xl,
            paddingTop: theme.spacing.xl,
            borderTop: `1px solid ${theme.colors.border.light}`,
          }}
        >
          <div className="flex items-center mb-4 md:mb-0">
            <p
              className="flex items-center"
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.fontSize.sm,
              }}
            >
              © 2024 Linear Design.
              <Heart
                size={16}
                className="mx-1"
                style={{ color: theme.colors.status.error }}
              />
              で作られました。
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="transition-colors duration-200"
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.fontSize.sm,
                transition: theme.animations.transition.normal,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.colors.text.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.colors.text.secondary;
              }}
            >
              プライバシーポリシー
            </a>
            <a
              href="/terms"
              className="transition-colors duration-200"
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.fontSize.sm,
                transition: theme.animations.transition.normal,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = theme.colors.text.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = theme.colors.text.secondary;
              }}
            >
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export type { Props };

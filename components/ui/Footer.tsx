"use client";

import React from "react";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { theme } from '@/lib/theme';

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className = "" }) => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/your-username" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/your-handle" },
    { icon: Mail, label: "メール", href: "mailto:your.email@example.com" },
  ];

  const contactInfo = [
    { label: "メール", value: "your.email@example.com", href: "mailto:your.email@example.com" },
    { label: "電話", value: "+81-90-1234-5678", href: "tel:+819012345678" },
    { label: "所在地", value: "東京, 日本", href: null },
  ];

  const quickLinks = [
    { label: "自己紹介", href: "#about" },
    { label: "記事", href: "#articles" },
    { label: "プロジェクト", href: "#projects" },
    { label: "お問い合わせ", href: "#contact" },
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="md:col-span-1">
            <h3
              className="text-lg font-bold mb-4"
              style={{
                color: theme.colors.text.primary,
                fontSize: theme.typography.fontSize.lg,
                fontWeight: theme.typography.fontWeight.bold,
                marginBottom: theme.spacing.md,
              }}
            >
              フロントエンドエンジニア
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
              モダンなWebアプリケーション開発に情熱を注ぐエンジニアです。
              ユーザー体験の向上と開発効率の最適化を追求しています。
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

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4
              className="font-semibold mb-4"
              style={{
                color: theme.colors.text.primary,
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.semibold,
                marginBottom: theme.spacing.md,
              }}
            >
              連絡先
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.href ? (
                    <a
                      href={contact.href}
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
                      <span className="font-medium">{contact.label}:</span> {contact.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        color: theme.colors.text.secondary,
                        fontSize: theme.typography.fontSize.sm,
                      }}
                    >
                      <span className="font-medium">{contact.label}:</span> {contact.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4
              className="font-semibold mb-4"
              style={{
                color: theme.colors.text.primary,
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.semibold,
                marginBottom: theme.spacing.md,
              }}
            >
              クイックリンク
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
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
                      e.currentTarget.style.color = theme.colors.text.secondary;
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
              © 2024 フロントエンドエンジニア ポートフォリオ.
              <Heart
                size={16}
                className="mx-1"
                style={{ color: theme.colors.status.error }}
              />
              で作られました。
            </p>
          </div>

          <div className="flex space-x-6">
            <p
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.fontSize.sm,
              }}
            >
              "コードで未来を創造する"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export type { Props };

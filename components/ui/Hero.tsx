"use client";

import React from "react";
import { ArrowRight, Play, Star } from "lucide-react";
import { theme } from '@/lib/theme';
import Button from "./Button";

interface Props {
  className?: string;
}

const Hero: React.FC<Props> = ({ className = "" }) => {
  return (
    <section
      className={`w-full ${className}`}
      style={{
        backgroundColor: theme.colors.background.primary,
        padding: `${theme.spacing["4xl"]} 0`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${theme.colors.primary.brandLight} 0%, transparent 50%)`,
        }}
      />

      <div
        className="w-full px-4 sm:px-6 lg:px-8 relative z-10"
        style={{
          width: "100%",
          padding: `0 ${theme.spacing.md}`,
        }}
      >
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center mb-6">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: theme.colors.primary.brandLight,
                color: theme.colors.primary.brand,
                fontSize: theme.typography.fontSize.sm,
                fontWeight: theme.typography.fontWeight.medium,
                borderRadius: theme.borderRadius.full,
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
              }}
            >
              <Star size={16} className="mr-2" />
              新機能リリース
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="mb-6"
            style={{
              color: theme.colors.text.primary,
              fontSize: theme.typography.fontSize["5xl"],
              fontWeight: theme.typography.fontWeight.bold,
              lineHeight: theme.typography.lineHeight.tight,
              marginBottom: theme.spacing.lg,
            }}
          >
            モダンなデザインシステムで
            <br />
            <span style={{ color: theme.colors.primary.brand }}>
              生産性を向上
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mb-8 max-w-2xl mx-auto"
            style={{
              color: theme.colors.text.secondary,
              fontSize: theme.typography.fontSize.xl,
              lineHeight: theme.typography.lineHeight.relaxed,
              marginBottom: theme.spacing["2xl"],
              maxWidth: "42rem",
              margin: `0 auto ${theme.spacing["2xl"]} auto`,
            }}
          >
            Linear Design
            Systemは、クリーンで最小限、目的に特化したデザインテーマです。
            高速で応答性の高いインタラクションと一貫した視覚的階層を提供します。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center"
            >
              今すぐ始める
              <ArrowRight size={20} className="ml-2" />
            </Button>

            <button
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.medium,
                borderRadius: theme.borderRadius.lg,
                padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
                transition: theme.animations.transition.normal,
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
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
              <Play size={20} className="mr-2" />
              デモを見る
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div
                className="text-3xl font-bold mb-2"
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["3xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  marginBottom: theme.spacing.sm,
                }}
              >
                50+
              </div>
              <div
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.sm,
                }}
              >
                コンポーネント
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold mb-2"
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["3xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  marginBottom: theme.spacing.sm,
                }}
              >
                99%
              </div>
              <div
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.sm,
                }}
              >
                アップタイム
              </div>
            </div>

            <div className="text-center">
              <div
                className="text-3xl font-bold mb-2"
                style={{
                  color: theme.colors.text.primary,
                  fontSize: theme.typography.fontSize["3xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  marginBottom: theme.spacing.sm,
                }}
              >
                10k+
              </div>
              <div
                style={{
                  color: theme.colors.text.secondary,
                  fontSize: theme.typography.fontSize.sm,
                }}
              >
                開発者
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export type { Props };

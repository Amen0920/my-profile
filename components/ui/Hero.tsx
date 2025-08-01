"use client";

import React from "react";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import { theme } from "@/lib/theme";
import Button from "./Button";
import SpaceBackground from "./SpaceBackground";

interface Props {
  className?: string;
}

const Hero: React.FC<Props> = ({ className = "" }) => {
  return (
    <section
      className={`w-full min-h-screen flex items-center ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Space Background */}
      <SpaceBackground />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border"
              style={{
                backgroundColor: "rgba(168, 85, 247, 0.1)",
                color: "#a855f7",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                fontSize: theme.typography.fontSize.sm,
                fontWeight: theme.typography.fontWeight.medium,
                borderRadius: theme.borderRadius.full,
                animation: "glow 3s ease-in-out infinite",
              }}
            >
              <Star size={16} className="mr-2" />
              フロントエンドエンジニア
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{
              color: "#ffffff",
              marginBottom: theme.spacing.lg,
              animation: "fadeInUp 1s ease-out",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            コードで未来を
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "glow 2s ease-in-out infinite alternate",
              }}
            >
              創造する
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              marginBottom: theme.spacing["2xl"],
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Dummy
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="inline-flex items-center px-8 py-4 rounded-lg font-medium text-white backdrop-blur-sm border transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: theme.typography.fontSize.lg,
                fontWeight: theme.typography.fontWeight.medium,
                borderRadius: theme.borderRadius.lg,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              プロジェクトを見る
              <ArrowRight size={20} className="ml-2" />
            </motion.button>

            <motion.button
              className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.medium,
                borderRadius: theme.borderRadius.lg,
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} className="mr-2" />
              経歴を見る
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

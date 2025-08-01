"use client";

import React from "react";
import { Hero, Footer } from "@/components/ui";
import {
  AboutSection,
  ArticlesSection,
  ProjectsSection,
} from "@/components/sections";
import { theme } from "@/lib/theme";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-0 w-full z-50">
        <nav
          className="py-4"
          style={{
            backgroundColor: "rgba(13, 14, 16, 0.95)",
            backdropFilter: "blur(12px)",
            borderBottom: `1px solid ${theme.colors.border.light}`,
          }}
        >
          <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">my-profile</h1>

            <div className="flex gap-8">
              {[
                { label: "ホーム", id: "hero" },
                { label: "自己紹介", id: "about" },
                { label: "記事", id: "articles" },
                { label: "プロジェクト", id: "projects" },
                { label: "連絡先", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-400 bg-none border-none cursor-pointer px-4 py-2 rounded-md transition-all duration-200 hover:text-white hover:bg-gray-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="hero" className="pt-0">
        <Hero />
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Articles Section */}
      <ArticlesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

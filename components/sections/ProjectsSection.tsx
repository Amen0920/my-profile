"use client";

import React from "react";
import { Card, Button } from "@/components/ui";
import { theme } from "@/lib/theme";
import { Github, ExternalLink, Code } from "lucide-react";

const ProjectsSection: React.FC = () => {

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        backgroundColor: theme.colors.background.secondary,
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          主要プロジェクト
        </h2>

        <div className="flex justify-center">
          <Card>
            <div className="text-center p-12">
              <Code
                size={64}
                className="mx-auto mb-6"
                style={{
                  color: theme.colors.text.secondary,
                }}
              />
              <h3 className="text-2xl font-semibold text-white mb-4">
                準備中
              </h3>
              <p className="text-gray-400 text-lg">
                新しいプロジェクトを準備中です。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
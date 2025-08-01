"use client";

import React from "react";
import { Card, Button } from "@/components/ui";
import { theme } from "@/lib/theme";
import { FileText, Calendar } from "lucide-react";

const ArticlesSection: React.FC = () => {

  return (
    <section
      id="articles"
      className="py-20"
      style={{
        backgroundColor: theme.colors.background.primary,
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          最近の記事
        </h2>

        <div className="flex justify-center">
          <Card>
            <div className="text-center p-12">
              <Calendar
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
                新しい技術記事を準備中です。
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
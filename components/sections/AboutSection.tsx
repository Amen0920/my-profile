"use client";

import React from "react";
import { Card } from "@/components/ui";
import { theme } from "@/lib/theme";
import { Code, User } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{
        backgroundColor: theme.colors.background.secondary,
      }}
    >
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          自己紹介
        </h2>

        {/* Profile Section with Image */}
        <div className="flex gap-12 items-start mb-12 flex-col md:flex-row md:items-start">
          {/* Profile Image */}
          <div className="flex-none w-full md:w-80 flex justify-center mb-8 md:mb-0">
            <div
              className="w-64 h-64 rounded-full overflow-hidden shadow-2xl"
              style={{
                border: `4px solid ${theme.colors.primary.brand}`,
              }}
            >
              <img
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20character%20with%20glasses%20and%20dark%20hair%20wearing%20gray%20hoodie%20thinking%20bubble%20professional%20developer%20portrait&image_size=square_hd"
                alt="프로필 이미지"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Profile Info Cards */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-1 gap-6">
            <Card>
              <div className="flex items-center mb-4">
                <Code
                  size={24}
                  className="mr-3"
                  style={{
                    color: theme.colors.primary.brand,
                  }}
                />
                <h3 className="text-xl font-semibold text-white">
                  主要技術スタック
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                Next.js/GraphQL/Relayを中心としたモダンフロントエンド開発
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "GraphQL",
                  "Relay",
                  "Hono.js",
                  "Pothos",
                  "TypeScript",
                  "Panda CSS",
                  "Next.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-sm"
                    style={{
                      backgroundColor: theme.colors.primary.brandLight,
                      color: theme.colors.primary.brand,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-center mb-4">
                <User
                  size={24}
                  className="mr-3"
                  style={{
                    color: theme.colors.primary.brand,
                  }}
                />
                <h3 className="text-xl font-semibold text-white">
                  経歴 & 経験
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                SNSマーケティング支援SaaS「Cast Me!」の開発・運用・保守を担当。
                DAU1,500名規模のプラットフォームでGraphQL/Relay基盤の新機能開発を行い、
                BFF開発速度50%向上、デプロイ時間30-40%短縮を実現しました。
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

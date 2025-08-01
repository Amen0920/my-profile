"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { theme } from "@/lib/theme";

export interface CarouselItem {
  id: string;
  content: React.ReactNode;
}

export interface Props {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export const Carousel: React.FC<Props> = ({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, items.length]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            {item.content}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: theme.colors.background.secondary,
              color: theme.colors.text.primary,
              boxShadow: theme.shadows.md,
              border: `1px solid ${theme.colors.border.light}`,
            }}
            aria-label="前のスライド"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-200 hover:scale-110"
            style={{
              backgroundColor: theme.colors.background.secondary,
              color: theme.colors.text.primary,
              boxShadow: theme.shadows.md,
              border: `1px solid ${theme.colors.border.light}`,
            }}
            aria-label="次のスライド"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-3 h-3 rounded-full transition-all duration-200"
              style={{
                backgroundColor:
                  index === currentIndex
                    ? theme.colors.primary.brand
                    : "rgba(255, 255, 255, 0.5)",
              }}
              aria-label={`スライド ${index + 1}へ移動`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

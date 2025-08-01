export const theme = {
  name: "Linear Design System",
  description: "Modern, minimal, and purpose-built design theme inspired by Linear",
  
  colors: {
    primary: {
      brand: "#5E6AD2",
      brandHover: "#4C5AB8",
      brandLight: "#F0F1FF"
    },
    background: {
      primary: "#0D0E10",
      secondary: "#1A1B1E",
      tertiary: "#2A2B2E",
      dark: "#0D0E10",
      darkSecondary: "#1A1B1E",
      light: "#FFFFFF",
      lightSecondary: "#FAFBFC"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B3B4B6",
      tertiary: "#9CA3AF",
      inverse: "#0D0E10",
      muted: "#6B7280"
    },
    border: {
      light: "#2A2B2E",
      medium: "#3A3B3E",
      strong: "#4A4B4E"
    },
    status: {
      success: "#10B981",
      warning: "#F59E0B",
      error: "#EF4444",
      info: "#3B82F6"
    }
  },

  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace"
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75"
    }
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem"
  },

  borderRadius: {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px"
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },

  animations: {
    transition: {
      fast: "0.15s ease",
      normal: "0.2s ease",
      slow: "0.3s ease"
    },
    easing: {
      easeOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
    }
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },

  designPrinciples: [
    "Clean and minimal aesthetic",
    "Purpose-built for productivity",
    "Fast and responsive interactions",
    "Consistent visual hierarchy",
    "Accessible and inclusive design",
    "Modern and professional appearance"
  ]
} as const;

export type Theme = typeof theme;
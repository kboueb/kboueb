"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyTheme(theme: Theme) {
    const root = document.documentElement;
    if (theme === "dark") {
        root.classList.add("dark");
    } else {
        root.classList.remove("dark");
    }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    // Lazy init reads the persisted theme on the client; SSR falls back to
    // "dark" (matches the anti-flash script default, so nothing flashes).
    const [theme, setThemeState] = useState<Theme>(() => {
        if (typeof window === "undefined") return "dark";
        const stored = window.localStorage.getItem("theme");
        return stored === "light" || stored === "dark" ? stored : "dark";
    });

    // Sync the DOM class whenever the theme changes (no state updates here).
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = (next: Theme) => {
        setThemeState(next);
        localStorage.setItem("theme", next);
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
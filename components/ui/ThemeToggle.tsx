"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            initial={false}
            animate={{ rotate: theme === "dark" ? 0 : 180 }}
            transition={{ duration: 0.4 }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-ink hover:text-signal bg-black/5 hover:bg-black/10 backdrop-blur-md border border-black/10 transition-colors dark:text-paper dark:hover:text-signal dark:bg-white/10 dark:hover:bg-white/20 dark:border-white/10"
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4" />
            ) : (
                <Moon className="w-4 h-4" />
            )}
        </motion.button>
    );
}
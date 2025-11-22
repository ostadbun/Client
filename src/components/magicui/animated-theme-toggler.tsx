"use client";

import { Moon, SunDim } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: Props) => {
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    }).ready;
  };

  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      {!mounted ? (
        <Moon className="opacity-0" />
      ) : theme === "dark" ? (
        <SunDim key="sun" />
      ) : (
        <Moon key="moon" />
      )}
    </button>
  );
};
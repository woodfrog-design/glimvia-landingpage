"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

type ThemedImageProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ThemedImage({ lightSrc, darkSrc, alt, ...props }: ThemedImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or the light image by default to avoid hydration mismatch
    return <Image src={lightSrc} alt={alt} {...props} unoptimized />;
  }
  
  const src = resolvedTheme === "dark" ? darkSrc : lightSrc;

  return <Image src={src} alt={alt} {...props} />;
}

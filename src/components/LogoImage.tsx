"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackText: string;
  fallbackClassName?: string;
}

export default function LogoImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  fallbackText,
  fallbackClassName = ""
}: LogoImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className={fallbackClassName}>
        {fallbackText}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
} 
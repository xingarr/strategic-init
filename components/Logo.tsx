"use client"

import Image from "next/image";
import Link from "next/link";

export default function Logo({
  href = "/",
  width = 100,
  height = 33,
  className = "h-7 w-auto",
  alt = "UXCA Logo",
  ...props
}: {
  href?: string;
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  [key: string]: any;
}) {
  return (
    <Link href={href} aria-label={alt}>
      <Image
        src="/images/UXCA_Logo_White.png"
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    </Link>
  );
}

"use client"

import Image from "next/image";
import Link from "next/link";

export default function UXCALogo({
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
        src="https://www.theuxda.com/themes/uxda/assets/img/nav/uxda-logo-white.svg"
        alt={alt}
        width={width}
        height={height}
        className={className}
        {...props}
      />
    </Link>
  );
}

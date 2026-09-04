import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NovisLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  showTagline?: boolean;
  asLink?: boolean;
}

export function NovisLogo({
  className = '',
  size = 'md',
  showWordmark = true,
  showTagline = false,
  asLink = true,
}: NovisLogoProps) {
  const dimensionMap = {
    sm: { img: 32, text: 'text-lg', subText: 'text-[11px]' },
    md: { img: 40, text: 'text-xl', subText: 'text-xs' },
    lg: { img: 56, text: 'text-2xl', subText: 'text-sm' },
  };

  const dim = dimensionMap[size];

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <Image
          src="/novis-logo.png"
          alt="Novis Media Firefly Logo"
          width={dim.img}
          height={dim.img}
          className="object-contain transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col">
          <div className="flex items-center tracking-tight font-display font-bold text-[#F3F1EA]">
            <span className={`${dim.text} font-black tracking-tight text-[#F3F1EA]`}>Novis</span>
            <span className={`${dim.text} ml-1.5 font-medium text-[#A5A79B]`}>Media</span>
          </div>

          {showTagline && (
            <span className={`${dim.subText} tracking-wider text-[#A5A79B] font-sans mt-0.5`}>
              Small spark, big reach.
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E7A5C] rounded-md transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}
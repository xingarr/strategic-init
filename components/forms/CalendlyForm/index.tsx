'use client';

import { useEffect, useRef } from 'react';

export default function CalendlyForm() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-brand-gray-dark bg-opacity-30  max-w-[1280px] min-h-[630px] border border-gray-800 rounded-lg p-6 md:p-8 animate-fade-in">
      <div className="w-full min-w-[320px] h-[700px] ">
        <div
          ref={ref}
          className="calendly-inline-widget w-full h-full"
          data-url="https://cal.com/dennis-cal/30min"
        />
      </div>
    </div>
  );
}

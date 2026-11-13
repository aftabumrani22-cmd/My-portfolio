import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  theme?: 'light' | 'dark';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';

  return (
    <div
      className={`mb-10 sm:mb-16 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className={`w-6 h-[1.5px] ${isLight ? 'bg-sky-600' : 'bg-sky-400'}`}></span>
          <span
            className={`text-xs uppercase tracking-widest font-mono font-bold ${
              isLight ? 'text-sky-700' : 'text-sky-400'
            }`}
          >
            {eyebrow}
          </span>
          {centered && (
            <span className={`w-6 h-[1.5px] ${isLight ? 'bg-sky-600' : 'bg-sky-400'}`}></span>
          )}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed font-normal ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

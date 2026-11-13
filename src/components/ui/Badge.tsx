import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'outline' | 'muted';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantClasses = {
    default: 'bg-slate-800/80 text-slate-300 border border-slate-700/60',
    accent: 'bg-sky-500/10 text-sky-400 border border-sky-500/30 font-medium',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-medium',
    outline: 'bg-transparent text-slate-300 border border-slate-700 hover:border-slate-500',
    muted: 'bg-slate-900/50 text-slate-400 border border-slate-800 text-xs',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors duration-200 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  locale: string;
  variant?: 'default' | 'text-only' | 'icon-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  clickable?: boolean;
}

const sizeClasses = {
  sm: {
    icon: 'w-6 h-6',
    text: 'text-lg',
  },
  md: {
    icon: 'w-8 h-8',
    text: 'text-xl',
  },
  lg: {
    icon: 'w-12 h-12',
    text: 'text-2xl',
  },
};

export default function Logo({
  locale,
  variant = 'default',
  size = 'md',
  className = '',
  clickable = true,
}: LogoProps) {
  const sizeClass = sizeClasses[size];

  const content = (
    <div className={cn('flex items-center space-x-2', className)}>
      {variant !== 'text-only' && (
        <div className={sizeClass.icon}>
          <Image
            src="/logo.svg"
            alt="ForPublic.id Logo"
            width={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
            height={size === 'sm' ? 24 : size === 'md' ? 32 : 48}
            className="w-full h-full"
            priority
          />
        </div>
      )}
      {variant !== 'icon-only' && (
        <span className={cn(`${sizeClass.text} font-bold text-gray-900`)}>
          ForPublic<span className="text-red-600">.id</span>
        </span>
      )}
    </div>
  );

  if (!clickable) {
    return content;
  }

  return (
    <Link
      href={`/${locale}`}
      className="hover:opacity-80 transition-opacity"
      aria-label="ForPublic.id Home"
    >
      {content}
    </Link>
  );
}

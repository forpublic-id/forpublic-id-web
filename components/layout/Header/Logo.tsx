import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  locale: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    width: 24,
    height: 24,
    containerClass: 'w-6 h-6',
    textClass: 'text-lg',
  },
  md: {
    width: 32,
    height: 32,
    containerClass: 'w-8 h-8',
    textClass: 'text-xl',
  },
  lg: {
    width: 40,
    height: 40,
    containerClass: 'w-10 h-10',
    textClass: 'text-2xl',
  },
};

export default function Logo({
  locale,
  size = 'md',
  showText = true,
  className = '',
}: LogoProps) {
  const config = sizeConfig[size];

  return (
    <Link
      href={`/${locale}`}
      className={`flex items-center space-x-2 hover:opacity-80 transition-opacity ${className}`}
      aria-label="ForPublic.id Homepage"
    >
      <div className={config.containerClass}>
        <Image
          src="/logo.svg"
          alt="ForPublic.id Logo"
          width={config.width}
          height={config.height}
          className="w-full h-full"
          priority
        />
      </div>
      {showText && (
        <span className={`${config.textClass} font-bold text-gray-900`}>
          ForPublic<span className="text-red-600">.id</span>
        </span>
      )}
    </Link>
  );
}

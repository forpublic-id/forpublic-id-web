import { cn } from '@/lib/utils';

interface LoadingProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

const Spinner = ({ size, className }: { size: string; className?: string }) => (
  <div
    className={cn(
      'animate-spin rounded-full border-2 border-gray-300',
      size,
      className
    )}
  >
    <div className="border-t-2 border-red-600 rounded-full w-full h-full"></div>
  </div>
);

const Dots = ({ className }: { className?: string }) => (
  <div className={cn('flex space-x-1', className)}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-2 h-2 bg-red-600 rounded-full animate-pulse"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
);

const Pulse = ({ className }: { className?: string }) => (
  <div className={cn('animate-pulse', className)}>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn('animate-pulse space-y-4', className)}>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
  </div>
);

export default function Loading({
  variant = 'spinner',
  size = 'md',
  className = '',
  text,
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return <Dots className={className} />;
      case 'pulse':
        return <Pulse className={className} />;
      case 'skeleton':
        return <Skeleton className={className} />;
      default:
        return <Spinner size={sizeClasses[size]} className={className} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {renderVariant()}
      {text && <p className="text-sm text-gray-600 animate-pulse">{text}</p>}
    </div>
  );
}

// Specific loading components for common use cases
export const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <Loading variant="spinner" size="lg" text="Loading..." />
  </div>
);

export const ComponentLoading = ({ className }: { className?: string }) => (
  <div className={cn('py-8 flex justify-center', className)}>
    <Loading variant="spinner" size="md" />
  </div>
);

export const CardSkeleton = () => (
  <div className="border rounded-lg p-6 space-y-4">
    <Loading variant="skeleton" />
  </div>
);

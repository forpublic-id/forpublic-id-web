import type { LucideIcon } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  content: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal';
  className?: string;
}

const colorClasses = {
  blue: {
    border: 'border-l-blue-500',
    icon: 'text-blue-600',
  },
  green: {
    border: 'border-l-green-500',
    icon: 'text-green-600',
  },
  purple: {
    border: 'border-l-purple-500',
    icon: 'text-purple-600',
  },
  orange: {
    border: 'border-l-orange-500',
    icon: 'text-orange-600',
  },
  red: {
    border: 'border-l-red-500',
    icon: 'text-red-600',
  },
  teal: {
    border: 'border-l-teal-500',
    icon: 'text-teal-600',
  },
};

export default function CategoryCard({
  icon: Icon,
  title,
  description,
  content,
  color,
  className = '',
}: CategoryCardProps) {
  const colorClass = colorClasses[color];

  return (
    <Card
      className={`hover:shadow-lg transition-shadow border-l-4 ${colorClass.border} cursor-pointer ${className}`}
    >
      <CardHeader>
        <Icon className={`w-12 h-12 ${colorClass.icon} mb-4`} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
}

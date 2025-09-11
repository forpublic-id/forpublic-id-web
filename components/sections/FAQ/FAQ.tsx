'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useId, useState } from 'react';
import { Button, Card } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  items: FAQItem[];
  locale?: string;
  showViewAllButton?: boolean;
}

export function FAQ({
  title,
  subtitle,
  items,
  locale = 'id',
  showViewAllButton = true,
}: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const baseId = useId();

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openItems.includes(index);
            const headerId = `${baseId}-header-${index}`;
            const contentId = `${baseId}-content-${index}`;

            return (
              <Card
                key={index}
                className={`border transition-all duration-300 bg-white rounded-lg gap-2 py-2 ${
                  isOpen
                    ? 'border-red-300 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div
                  className="px-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  id={headerId}
                >
                  <h3 className="text-base font-medium text-gray-900 leading-relaxed">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-red-500 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div
                  id={contentId}
                  aria-labelledby={headerId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-3">
                    <div className="border-t border-gray-100 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {showViewAllButton && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-gray-300 text-gray-700 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 bg-white"
              asChild
            >
              <Link href={`/${locale}/faq`}>
                {locale === 'id' ? 'Lihat Semua FAQ' : 'View All FAQ'}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

import { Mail, MessageCircle, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { PageHeader } from '@/components/common';
import { Footer, Header } from '@/components/layout';
import { FAQ } from '@/components/sections';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'id';
  const t = await getTranslations({ locale });

  return {
    title: `${t('faq.title')} - ForPublic.id`,
    description:
      locale === 'id'
        ? 'Temukan jawaban untuk pertanyaan yang sering diajukan tentang ForPublic.id. Pelajari cara menggunakan platform dan aplikasi digital kami.'
        : 'Find answers to frequently asked questions about ForPublic.id. Learn how to use our platform and digital applications.',
    openGraph: {
      title: `${t('faq.title')} - ForPublic.id`,
      description:
        locale === 'id'
          ? 'Temukan jawaban untuk pertanyaan yang sering diajukan tentang ForPublic.id. Pelajari cara menggunakan platform dan aplikasi digital kami.'
          : 'Find answers to frequently asked questions about ForPublic.id. Learn how to use our platform and digital applications.',
    },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'id';
  const t = await getTranslations({ locale });

  // Get all FAQ items
  const faqItems = t.raw('faq.items') as Array<{
    question: string;
    answer: string;
  }>;

  // Additional FAQ items for dedicated page
  const additionalFAQs =
    locale === 'id'
      ? [
          {
            question: 'Bagaimana cara memberikan feedback atau saran?',
            answer:
              'Kami sangat menghargai feedback dan saran dari pengguna. Anda dapat mengirim feedback melalui email ke forpublic.indonesia@gmail.com atau melalui form kontak yang tersedia di website kami. Tim kami akan merespons dalam 1-2 hari kerja.',
          },
          {
            question: 'Apakah ForPublic.id tersedia dalam bahasa lain?',
            answer:
              'Saat ini ForPublic.id tersedia dalam bahasa Indonesia dan bahasa Inggris. Kami berencana menambahkan dukungan untuk bahasa daerah di Indonesia di masa mendatang berdasarkan kebutuhan pengguna.',
          },
          {
            question:
              'Bagaimana cara bergabung sebagai kontributor atau volunteer?',
            answer:
              'Kami selalu terbuka untuk kolaborasi dengan individu atau organisasi yang memiliki visi serupa. Silakan hubungi kami melalui email forpublic.indonesia@gmail.com dengan mencantumkan keahlian dan kontribusi yang ingin Anda berikan.',
          },
          {
            question:
              'Apakah data yang digunakan dalam aplikasi selalu terbaru?',
            answer:
              'Kami berusaha memastikan data yang disajikan selalu terbaru dan akurat. Data diperbarui secara berkala sesuai dengan sumber resmi. Jika Anda menemukan data yang tidak akurat, silakan laporkan kepada kami.',
          },
          {
            question:
              'Bisakah saya menggunakan API atau data dari ForPublic.id untuk proyek lain?',
            answer:
              'Kami mendukung penggunaan data untuk kepentingan publik. Untuk akses API atau penggunaan data dalam skala besar, silakan hubungi tim kami untuk mendiskusikan persyaratan dan ketentuan penggunaan.',
          },
        ]
      : [
          {
            question: 'How can I provide feedback or suggestions?',
            answer:
              'We greatly appreciate user feedback and suggestions. You can send feedback via email to forpublic.indonesia@gmail.com or through the contact form available on our website. Our team will respond within 1-2 business days.',
          },
          {
            question: 'Is ForPublic.id available in other languages?',
            answer:
              'Currently ForPublic.id is available in Indonesian and English. We plan to add support for regional languages in Indonesia in the future based on user needs.',
          },
          {
            question: 'How can I join as a contributor or volunteer?',
            answer:
              'We are always open to collaboration with individuals or organizations that share similar vision. Please contact us via email forpublic.indonesia@gmail.com including your expertise and the contribution you would like to make.',
          },
          {
            question: 'Is the data used in applications always up to date?',
            answer:
              'We strive to ensure the data presented is always current and accurate. Data is updated regularly according to official sources. If you find inaccurate data, please report it to us.',
          },
          {
            question:
              'Can I use API or data from ForPublic.id for other projects?',
            answer:
              'We support data usage for public interest. For API access or large-scale data usage, please contact our team to discuss terms and conditions of use.',
          },
        ];

  const allFAQs = [...faqItems, ...additionalFAQs];

  // Generate FAQ structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <Header locale={locale} />

      {/* Header Section */}
      <PageHeader
        title={t('faq.title')}
        subtitle={
          locale === 'id'
            ? 'Temukan jawaban untuk pertanyaan yang paling sering diajukan tentang ForPublic.id dan layanan kami.'
            : 'Find answers to the most frequently asked questions about ForPublic.id and our services.'
        }
        badge={locale === 'id' ? 'Pusat Bantuan' : 'Help Center'}
        showBackButton={true}
        backUrl={`/${locale}`}
        backText={t('notFound.backToHome')}
        locale={locale}
      />

      {/* FAQ Section */}
      <FAQ
        title=""
        subtitle=""
        items={allFAQs}
        locale={locale}
        showViewAllButton={false}
      />

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {locale === 'id'
                ? 'Masih Ada Pertanyaan?'
                : 'Still Have Questions?'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {locale === 'id'
                ? 'Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai channel yang tersedia.'
                : "Our team is ready to help you. Don't hesitate to contact us through various available channels."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Email
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'id'
                  ? 'Kirim email untuk pertanyaan detail'
                  : 'Send email for detailed questions'}
              </p>
              <a
                href="mailto:forpublic.indonesia@gmail.com"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                forpublic.indonesia@gmail.com
              </a>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {locale === 'id' ? 'Forum Diskusi' : 'Discussion Forum'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'id'
                  ? 'Bergabung dengan komunitas pengguna'
                  : 'Join our user community'}
              </p>
              <span className="text-green-600 text-sm font-medium">
                {locale === 'id' ? 'Tersedia' : 'Available'}
              </span>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {locale === 'id' ? 'Bantuan Langsung' : 'Live Support'}
              </h3>
              <p className="text-gray-600 mb-4">
                {locale === 'id'
                  ? 'Chat langsung dengan tim support'
                  : 'Chat directly with support team'}
              </p>
              <span className="text-green-600 text-sm font-medium">
                {locale === 'id' ? 'Tersedia' : 'Available'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}

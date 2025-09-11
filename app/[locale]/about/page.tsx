import {
  ArrowRight,
  Award,
  Calendar,
  Code,
  Globe,
  Heart,
  Lightbulb,
  Mail,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { PageHeader, StructuredData } from '@/components/common';
import { Footer, Header } from '@/components/layout';
import { Button } from '@/components/ui';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'id';
  const t = await getTranslations({ locale });

  return {
    title: `${t('aboutPage.page.title')} - ForPublic.id`,
    description:
      locale === 'id'
        ? '🏢 Pelajari visi, misi, dan nilai-nilai ForPublic.id dalam mendukung transparansi publik Indonesia. Tim, sejarah, dan komitmen kami untuk masyarakat.'
        : '🏢 Learn about ForPublic.id vision, mission, and values in supporting Indonesian public transparency. Our team, history, and commitment to society.',
    keywords:
      locale === 'id'
        ? 'tentang forpublic, visi misi, tim, sejarah, transparansi publik, non profit, masyarakat indonesia'
        : 'about forpublic, vision mission, team, history, public transparency, non profit, indonesian society',
    openGraph: {
      title: `${t('aboutPage.page.title')} - ForPublic.id`,
      description:
        locale === 'id'
          ? '🏢 Pelajari visi, misi, dan nilai-nilai ForPublic.id dalam mendukung transparansi publik Indonesia. Tim, sejarah, dan komitmen kami untuk masyarakat.'
          : '🏢 Learn about ForPublic.id vision, mission, and values in supporting Indonesian public transparency. Our team, history, and commitment to society.',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'id-ID': '/id/about',
        'en-US': '/en/about',
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || 'id';
  const t = await getTranslations({ locale });

  const values = [
    {
      icon: Shield,
      title: locale === 'id' ? 'Transparansi' : 'Transparency',
      description:
        locale === 'id'
          ? 'Kami berkomitmen untuk menyediakan akses informasi publik yang terbuka dan mudah dipahami oleh semua kalangan.'
          : 'We are committed to providing open and easily understandable public information access for everyone.',
    },
    {
      icon: Users,
      title: locale === 'id' ? 'Komunitas' : 'Community',
      description:
        locale === 'id'
          ? 'Mengutamakan kebutuhan masyarakat dan membangun platform yang benar-benar bermanfaat untuk kehidupan sehari-hari.'
          : 'Prioritizing community needs and building platforms that are truly beneficial for daily life.',
    },
    {
      icon: Lightbulb,
      title: locale === 'id' ? 'Inovasi' : 'Innovation',
      description:
        locale === 'id'
          ? 'Terus mengembangkan solusi digital terdepan yang memanfaatkan teknologi untuk kemudahan akses informasi.'
          : 'Continuously developing cutting-edge digital solutions that leverage technology for easy information access.',
    },
    {
      icon: Heart,
      title: locale === 'id' ? 'Aksesibilitas' : 'Accessibility',
      description:
        locale === 'id'
          ? 'Memastikan semua aplikasi dapat digunakan oleh siapa saja, kapan saja, dengan berbagai kondisi dan perangkat.'
          : 'Ensuring all applications can be used by anyone, anytime, with various conditions and devices.',
    },
    {
      icon: TrendingUp,
      title: locale === 'id' ? 'Dampak Positif' : 'Positive Impact',
      description:
        locale === 'id'
          ? 'Mengukur keberhasilan dari manfaat nyata yang dirasakan masyarakat dalam mengakses layanan publik.'
          : 'Measuring success from real benefits felt by society in accessing public services.',
    },
    {
      icon: Award,
      title: locale === 'id' ? 'Kepercayaan' : 'Trust',
      description:
        locale === 'id'
          ? 'Membangun dan memelihara kepercayaan publik melalui kualitas data, keamanan, dan konsistensi layanan.'
          : 'Building and maintaining public trust through data quality, security, and service consistency.',
    },
  ];

  const timeline = [
    {
      year: '2025',
      title: locale === 'id' ? 'Peluncuran Platform' : 'Platform Launch',
      description:
        locale === 'id'
          ? 'Peluncuran resmi ForPublic.id dengan 10+ aplikasi digital untuk transparansi publik Indonesia.'
          : 'Official launch of ForPublic.id with 10+ digital applications for Indonesian public transparency.',
    },
    {
      year: '2026+',
      title: locale === 'id' ? 'Coming Soon' : 'Coming Soon',
      description:
        locale === 'id'
          ? 'Fitur dan pengembangan lebih lanjut akan diumumkan seiring dengan pertumbuhan platform dan kebutuhan masyarakat.'
          : 'Further features and developments will be announced as the platform grows and community needs evolve.',
    },
  ];

  const team = [
    {
      role: locale === 'id' ? 'Tim Pengembang' : 'Development Team',
      description:
        locale === 'id'
          ? 'Terdiri dari developer, designer, dan data analyst yang berpengalaman dalam teknologi web modern.'
          : 'Consists of experienced developers, designers, and data analysts in modern web technology.',
      icon: Code,
    },
    {
      role: locale === 'id' ? 'Tim Data' : 'Data Team',
      description:
        locale === 'id'
          ? 'Spesialis dalam mengolah dan memverifikasi data publik untuk memastikan akurasi dan relevansi informasi.'
          : 'Specialists in processing and verifying public data to ensure information accuracy and relevance.',
      icon: TrendingUp,
    },
    {
      role: locale === 'id' ? 'Tim Operasional' : 'Operations Team',
      description:
        locale === 'id'
          ? 'Bertanggung jawab dalam menjaga kualitas layanan, keamanan sistem, dan komunikasi dengan pengguna.'
          : 'Responsible for maintaining service quality, system security, and user communication.',
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <StructuredData
        organization={{}}
        website={{
          description: t('aboutPage.page.description'),
          inLanguage: locale === 'id' ? ['id-ID'] : ['en-US'],
        }}
      />
      <Header locale={locale} />

      {/* Page Header */}
      <PageHeader
        title={t('aboutPage.hero.title')}
        subtitle={t('aboutPage.hero.description')}
        showBackButton={true}
        backUrl={`/${locale}`}
        backText={t('notFound.backToHome')}
        locale={locale}
      />

      {/* Vision & Mission */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'id' ? 'Visi Kami' : 'Our Vision'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'id'
                  ? 'Menjadi platform digital terdepan yang memungkinkan setiap warga negara Indonesia memiliki akses mudah, cepat, dan terpercaya terhadap informasi publik, mendorong transparansi dan akuntabilitas dalam tata kelola pemerintahan.'
                  : 'To become the leading digital platform that enables every Indonesian citizen to have easy, fast, and reliable access to public information, promoting transparency and accountability in government administration.'}
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {locale === 'id' ? 'Misi Kami' : 'Our Mission'}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {locale === 'id'
                  ? 'Mengembangkan aplikasi digital gratis yang mudah digunakan untuk mengakses data pemerintah, anggaran publik, dan informasi layanan masyarakat. Menyederhanakan kompleksitas birokrasi menjadi pengalaman digital yang intuitif dan bermanfaat.'
                  : 'Developing free, easy-to-use digital applications to access government data, public budgets, and community service information. Simplifying bureaucratic complexity into an intuitive and beneficial digital experience.'}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {locale === 'id' ? 'Nilai-Nilai Kami' : 'Our Values'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {locale === 'id' ? 'Tim Kami' : 'Our Team'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              {locale === 'id'
                ? 'Dibalik ForPublic.id adalah tim yang berdedikasi untuk menciptakan solusi digital terbaik.'
                : 'Behind ForPublic.id is a team dedicated to creating the best digital solutions.'}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-left"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {member.role}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {locale === 'id' ? 'Roadmap Kami' : 'Our Roadmap'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {locale === 'id'
                  ? 'Perjalanan pengembangan ForPublic.id untuk masa depan transparansi publik Indonesia.'
                  : 'ForPublic.id development journey for the future of Indonesian public transparency.'}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-gradient-to-br from-red-50 to-blue-50 rounded-xl p-6 border border-red-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <span className="inline-block text-sm font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full mb-2">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {locale === 'id' ? 'Dampak Kami' : 'Our Impact'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {locale === 'id'
                ? 'Kontribusi nyata ForPublic.id dalam meningkatkan transparansi dan akses informasi publik di Indonesia.'
                : 'ForPublic.id real contribution in improving transparency and public information access in Indonesia.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'id' ? 'Aplikasi Digital' : 'Digital Applications'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'id'
                  ? 'Tools gratis untuk transparansi'
                  : 'Free tools for transparency'}
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'id' ? 'Pengguna Aktif' : 'Active Users'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'id'
                  ? 'Masyarakat yang terbantu'
                  : 'Community members helped'}
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                99.9%
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'id' ? 'Keandalan' : 'Reliability'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'id'
                  ? 'Server uptime terjamin'
                  : 'Guaranteed server uptime'}
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {locale === 'id' ? 'Dukungan' : 'Support'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'id'
                  ? 'Akses tanpa batas waktu'
                  : 'Unlimited time access'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              {locale === 'id'
                ? 'Bergabung dengan Misi Kami'
                : 'Join Our Mission'}
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              {locale === 'id'
                ? 'Bersama-sama kita wujudkan Indonesia yang lebih transparan dan terbuka. Mulai jelajahi aplikasi kami atau hubungi tim untuk berkolaborasi.'
                : 'Together we create a more transparent and open Indonesia. Start exploring our applications or contact our team to collaborate.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={`/${locale}/applications`}>
                {locale === 'id' ? 'Jelajahi Aplikasi' : 'Explore Applications'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 text-lg font-semibold transition-all duration-300"
              asChild
            >
              <Link href={`/${locale}/contact`}>
                {locale === 'id' ? 'Mari Berkolaborasi' : "Let's Collaborate"}
                <Mail className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-red-400/30">
            <p className="text-red-100 text-sm">
              {locale === 'id'
                ? '🚀 Bersama membangun transparansi publik untuk Indonesia yang lebih baik'
                : '🚀 Together building public transparency for a better Indonesia'}
            </p>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  );
}

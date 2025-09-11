import { CheckCircle, Plus, Shield, Smartphone, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface FeaturesProps {
  locale: string;
  description: string;
  features: {
    free: { title: string; description: string };
    easyToUse: { title: string; description: string };
    trustedData: { title: string; description: string };
    responsive: { title: string; description: string };
    fastReliable: { title: string; description: string };
    continuousGrowth: { title: string; description: string };
  };
}

export default function Features({
  locale,
  description,
  features,
}: FeaturesProps) {
  return (
    <section
      id="features"
      className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {locale === 'id' ? (
              <>
                Mengapa Memilih ForPublic
                <span className="text-red-600">.id</span>
              </>
            ) : (
              <>
                Why Choose ForPublic<span className="text-red-600">.id</span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={CheckCircle}
            title={features.free.title}
            description={features.free.description}
            color="green"
          />
          <FeatureCard
            icon={Smartphone}
            title={features.easyToUse.title}
            description={features.easyToUse.description}
            color="blue"
          />
          <FeatureCard
            icon={Shield}
            title={features.trustedData.title}
            description={features.trustedData.description}
            color="purple"
          />
          <FeatureCard
            icon={Smartphone}
            title={features.responsive.title}
            description={features.responsive.description}
            color="orange"
          />
          <FeatureCard
            icon={Zap}
            title={features.fastReliable.title}
            description={features.fastReliable.description}
            color="yellow"
          />
          <FeatureCard
            icon={Plus}
            title={features.continuousGrowth.title}
            description={features.continuousGrowth.description}
            color="red"
          />
        </div>
      </div>
    </section>
  );
}

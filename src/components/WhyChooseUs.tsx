import { siteConfig } from '@/config/site';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#0A0A0F] border-y border-[#8B5CF6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              {siteConfig.features.title}
            </span>
          </h2>
          <p className="text-[#CBD5E1] text-lg max-w-3xl mx-auto">
            {siteConfig.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {siteConfig.features.items.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-[#1A1A2E] border border-[#8B5CF6]/20 rounded-xl p-6 hover:border-[#8B5CF6]/50 hover:shadow-lg hover:shadow-[#8B5CF6]/20 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#8B5CF6]/50 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-[#8B5CF6] font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-[#CBD5E1] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] border border-[#8B5CF6]/40 rounded-2xl p-8 shadow-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#8B5CF6] font-bold text-2xl mb-4 text-center">Our Promise</h3>
                  <p className="text-[#CBD5E1] text-center leading-relaxed">
                    We're committed to helping UK players find the perfect casino match. Every recommendation is backed by thorough research, real player feedback, and strict quality standards.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#8B5CF6]/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-[#CBD5E1] text-sm">Licensed Casinos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">75K+</div>
                    <div className="text-[#CBD5E1] text-sm">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-[#CBD5E1] text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">4.8★</div>
                    <div className="text-[#CBD5E1] text-sm">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#06B6D4]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

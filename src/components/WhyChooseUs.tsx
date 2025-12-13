import { siteConfig } from '@/config/site';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#0F1419] border-y border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              {siteConfig.features.title}
            </span>
          </h2>
          <p className="text-[#B8C5D6] text-lg max-w-3xl mx-auto">
            {siteConfig.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-6">
            {siteConfig.features.items.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-[#1A2332] border border-[#FFD700]/20 rounded-xl p-6 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700] to-[#FFC929] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FFD700]/50 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-[#FFD700] font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-[#B8C5D6] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1A2332] to-[#0F1419] border border-[#FFD700]/40 rounded-2xl p-8 shadow-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#FFD700] font-bold text-2xl mb-4 text-center">Our Promise</h3>
                  <p className="text-[#B8C5D6] text-center leading-relaxed">
                    We're committed to helping UK players find the perfect casino match. Every recommendation is backed by thorough research, real player feedback, and strict quality standards.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#FFD700]/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-[#B8C5D6] text-sm">Licensed Casinos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">50K+</div>
                    <div className="text-[#B8C5D6] text-sm">Happy Players</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-[#B8C5D6] text-sm">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">4.9★</div>
                    <div className="text-[#B8C5D6] text-sm">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FFC929]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

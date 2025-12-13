import { siteConfig } from '@/config/site';

export default function TrustSignals() {
  return (
    <section className="py-16 bg-[#1A2332] border-y border-[#FFD700]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">
              {siteConfig.trustSignals.title}
            </span>
          </h2>
          <p className="text-[#B8C5D6] text-lg max-w-3xl mx-auto">
            {siteConfig.trustSignals.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {siteConfig.trustSignals.stats.map((stat, index) => (
            <div key={index} className="text-center bg-[#0F1419] border border-[#FFD700]/20 rounded-xl p-6 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all group">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-[#B8C5D6] text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fully Licensed */}
          <div className="text-center bg-[#0F1419] border border-[#FFD700]/30 rounded-xl p-6 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC929] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#FFD700]/50">
              <svg className="w-8 h-8 text-[#1A2332]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[#FFD700] font-semibold text-lg mb-2">UK Licensed Only</h3>
            <p className="text-[#B8C5D6] text-sm leading-relaxed">
              Every casino holds full UK Gambling Commission licensing for complete player protection
            </p>
          </div>

          {/* Expert Reviews */}
          <div className="text-center bg-[#0F1419] border border-[#FFD700]/30 rounded-xl p-6 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC929] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#FFD700]/50">
              <svg className="w-8 h-8 text-[#1A2332]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[#FFD700] font-semibold text-lg mb-2">Expert Reviews</h3>
            <p className="text-[#B8C5D6] text-sm leading-relaxed">
              Our team thoroughly tests each casino's games, bonuses, and customer service
            </p>
          </div>

          {/* Secure Payments */}
          <div className="text-center bg-[#0F1419] border border-[#FFD700]/30 rounded-xl p-6 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC929] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#FFD700]/50">
              <svg className="w-8 h-8 text-[#1A2332]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[#FFD700] font-semibold text-lg mb-2">Secure Payments</h3>
            <p className="text-[#B8C5D6] text-sm leading-relaxed">
              All casinos use SSL encryption and trusted payment methods for your security
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center bg-[#0F1419] border border-[#FFD700]/30 rounded-xl p-6 hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC929] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-[#FFD700]/50">
              <svg className="w-8 h-8 text-[#1A2332]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <h3 className="text-[#FFD700] font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-[#B8C5D6] text-sm leading-relaxed">
              Round-the-clock customer assistance available at all recommended casinos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

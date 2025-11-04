import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] border-b border-[#1E3A8A]/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1E3A8A]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1E3A8A]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#1E3A8A] via-[#D4AF37] to-[#2563EB] bg-clip-text text-transparent">
            {siteConfig.hero.headline}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto sm:block hidden font-light leading-relaxed">
          {siteConfig.hero.subtext}
        </p>

        {/* Trust Badges - Horizontally Scrollable */}
        <div className="w-full overflow-x-auto">
          <div className="flex items-center gap-8 text-sm text-gray-300 min-w-max px-4">
            <div className="flex items-center space-x-3 whitespace-nowrap bg-[#1E293B] border border-[#1E3A8A]/40 px-4 py-2 rounded-xl hover:border-[#D4AF37]/60 hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg hover:shadow-[#1E3A8A]/20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <span className="font-semibold text-white">Fast Payouts</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-[#1E293B] border border-[#1E3A8A]/40 px-4 py-2 rounded-xl hover:border-[#D4AF37]/60 hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg hover:shadow-[#1E3A8A]/20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🆕</span>
              </div>
              <span className="font-semibold text-white">New Casinos</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-[#1E293B] border border-[#1E3A8A]/40 px-4 py-2 rounded-xl hover:border-[#D4AF37]/60 hover:bg-[#1E293B] transition-all cursor-pointer shadow-lg hover:shadow-[#1E3A8A]/20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <span className="font-semibold text-white">Top Rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from '@/config/site';

export default function Hero() {
  return (
    <section id="home" className="relative py-12 md:py-20 bg-gradient-to-b from-[#0A0A0F] via-[#151520] to-[#0A0A0F] border-b border-[#FF6B35]/10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00D4AA]/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          <span className="bg-gradient-to-r from-[#FF6B35] via-[#FFD700] to-[#00D4AA] bg-clip-text text-transparent">
            {siteConfig.hero.headline}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto sm:block hidden font-light leading-relaxed">
          {siteConfig.hero.subtext}
        </p>

        {/* Trust Badges - Horizontally Scrollable */}
        <div className="w-full overflow-x-auto">
          <div className="flex items-center gap-8 text-sm text-gray-300 min-w-max px-4">
            <div className="flex items-center space-x-3 whitespace-nowrap bg-[#151520] border border-[#FF6B35]/30 px-4 py-2 rounded-xl hover:border-[#FF6B35]/60 hover:bg-[#1A1A2E] transition-all cursor-pointer shadow-lg hover:shadow-[#FF6B35]/20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00D4AA] to-[#00A88A] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <span className="font-semibold text-white">Fast Payouts</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-[#151520] border border-[#FF6B35]/30 px-4 py-2 rounded-xl hover:border-[#FF6B35]/60 hover:bg-[#1A1A2E] transition-all cursor-pointer shadow-lg hover:shadow-[#FF6B35]/20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B35] to-[#FF8C42] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">🆕</span>
              </div>
              <span className="font-semibold text-white">New Casinos</span>
            </div>
            <div className="flex items-center space-x-3 whitespace-nowrap bg-[#151520] border border-[#FF6B35]/30 px-4 py-2 rounded-xl hover:border-[#FF6B35]/60 hover:bg-[#1A1A2E] transition-all cursor-pointer shadow-lg hover:shadow-[#FF6B35]/20">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-full flex items-center justify-center shadow-lg">
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

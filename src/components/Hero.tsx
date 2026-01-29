import { siteConfig } from '@/config/site';
import Image from 'next/image';

export default function Hero() {
  // Get current date for display
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long',
    year: 'numeric'
  });
  
  // Get month and year for title
  const monthYear = new Date().toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <section id="home" className="relative pt-8 pb-2 md:py-20 bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#0A0A0F] border-b border-[#8B5CF6]/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#06B6D4]/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Mobile: Compact Header */}
        <div className="md:hidden">
          {/* Title - Centered with Dynamic Date */}
          <div className="mb-6">
            <h1 className="text-center text-2xl md:text-3xl font-bold leading-tight text-white">
              Top Rated Casinos<br />UK {monthYear}
            </h1>
          </div>

          {/* Trust Signals - Bottom Row */}
          <div className="flex items-center justify-between gap-3">
            {/* 100% Safe */}
            <div className="flex items-center gap-1.5 text-[#8B5CF6] text-xs">
              <svg className="w-4 h-4 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-medium">100% Safe</span>
            </div>

            {/* Fast Payouts */}
            <div className="flex items-center gap-1.5 text-[#06B6D4] text-xs">
              <svg className="w-4 h-4 text-[#06B6D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Fast Payouts</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="bg-[#1A1A2E] border border-[#8B5CF6]/40 rounded px-2 py-1">
                <span className="text-[#8B5CF6] text-xs font-medium">{currentDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Full Hero */}
        <div className="hidden md:block">
          {/* Updated Date Badge */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-[#8B5CF6] font-semibold text-sm">Last Updated: {currentDate}</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block text-white mb-2">{siteConfig.hero.headline}</span>
              <span className="gradient-text block">
                Compare & Win Big
              </span>
            </h1>
            
            {/* Subtext */}
            {siteConfig.hero.subtext && (
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {siteConfig.hero.subtext}
              </p>
            )}

            {/* CTA Button */}
            <a
              href="#casinos"
              className="inline-block btn-primary text-lg px-8 py-4 rounded-xl"
            >
              {siteConfig.hero.cta}
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
            {/* UK Licensed */}
            <div className="flex items-center gap-2 bg-[#1A1A2E] border border-[#8B5CF6]/30 text-[#8B5CF6] font-semibold text-sm px-4 py-3 rounded-xl shadow-lg hover:border-[#8B5CF6]/50 transition-all">
              <svg className="w-5 h-5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
              </svg>
              <span>UK Licensed</span>
            </div>

            {/* Secured */}
            <div className="flex items-center gap-2 bg-[#1A1A2E] border border-[#06B6D4]/30 text-[#06B6D4] font-semibold text-sm px-4 py-3 rounded-xl shadow-lg hover:border-[#06B6D4]/50 transition-all">
              <svg className="w-5 h-5 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Secure</span>
            </div>

            {/* Fast Payouts */}
            <div className="flex items-center gap-2 bg-[#1A1A2E] border border-[#8B5CF6]/30 text-[#8B5CF6] font-semibold text-sm px-4 py-3 rounded-xl shadow-lg hover:border-[#8B5CF6]/50 transition-all">
              <svg className="w-5 h-5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
              </svg>
              <span>Fast Payouts</span>
            </div>

            {/* 24/7 Support */}
            <div className="flex items-center gap-2 bg-[#1A1A2E] border border-[#06B6D4]/30 text-[#06B6D4] font-semibold text-sm px-4 py-3 rounded-xl shadow-lg hover:border-[#06B6D4]/50 transition-all">
              <svg className="w-5 h-5 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

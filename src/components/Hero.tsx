import { siteConfig } from '@/config/site';

export default function Hero() {
  // Get current date
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    day: 'numeric', 
    month: 'long' 
  });

  return (
    <section id="home" className="relative py-4 md:py-6 bg-gradient-to-br from-[#0F0F23] via-[#1E1B4B] to-[#0F0F23] border-b border-[#8B5CF6]/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8B5CF6]/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#10B981]/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar - Updated Date */}
        <div className="flex items-center justify-center mb-3 text-xs">
          <div className="flex items-center gap-2 text-gray-400">
            <svg className="w-3 h-3 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">UPDATED {currentDate}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#10B981] to-[#8B5CF6]">
              {siteConfig.hero.headline}
            </span>
          </h1>
          
          {/* Optional Subtext - Hidden on Mobile */}
          {siteConfig.hero.subtext && (
            <p className="hidden md:block text-sm md:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
              {siteConfig.hero.subtext}
            </p>
          )}

          {/* Trust Badges - Horizontally Scrollable */}
          <div className={`w-full overflow-x-auto ${!siteConfig.hero.subtext ? 'mt-0' : ''}`}>
            <div className="flex items-center justify-center md:justify-center gap-2 md:gap-3 min-w-max px-4">
              {/* UK Licensed */}
              <div className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white font-bold text-xs md:text-sm px-3 md:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
                </svg>
                <span>UK LICENSED</span>
              </div>

              {/* Secured and Safe */}
              <div className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white font-bold text-xs md:text-sm px-3 md:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>SECURED AND SAFE</span>
              </div>

              {/* Fast Withdrawals */}
              <div className="bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white font-bold text-xs md:text-sm px-3 md:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
                <span>FAST WITHDRAWALS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

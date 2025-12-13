'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTrackingValue } from '@/utils/tracking';
import { track } from '@vercel/analytics';

export default function CasinoBrands() {
  const [trackingValue, setTrackingValue] = useState('');
  const [animatedCounts, setAnimatedCounts] = useState<{[key: number]: number}>({});

  useEffect(() => {
    const value = getTrackingValue();
    setTrackingValue(value);
    
    if (value) {
      console.log('📊 Using tracking value:', value);
    }
  }, []);

  // Animate player counts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCounts(prev => {
        const newCounts = {...prev};
        siteConfig.casinos.forEach((_, index) => {
          const baseCount = getVisitorCount(index);
          const variation = Math.floor(Math.random() * 21) - 10; // Random -10 to +10
          newCounts[index] = baseCount + variation;
        });
        return newCounts;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const processPlayLink = (link: string) => {
    if (!trackingValue) {
      return link;
    }
    
    let processedLink = link;
    const trackingParamNames = ['gclid', 'payload', 'clickid', 'afp', 'gcslid', 'visit_id', 'trackid', 'ref', 'subid'];
    
    for (const paramName of trackingParamNames) {
      const emptyParamPattern = new RegExp(`([&?])${paramName}=(?=&|$)`);
      if (emptyParamPattern.test(processedLink)) {
        if (processedLink.endsWith(`${paramName}=`)) {
          processedLink = processedLink + encodeURIComponent(trackingValue);
        } else {
          processedLink = processedLink.replace(emptyParamPattern, `$1${paramName}=${encodeURIComponent(trackingValue)}`);
        }
        console.log(`✅ Appended tracking value to ${paramName}:`, processedLink);
        return processedLink;
      }
    }
    
    const hasTrackingParam = trackingParamNames.some(param => processedLink.includes(`${param}=`));
    if (!hasTrackingParam) {
      const separator = processedLink.includes('?') ? '&' : '?';
      processedLink = `${processedLink}${separator}clickid=${encodeURIComponent(trackingValue)}`;
      console.log('Added clickid parameter:', processedLink);
    }
    
    return processedLink;
  };

  const getVisitorCount = (index: number) => {
    const counts = [1146, 668, 893, 766, 621, 543, 487, 432, 389, 356];
    return counts[index % counts.length];
  };

  const getBadge = (index: number) => {
    if (index === 0) return { text: 'TOP IN UK', color: 'from-[#FFD700] to-[#FFC929]', icon: 'star' };
    if (index === 1) return { text: 'POPULAR', color: 'from-[#B8C5D6] to-[#8899AA]', icon: 'flame' };
    if (index === 2) return { text: 'EXCLUSIVE', color: 'from-[#FFD700] to-[#FFC929]', icon: 'gift' };
    return null;
  };

  return (
    <section id="casinos" className="pt-6 pb-8 md:py-16 bg-[#0F1419] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD700] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC929] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Table Header - Desktop Only */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 mb-3 px-4">
          <div className="col-span-2 text-gray-400 text-xs font-semibold uppercase tracking-wider">Casino</div>
          <div className="col-span-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">Welcome Bonus</div>
          <div className="col-span-3 text-gray-400 text-xs font-semibold uppercase tracking-wider">Rating</div>
          <div className="col-span-3 text-gray-400 text-xs font-semibold uppercase tracking-wider">Play Now</div>
        </div>

        {/* Casino Cards */}
        <div className="space-y-5 md:space-y-3">
          {siteConfig.casinos.map((casino, index) => {
            const badge = getBadge(index);
            const baseVisitorCount = getVisitorCount(index);
            const visitorCount = animatedCounts[index] || baseVisitorCount;
            const rank = index + 1;
            const isLastBrand = index === siteConfig.casinos.length - 1;
            
            // Mobile: show all brands, Desktop: show only last brand
            const visibilityClass = isLastBrand ? '' : 'md:hidden';
            
            return (
              <div key={index} className={`relative group ${visibilityClass}`}>
                {/* Badge */}
                {badge && (
                  <div className="absolute -top-2 left-3 z-20">
                    <div className={`flex items-center gap-1 bg-gradient-to-r ${badge.color} text-gray-900 text-[9px] md:text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg`}>
                      {badge.icon === 'star' && (
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      )}
                      {badge.icon === 'flame' && (
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      )}
                      {badge.icon === 'gift' && (
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                          <path d="M9 11H3v6a2 2 0 002 2h4v-8zm2 0v8h4a2 2 0 002-2v-6h-6z" />
                        </svg>
                      )}
                      <span>{badge.text}</span>
                    </div>
                  </div>
                )}

                {/* Casino Card */}
                <div className="bg-[#1A2332] border border-[#FFD700]/20 rounded-xl md:rounded-lg overflow-hidden hover:border-[#FFD700]/50 hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300">
                  {/* Mobile Layout - Horizontal */}
                  <div className="md:hidden flex items-center gap-5 p-5">
                    {/* Left Section - Logo, Rating & Live Players Stacked */}
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      {/* Logo */}
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFC929]/20 p-2.5 border-2 border-[#FFD700]/30 flex-shrink-0">
                        <div className="relative w-full h-full">
                          <Image
                            src={`/casino-logos/${casino.logo}`}
                            alt={casino.name}
                            fill
                            className="object-contain rounded-full"
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>

                      {/* Live Players - Under Logo */}
                      <div className="flex items-center gap-1.5 text-white text-[10px]">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span>{visitorCount} Live</span>
                      </div>
                      
                      {/* Star Rating & Number - Under Live Players */}
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                              className={`text-xs ${
                                  star <= Math.round(casino.rating) 
                                  ? 'text-[#FFD700]' 
                                  : 'text-gray-600'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        <span className="text-[#FFD700] text-sm font-bold">{casino.rating}</span>
                      </div>
                    </div>

                    {/* Right Section - Bonus & CTA */}
                    <div className="flex-1 flex flex-col justify-center gap-4 min-w-0">
                      {/* Bonus */}
                      <div className="text-center">
                        <div className="text-white text-lg font-bold leading-tight">
                          {casino.bonus.split('\n')[0] || casino.bonus}
                        </div>
                        {casino.bonus.includes('\n') && (
                          <div className="text-white text-base leading-tight mt-1">
                            {casino.bonus.split('\n')[1]}
                          </div>
                        )}
                      </div>

                      {/* CTA Button */}
                      <a
                        href={processPlayLink(casino.playLink)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          track('casino_click', {
                            casino_name: casino.name,
                            casino_rating: casino.rating.toString(),
                            position: rank.toString(),
                            button_type: 'get_bonus'
                          });
                        }}
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl text-center text-base shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:scale-[1.02] transition-all duration-300"
                      >
                        PLAY NOW
                      </a>
                      
                      {/* Payment Icons */}
                      <div className="flex items-center gap-2 justify-center">
                        <div className="relative w-10 h-6 md:w-8 md:h-5">
                          <Image
                            src="/logos/Visa_Inc._logo.svg.png"
                            alt="VISA"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-10 h-6 md:w-8 md:h-5">
                          <Image
                            src="/logos/MasterCard_Logo.svg.png"
                            alt="Mastercard"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-10 h-6 md:w-8 md:h-5">
                          <Image
                            src="/logos/PayPal_Logo_Icon_2014.svg"
                            alt="PayPal"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout - Grid */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 p-4">
                    {/* Rank & Casino Info - Column 1 */}
                    <div className="col-span-2 flex items-center gap-3">
                      {/* Rank Number */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFC929] flex items-center justify-center text-[#1A2332] font-bold text-xl shadow-lg shadow-[#FFD700]/50">
                        {rank}
                      </div>
                      
                      {/* Logo - Bigger */}
                      <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFC929]/20 p-2 border border-[#FFD700]/30">
                        <div className="relative w-full h-full">
                          <Image
                            src={`/casino-logos/${casino.logo}`}
                            alt={casino.name}
                            fill
                            className="object-contain rounded-full"
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Welcome Bonus - Column 2 */}
                    <div className="col-span-4 flex flex-col justify-center">
                      <div className="text-[#FFD700] text-xs font-semibold uppercase mb-1">
                        Bonus
                      </div>
                      <div className="text-white text-base font-bold leading-tight">
                        {casino.bonus.split('\n')[0] || casino.bonus}
                      </div>
                      {casino.bonus.includes('\n') && (
                        <div className="text-white text-sm font-semibold leading-tight mt-0.5">
                          {casino.bonus.split('\n')[1]}
                        </div>
                      )}
                    </div>

                    {/* Rating - Column 3 */}
                    <div className="col-span-3 flex flex-col justify-center items-center">
                      <div className="flex items-center gap-0.5 mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`text-sm ${
                              star <= Math.round(casino.rating) 
                                ? 'text-[#FFD700]' 
                                : 'text-gray-600'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="text-[#FFD700] text-lg font-bold mb-2">{casino.rating}</div>
                      <div className="flex items-center gap-1.5 text-white text-xs">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span>{visitorCount} Live Players</span>
                      </div>
                    </div>

                    {/* CTA Button - Column 4 */}
                    <div className="col-span-3 flex flex-col justify-center">
                        <a
                          href={processPlayLink(casino.playLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            track('casino_click', {
                              casino_name: casino.name,
                              casino_rating: casino.rating.toString(),
                            position: rank.toString(),
                              button_type: 'get_bonus'
                            });
                          }}
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 px-4 rounded-lg text-center text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transform hover:scale-[1.02] transition-all duration-300"
                      >
                        PLAY NOW
                      </a>
                      
                      {/* Payment Methods */}
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <div className="relative w-10 h-6">
                          <Image
                            src="/logos/Visa_Inc._logo.svg.png"
                            alt="VISA"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-10 h-6">
                          <Image
                            src="/logos/MasterCard_Logo.svg.png"
                            alt="Mastercard"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="relative w-10 h-6">
                          <Image
                            src="/logos/PayPal_Logo_Icon_2014.svg"
                            alt="PayPal"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

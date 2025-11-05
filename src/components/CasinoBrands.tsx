'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTrackingValue } from '@/utils/tracking';
import { track } from '@vercel/analytics';

export default function CasinoBrands() {
  const [trackingValue, setTrackingValue] = useState('');

  useEffect(() => {
    // Get tracking value - checks URL first, then sessionStorage
    const value = getTrackingValue();
    setTrackingValue(value);
    
    // Debug: Log captured parameters (remove in production)
    if (value) {
      console.log('📊 Using tracking value:', value);
    }
  }, []);

  // Function to process play links with tracking parameters
  const processPlayLink = (link: string) => {
    if (!trackingValue) {
      return link; // No tracking value to append
    }
    
    let processedLink = link;
    
    // Common parameter names that might need the tracking value appended
    const trackingParamNames = ['gclid', 'payload', 'clickid', 'afp', 'gcslid', 'visit_id', 'trackid', 'ref', 'subid'];
    
    // Check each parameter name to see if it exists empty in the URL
    for (const paramName of trackingParamNames) {
      // Check if parameter exists with empty value: "param=" with nothing after (or just & after)
      // Match: "&param=" or "?param=" at end OR "&param=&" in middle
      const emptyParamPattern = new RegExp(`([&?])${paramName}=(?=&|$)`);
      if (emptyParamPattern.test(processedLink)) {
        // Replace the empty parameter with the tracking value
        if (processedLink.endsWith(`${paramName}=`)) {
          // At the end of URL
          processedLink = processedLink + encodeURIComponent(trackingValue);
        } else {
          // In the middle: "&param=&" becomes "&param=value&"
          processedLink = processedLink.replace(emptyParamPattern, `$1${paramName}=${encodeURIComponent(trackingValue)}`);
        }
        console.log(`✅ Appended tracking value to ${paramName}:`, processedLink);
        return processedLink;
      }
    }
    
    // If no empty parameter found, check if we should add clickid as default
    const hasTrackingParam = trackingParamNames.some(param => processedLink.includes(`${param}=`));
    if (!hasTrackingParam) {
      // Add clickid parameter if URL uses query string
      const separator = processedLink.includes('?') ? '&' : '?';
      processedLink = `${processedLink}${separator}clickid=${encodeURIComponent(trackingValue)}`;
      console.log('Added clickid parameter:', processedLink);
    }
    
    return processedLink;
  };

  // Generate random visitor count for demo purposes
  const getVisitorCount = (index: number) => {
    const counts = [866, 881, 973, 611, 208, 621, 290, 628, 662, 463];
    return counts[index % counts.length];
  };

  // Ribbon badge - only first casino gets EDITOR'S PICK
  const getRibbonType = (index: number) => {
    if (index === 0) return 'EDITOR\'S PICK';
    return null;
  };

  return (
    <section id="casinos" className="py-6 md:py-10 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-3 md:px-4">
        <div className="space-y-4 md:space-y-5">
          {siteConfig.casinos.map((casino, index) => {
            const ribbonType = getRibbonType(index);
            const visitorCount = getVisitorCount(index);
            const isLastBrand = index === siteConfig.casinos.length - 1;
            
            // Desktop: Only show last brand
            // Mobile: Only show non-last brands
            const visibilityClass = isLastBrand 
              ? 'hidden md:block' // Last brand only on desktop
              : 'block md:hidden'; // Other brands only on mobile

            return (
              <div key={index} className={`relative pt-5 ${visibilityClass}`}>
                {/* Small Badge Box */}
                {ribbonType && (
                  <div className="absolute -top-0 left-4 md:left-6 z-20">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-2 rounded-lg shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="uppercase">{ribbonType}</span>
                    </div>
                  </div>
                )}

                {/* Casino Card */}
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-cyan-400/30">
                  <div className="flex flex-row min-h-[200px] md:min-h-[280px]">
                    {/* Left Section - Purple/Pink Gradient with Angled Edge */}
                    <div 
                      className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-4 md:p-8 flex flex-col justify-between w-[40%] md:w-[40%]"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%)'
                      }}
                    >
                      {/* Casino Logo - Centered - Bigger */}
                      <div className="flex items-center justify-center mb-2 md:mb-4">
                        <div className="relative h-16 w-32 md:h-28 md:w-64">
                          <Image
                            src={`/casino-logos/${casino.logo}`}
                            alt={casino.name}
                            fill
                            className="object-contain filter drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Rating Section - Bottom - Smaller */}
                      <div className="flex items-end justify-center">
                        <div className="text-center">
                          <div className="text-3xl md:text-5xl font-bold text-white leading-none mb-1">{casino.rating}</div>
                          <div className="flex items-center justify-center gap-0.5 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`text-xs md:text-base ${
                                  star <= Math.round(casino.rating) 
                                    ? 'text-yellow-300' 
                                    : 'text-white/30'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-center gap-1 text-white text-xs font-semibold">
                            <span>{visitorCount}</span>
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Dark Navy/Blue */}
                    <div className="relative bg-gradient-to-br from-[#1e1b4b] to-[#312e81] p-4 md:p-8 flex flex-col justify-center w-[60%] md:w-[60%]">
                      {/* Bonus Offer Text - Centered */}
                      <div className="text-center flex-1 flex flex-col justify-center mb-3 md:mb-4">
                        <div className="text-white text-xl md:text-4xl font-bold mb-1 md:mb-3 leading-tight">
                          {casino.bonus.split('\n')[0] || casino.bonus}
                        </div>
                        {casino.bonus.includes('\n') && (
                          <div className="text-cyan-300 text-lg md:text-3xl font-bold leading-tight">
                            {casino.bonus.split('\n')[1]}
                          </div>
                        )}
                      </div>

                      {/* GET BONUS Button - Elegant Gold */}
                      <div>
                        <a
                          href={processPlayLink(casino.playLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            track('casino_click', {
                              casino_name: casino.name,
                              casino_rating: casino.rating.toString(),
                              position: (index + 1).toString(),
                              button_type: 'get_bonus'
                            });
                          }}
                          className="block w-full bg-gradient-to-r from-[#D4AF37] via-[#F4E5B1] to-[#D4AF37] text-gray-900 font-bold py-2.5 md:py-4 px-4 md:px-8 rounded-xl md:rounded-2xl text-center text-sm md:text-lg hover:from-[#E5C158] hover:via-[#F9F0C9] hover:to-[#E5C158] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 border border-[#B8941F]"
                        >
                          GET BONUS
                        </a>
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

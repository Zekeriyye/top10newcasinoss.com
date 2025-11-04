'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTrackingValue } from '@/utils/tracking';

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
  return (
    <section id="casinos" className="py-12 md:py-20 bg-[#0F172A] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="casino-grid">
          {siteConfig.casinos.map((casino, index) => {
            // Only show badge on first casino
            const showBadge = index === 0;

            return (
              <div key={index} className="relative mb-6">
                {/* Top Badge - Only on first casino */}
                {showBadge && (
                  <div className="absolute -top-3 left-4 z-10">
                    <div className="bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Casino Card with Two Sections */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row h-full min-h-[200px]">
                    {/* Left Section - Purple/Pink Gradient */}
                    <div className="relative bg-gradient-to-b from-purple-600 via-purple-500 to-pink-500 p-6 md:p-8 flex items-center justify-center md:w-2/5" style={{clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 50%, calc(100% - 30px) 100%, 0 100%)'}}>

                      {/* Casino Logo/Name - Big */}
                      <div className="relative z-20 w-full">
                        <div className="relative h-32 md:h-40 w-full">
                          <Image
                            src={`/casino-logos/${casino.logo}`}
                            alt={casino.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Dark Blue/Purple */}
                    <div className="relative bg-[#1E1B4B] p-6 md:p-8 flex flex-col justify-between md:w-3/5">
                      {/* Top Row: Rating Section on Right */}
                      <div className="flex items-start justify-between mb-6">
                        {/* Bonus Offer Text */}
                        <div className="flex-1">
                          <div className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">
                            {casino.bonus.split(' ').slice(0, 4).join(' ')}
                          </div>
                          {casino.bonus.split(' ').slice(4).length > 0 && (
                            <div className="text-cyan-400 text-lg md:text-xl font-semibold leading-tight">
                              {casino.bonus.split(' ').slice(4).join(' ')}
                            </div>
                          )}
                        </div>

                        {/* Rating Section - Right Side */}
                        <div className="flex items-end gap-3 ml-4">
                          <div className="text-5xl md:text-6xl font-bold text-white">{casino.rating}</div>
                          <div className="flex flex-col justify-end pb-2">
                            <div className="flex items-center gap-1 mb-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                  key={star}
                                  className={`text-base md:text-lg ${
                                    star <= Math.round(casino.rating) 
                                      ? 'text-yellow-400' 
                                      : 'text-gray-300/50'
                                  }`}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center gap-1 text-white text-xs md:text-sm">
                              <span>1300</span>
                              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM10 11a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* GET BONUS Button - Elegant Gold */}
                      <div className="mt-auto">
                        <a
                          href={processPlayLink(casino.playLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFD700] text-black font-bold py-4 px-8 rounded-xl text-center hover:from-[#C9A227] hover:via-[#E6C84F] hover:to-[#F4D03F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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

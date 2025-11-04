'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTrackingValue } from '@/utils/tracking';
import { track } from '@vercel/analytics';

export default function CasinoBrands() {
  const [trackingValue, setTrackingValue] = useState('');
  const [expandedTerms, setExpandedTerms] = useState<number | null>(null);

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

  // Ribbon badge types
  const ribbonTypes = ['EDITOR\'S PICK', 'TRENDING!', 'EXCLUSIVE OFFER', 'SPECIAL', null];
  const getRibbonType = (index: number) => {
    if (index === 0) return 'EDITOR\'S PICK';
    if (index === 1) return 'TRENDING!';
    if (index === 4) return 'EXCLUSIVE OFFER';
    if (index === 6) return 'SPECIAL';
    return null;
  };

  return (
    <section id="casinos" className="py-12 md:py-20 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {siteConfig.casinos.map((casino, index) => {
            const ribbonType = getRibbonType(index);
            const visitorCount = getVisitorCount(index);
            const isExpanded = expandedTerms === index;

            return (
              <div key={index} className="relative">
                {/* Circular Badge Icon */}
                {ribbonType && (
                  <div className="absolute -top-4 -left-4 z-20">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl ${
                      ribbonType === 'EDITOR\'S PICK' 
                        ? 'bg-gradient-to-br from-pink-500 to-pink-600' 
                        : ribbonType === 'TRENDING!'
                        ? 'bg-gradient-to-br from-red-500 to-orange-600'
                        : ribbonType === 'EXCLUSIVE OFFER'
                        ? 'bg-gradient-to-br from-purple-600 to-purple-700'
                        : 'bg-gradient-to-br from-blue-500 to-blue-600'
                    }`}>
                      <div className="text-center">
                        {ribbonType === 'EDITOR\'S PICK' && (
                          <svg className="w-8 h-8 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                        {ribbonType === 'TRENDING!' && (
                          <svg className="w-8 h-8 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className={`mt-1 text-center ${
                      ribbonType === 'EDITOR\'S PICK' 
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600' 
                        : ribbonType === 'TRENDING!'
                        ? 'bg-gradient-to-r from-red-500 to-orange-600'
                        : ribbonType === 'EXCLUSIVE OFFER'
                        ? 'bg-gradient-to-r from-purple-600 to-purple-700'
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    } text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg whitespace-nowrap`}>
                      {ribbonType}
                    </div>
                  </div>
                )}

                {/* Casino Card */}
                <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-cyan-400/30">
                  <div className="flex flex-col md:flex-row min-h-[280px]">
                    {/* Left Section - Purple/Pink Gradient with Angled Edge */}
                    <div 
                      className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-8 flex flex-col justify-between md:w-[40%]"
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0 100%)'
                      }}
                    >
                      {/* Casino Logo - Centered */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="relative h-20 w-48 md:h-24 md:w-56">
                          <Image
                            src={`/casino-logos/${casino.logo}`}
                            alt={casino.name}
                            fill
                            className="object-contain filter drop-shadow-2xl"
                          />
                        </div>
                      </div>

                      {/* Rating Section - Bottom */}
                      <div className="flex items-end justify-center gap-4">
                        <div className="text-center">
                          <div className="text-6xl md:text-7xl font-bold text-white leading-none mb-2">{casino.rating}</div>
                          <div className="flex items-center justify-center gap-0.5 mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`text-xl ${
                                  star <= Math.round(casino.rating) 
                                    ? 'text-yellow-300' 
                                    : 'text-white/30'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-center gap-1 text-white text-sm font-semibold">
                            <span>{visitorCount}</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Dark Navy/Blue */}
                    <div className="relative bg-gradient-to-br from-[#1e1b4b] to-[#312e81] p-8 flex flex-col justify-between md:w-[60%]">
                      {/* Bonus Offer Text */}
                      <div className="text-center mb-6">
                        <div className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight">
                          {casino.bonus.split('\n')[0] || casino.bonus}
                        </div>
                        {casino.bonus.includes('\n') && (
                          <div className="text-cyan-300 text-xl md:text-2xl font-bold leading-tight">
                            {casino.bonus.split('\n')[1]}
                          </div>
                        )}
                      </div>

                      {/* GET BONUS Button */}
                      <div className="mt-auto">
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
                          className="block w-full bg-gradient-to-r from-purple-600 via-pink-500 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl text-center text-lg hover:from-purple-500 hover:via-pink-400 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                        >
                          GET BONUS
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions - Bottom Dark Section */}
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4 border-t border-gray-700">
                    <div className="text-xs text-gray-300 leading-relaxed text-center">
                      {isExpanded ? (
                        <>
                          18+ New customers only. Wager £20 or more on {casino.name} within 14 days of sign-up. Get 100 Free Spins to use on selected games, valued at 10p and valid for 7 days. T&Cs apply. BeGambleAware.org
                        </>
                      ) : (
                        <>
                          18+ New customers only. Wager £20 or more on {casino.name} within 14 days of sign-up. Get 100 Free Spins to use on selected games, valued at 10p and valid for 7 days. T&Cs apply. BeGambleAware.org
                        </>
                      )}
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

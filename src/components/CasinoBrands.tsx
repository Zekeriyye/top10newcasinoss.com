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
    <section id="casinos" className="py-12 md:py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {siteConfig.casinos.map((casino, index) => {
            const ribbonType = getRibbonType(index);
            const visitorCount = getVisitorCount(index);
            const isExpanded = expandedTerms === index;

            return (
              <div key={index} className="relative">
                {/* Ribbon Badge */}
                {ribbonType && (
                  <div className="absolute -top-0 -left-0 z-20">
                    <div className={`relative ${
                      ribbonType === 'EDITOR\'S PICK' 
                        ? 'bg-gradient-to-br from-yellow-500 to-amber-600' 
                        : ribbonType === 'TRENDING!'
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                        : ribbonType === 'EXCLUSIVE OFFER'
                        ? 'bg-gradient-to-br from-purple-600 to-purple-700'
                        : 'bg-gradient-to-br from-red-500 to-red-600'
                    } text-white text-xs font-bold px-4 py-2 shadow-lg`}
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                    }}>
                      <div className="flex items-center gap-1">
                        {ribbonType === 'EDITOR\'S PICK' && (
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                        {ribbonType}
                      </div>
                    </div>
                  </div>
                )}

                {/* Casino Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Top Section - Casino Logo and Bonus */}
                  <div className="p-6 sm:p-8 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      {/* Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative h-16 w-40 sm:h-20 sm:w-48">
                          <Image
                            src={`/casino-logos/${casino.logo}`}
                            alt={casino.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      {/* Bonus Offer */}
                      <div className="flex-grow text-center md:text-left">
                        <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                          {casino.bonus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Preview Section */}
                  <div className="bg-gray-50 px-6 sm:px-8 py-4 border-b border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="font-semibold text-gray-700">Quick Preview</span>
                    </div>
                  </div>

                  {/* Stats and CTA Section */}
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      {/* Rating and Visitors */}
                      <div className="flex items-center gap-8">
                        {/* Rating */}
                        <div className="text-center">
                          <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600">
                            {casino.rating}
                          </div>
                          <div className="flex items-center justify-center gap-0.5 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`text-lg ${
                                  star <= Math.round(casino.rating) 
                                    ? 'text-yellow-400' 
                                    : 'text-gray-300'
                                }`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Visitors */}
                        <div className="text-sm text-gray-600">
                          <span className="font-bold text-gray-900">{visitorCount}</span> People visited{' '}
                          <span className="font-semibold text-gray-800">{casino.name}</span> today
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
                          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-lg text-center hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
                        >
                          GET BONUS
                        </a>
                        <a
                          href={processPlayLink(casino.playLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => {
                            track('casino_click', {
                              casino_name: casino.name,
                              casino_rating: casino.rating.toString(),
                              position: (index + 1).toString(),
                              button_type: 'visit_site'
                            });
                          }}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg text-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
                        >
                          visit {casino.name} &gt;&gt;
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="px-6 sm:px-8 pb-6">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <div className="text-xs text-gray-600 leading-relaxed">
                        {isExpanded ? (
                          <>
                            18+ New customers only. Wagering requirements apply. Maximum bonus 
                            amount and withdrawal limits may apply. Please read full terms and 
                            conditions on the casino website before playing. Deposit methods 
                            exclusions may apply. BeGambleAware.org
                          </>
                        ) : (
                          <>
                            18+ New customers only. Wagering requirements apply...
                          </>
                        )}
                        <button
                          onClick={() => setExpandedTerms(isExpanded ? null : index)}
                          className="text-blue-600 hover:text-blue-700 font-semibold ml-1 transition-colors"
                        >
                          {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
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

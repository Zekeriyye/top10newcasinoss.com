'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { getTrackingValue } from '@/utils/tracking';
import { track } from '@vercel/analytics';

export default function CasinoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [trackingValue, setTrackingValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const value = getTrackingValue();
    setTrackingValue(value);
    
    // Detect if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
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
        return processedLink;
      }
    }
    
    const hasTrackingParam = trackingParamNames.some(param => processedLink.includes(`${param}=`));
    if (!hasTrackingParam) {
      const separator = processedLink.includes('?') ? '&' : '?';
      processedLink = `${processedLink}${separator}clickid=${encodeURIComponent(trackingValue)}`;
    }
    
    return processedLink;
  };

  if (!isVisible || siteConfig.casinos.length === 0) {
    return null;
  }

  // Mobile: show first casino, Desktop: show last casino
  const casino = isMobile ? siteConfig.casinos[0] : siteConfig.casinos[siteConfig.casinos.length - 1];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" onClick={() => setIsVisible(false)}></div>
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative bg-[#1A1A2E] border-2 border-[#8B5CF6] rounded-2xl shadow-2xl shadow-[#8B5CF6]/30 max-w-md w-full overflow-hidden">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white hover:text-[#8B5CF6] transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Casino Logo Section */}
          <div className="bg-gradient-to-br from-[#1A1A2E] to-[#0A0A0F] border-b-2 border-[#8B5CF6] p-8 flex items-center justify-center">
            <div className="relative w-48 h-32">
              <Image
                src={`/casino-logos/${casino.logo}`}
                alt={casino.name}
                fill
                className="object-contain filter drop-shadow-2xl"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Bonus Content */}
          <div className="p-8 text-center">
            {/* BONUS Label */}
            <div className="text-white text-sm font-semibold uppercase mb-3 tracking-wider">
              BONUS
            </div>

            {/* Bonus Amount */}
            <div className="text-emerald-400 text-2xl font-bold mb-2">
              {casino.bonus.split('\n')[0] || casino.bonus}
            </div>

            {/* Secondary Bonus Text */}
            {casino.bonus.includes('\n') && (
              <div className="text-white text-lg font-semibold mb-6">
                {casino.bonus.split('\n')[1]}
              </div>
            )}

            {/* Play Now Button */}
            <a
              href={processPlayLink(casino.playLink)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                track('casino_click', {
                  casino_name: casino.name,
                  casino_rating: casino.rating.toString(),
                  position: 'popup',
                  button_type: 'popup_bonus'
                });
                setIsVisible(false);
              }}
              className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 transform hover:scale-105 transition-all duration-300"
            >
              PLAY NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

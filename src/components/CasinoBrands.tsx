'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CasinoBrands() {
  const [gclid, setGclid] = useState('');

  useEffect(() => {
    // Get GCLID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gclidValue = urlParams.get('gclid') || '';
    setGclid(gclidValue);
  }, []);

  // Function to replace {gclid} placeholder in URLs
  const processPlayLink = (link: string) => {
    return link.replace('{gclid}', gclid);
  };
  return (
    <section id="casinos" className="py-12 md:py-20 bg-[#0A0A0F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="casino-grid">
          {siteConfig.casinos.map((casino, index) => {
            // Determine tag based on position
            const getTag = (index: number) => {
              if (index === 0) return { text: "MOST POPULAR", color: "bg-orange-500" };
              if (index === 1) return { text: "RUNNER UP", color: "bg-orange-500" };
              if (index === 2) return { text: "HOT", color: "bg-orange-500" };
              return { text: "MOST POPULAR", color: "bg-orange-500" };
            };

            const tag = getTag(index);

            return (
              <div key={index} className="card hover:transform hover:scale-[1.01] transition-all duration-300 group relative flex flex-col md:flex-row w-full">
                {/* Top Badge */}
                <div className="absolute -top-2 -left-2 z-10">
                  <div className={`${tag.color} text-white text-sm font-bold px-4 py-2 rounded-md shadow-lg`}>
                    {tag.text}
                  </div>
                </div>

                <div className="p-6 pt-8 flex flex-col md:flex-row items-center md:items-center w-full gap-6 md:gap-8">
                  {/* Left Side - Logo */}
                  <div className="flex-shrink-0 w-full md:w-48 flex justify-center md:justify-start">
                    <div className="relative w-full md:w-full h-24 md:h-32">
                      <Image
                        src={`/casino-logos/${casino.logo}`}
                        alt={casino.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Middle - Rating Section */}
                  <div className="flex flex-col items-center flex-shrink-0 w-full md:w-32">
                    <div className="flex items-center space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-xl ${
                            star <= Math.round(casino.rating) 
                              ? 'text-yellow-400' 
                              : 'text-gray-600'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="text-3xl font-bold text-yellow-400 mb-1">{casino.rating}</div>
                    <div className="text-sm text-gray-400">Reviews (1300)</div>
                  </div>

                  {/* Center - Bonus Deal Section */}
                  <div className="flex-grow text-center md:text-left w-full md:w-auto">
                    <div className="text-sm text-gray-400 mb-2">Bonus Deal</div>
                    <div className="text-lg text-cyan-400 font-bold leading-tight">
                      {casino.bonus}
                    </div>
                  </div>

                  {/* Right Side - Action Button */}
                  <div className="flex-shrink-0 w-full md:w-auto">
                    <a
                      href={processPlayLink(casino.playLink)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-yellow-500 text-white font-bold py-4 px-8 rounded-lg text-center hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap w-full md:w-auto"
                    >
                      GET BONUS
                    </a>
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

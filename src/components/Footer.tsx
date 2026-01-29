import { siteConfig } from '@/config/site';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#8B5CF6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo and Branding */}
        <div className="py-8 border-b border-[#8B5CF6]/30">
          <div className="flex items-center mb-4">
            {/* Website Logo */}
            <div className="relative w-56 h-14">
              <Image
                src="/logos/premiumcasinos-logo.svg"
                alt={siteConfig.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-[#CBD5E1] text-sm max-w-2xl leading-relaxed">
            Your trusted guide to the UK's finest licensed online casinos. We provide unbiased reviews, comprehensive comparisons, and exclusive bonuses to help you find the perfect casino experience.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pages */}
          <div>
            <h3 className="text-[#8B5CF6] font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-[#CBD5E1] hover:text-[#8B5CF6] text-sm transition-colors">Home</a></li>
              <li><a href="/about" className="text-[#CBD5E1] hover:text-[#8B5CF6] text-sm transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-[#CBD5E1] hover:text-[#8B5CF6] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[#8B5CF6] font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-[#CBD5E1] hover:text-[#8B5CF6] text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-[#CBD5E1] hover:text-[#8B5CF6] text-sm transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-[#8B5CF6] font-bold text-lg mb-4">Responsible Gaming</h3>
            
            {/* BeGambleAware Logo */}
            <div className="mb-4">
              <a 
                href="https://www.begambleaware.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity inline-block"
              >
                <div className="relative w-48 h-16">
                  <Image
                    src="/logos/responsible-gambling/Gamble-Aware.png"
                    alt="BeGambleAware - Gambling Support"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            {/* GamCare Logo */}
            <div className="mb-4">
              <a 
                href="https://www.gamcare.org.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity inline-block"
              >
                <div className="relative w-48 h-16">
                  <Image
                    src="/logos/responsible-gambling/Gamble-Care-Logo-png.webp"
                    alt="GamCare - Gambling Support Starts Here"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-gray-500 text-xs leading-relaxed">
              Always gamble responsibly. Gambling can be addictive. If you need help, please contact GamCare or BeGambleAware.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#8B5CF6]/30 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="mt-1">18+ | BeGambleAware.org | Gambling can be addictive. Please play responsibly.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

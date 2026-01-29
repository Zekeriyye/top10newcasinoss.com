// Casino brand type definition
export interface CasinoBrand {
  name: string;
  logo: string;
  bonus: string;
  rating: number;
  playLink: string;
}

export const siteConfig = {
  // Basic site information
  name: "Premium Casinos UK",
  description: "Discover the UK's most trusted online casinos. Compare top-rated platforms, exclusive bonuses, and premium gaming experiences all in one place.",
  url: "https://premiumcasinos.uk",
  
  // Brand colors - modern purple and cyan design
  colors: {
    primary: "#8B5CF6",    // Vibrant Purple - premium & excitement
    secondary: "#06B6D4",  // Cyan - modern & trust
    accent: "#A78BFA",     // Light Purple - luxury & rewards
    background: "#0A0A0F", // Deep black-purple background
    surface: "#1A1A2E",   // Dark purple surface
    text: "#FFFFFF",       // Pure white text
    textSecondary: "#CBD5E1", // Light slate gray
    purple: "#8B5CF6",    // Primary purple accent
    cyan: "#06B6D4",       // Primary cyan accent
  },
  
  // Hero section content
  hero: {
    headline: "Top UK Casino Destinations",
    subtext: "Explore hand-selected UK casinos featuring generous welcome bonuses, extensive game libraries, and rapid withdrawal processing. Start your journey today.",
    cta: "View Casino Offers",
  },
  
  // Casino brands data
  casinos: [
    // {
    //   name: "BetNinja",
    //   logo: "BetNinja.png", // Change this filename to switch logos
    //   bonus: "£1000 + 100 FS",
    //   rating: 10.0,
    //   playLink: "https://tidgw.com/?a=274&oc=3267&c=8639&s3=BetNinja-CXUK01ZZ&s2="
    // },
    // {
    //   name: "SlotExpress",
    //   logo: "SlotExpress-Casino.webp", // Change this filename to switch logos
    //   bonus: "Up to £1,000 + 200 FS",
    //   rating: 9.8,
    //   playLink: "https://record.slotexpressaffiliates.com/_XUdgfahaGge2bnhOaaLAUmNd7ZgqdRLk/4/?pg=2&s2s.req_id=SlotExpress-CXUK01ZZ&payload="
    // },
    // {
    //   name: "30Bet",
    //   logo: "30Bet.gif", // Change this filename to switch logos
    //   bonus: "Up to £100 + 50 FS",
    //   rating: 9.6,
    //   playLink: "https://record.betgroup.partners/_YnRh4Sd1bK-RpNYGCjuhmmNd7ZgqdRLk/1/?pg=3&s2s.req_id=30BET-CXUK01ZZ&payload="
    // },
    // {
    //   name: "Superspins",
    //   logo: "super spin (1).svg", // Change this filename to switch logos
    //   bonus: "725% up to £6250 + 425 FS",
    //   rating: 9.4,
    //   playLink: "https://superspins777.net/dhpkgcx7q?subid=Superspins-CXUK01ZZ&visit_id="
    // },
    // {
    //   name: "RollySpin",
    //   logo: "rollyspins.svg", // Change this filename to switch logos
    //   bonus: "425% up to £4250 + 425 FS",
    //   rating: 9.2,
    //   playLink: "https://rollyspin19.net/d8hyrrn6u?subid=RollySpin-CXUK01ZZ&visit_id="
    // },
    
    // {
    //   name: "WinOlympia",
    //   logo: "Winolimpia.png", // Change this filename to switch logos
    //   bonus: "425% up to £4250 + 425 FS",
    //   rating: 9.0,
    //   playLink: "https://tokenaffstracker.com/j5scxt5kf?subid=WinOlympia-CXUK01ZZ&visit_id="
    // },
    // {
    //   name: "Lizaro",
    //   logo: "lizaro.webp", // Change this filename to switch logos
    //   bonus: "250% up to £2,550 + 350 FS + 1 Bonus Crab",
    //   rating: 8.6,
    //   playLink: "https://bestcpa.online/click?o=184&a=36&sub_id1=Lizaro-CXUK01ZZ&aff_click_id="
    // },
   {
      name: "Karamba",
      logo: "Logo-Karamba.svg",
      bonus: "100% UP TO £250 + 250 FS",
      rating: 8.0,
      playLink: "https://go.karambaaffiliates.com/visit/?bta=40838&nci=6499&utm_campaign=Karamba-CXUK01ZZ&afp="
    }
  ],

  
  
  // Features section
  features: {
    title: "What Sets Us Apart",
    subtitle: "Your trusted partner in finding exceptional casino experiences",
    items: [
      {
        icon: "🎯",
        title: "Rigorous Selection Process",
        description: "Each platform undergoes comprehensive evaluation focusing on security protocols, game diversity, and user experience quality"
      },
      {
        icon: "⚡",
        title: "Quick Side-by-Side Analysis",
        description: "Instantly evaluate welcome packages, game selections, and key features across multiple platforms simultaneously"
      },
      {
        icon: "🔒",
        title: "Fully Regulated Platforms",
        description: "We exclusively showcase casinos operating under valid UK Gambling Commission licenses"
      },
      {
        icon: "💎",
        title: "Special Promotional Access",
        description: "Unlock unique sign-up incentives and limited-time deals unavailable through standard channels"
      }
    ]
  },
  
  // Trust signals
  trustSignals: {
    title: "Trusted by Tens of Thousands",
    subtitle: "We prioritize your security and gaming satisfaction above all else",
    stats: [
      { value: "75K+", label: "Active Members" },
      { value: "100%", label: "Regulated Sites" },
      { value: "24/7", label: "Customer Help" },
      { value: "4.8★", label: "User Rating" }
    ]
  },
  
  // Contact information
  contact: {
    email: "info@premiumcasinos.uk"
  }
};

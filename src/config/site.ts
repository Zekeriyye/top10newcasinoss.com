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
  description: "Your ultimate guide to the best UK-licensed online casinos. Compare bonuses, games, and features to find your perfect casino match.",
  url: "https://premiumcasinos.uk",
  
  // Brand colors - sophisticated navy and gold design
  colors: {
    primary: "#FFD700",    // Bright Gold - premium & wealth
    secondary: "#1A2332",  // Deep Navy - sophisticated & trust
    accent: "#FFC929",     // Vibrant Gold - luxury & rewards
    background: "#0F1419", // Deep navy-black background
    surface: "#1A2332",   // Dark navy surface
    text: "#FFFFFF",       // Pure white text
    textSecondary: "#B8C5D6", // Light blue-gray
    gold: "#FFD700",       // Bright gold accent
    navy: "#1A2332",       // Deep navy
  },
  
  // Hero section content
  hero: {
    headline: "Best New Casinos UK",
    subtext: "We've handpicked the UK's finest licensed casinos, each offering exceptional bonuses, premium games, and lightning-fast payouts. Find your perfect match today.",
    cta: "Explore Top Casinos",
  },
  
  // Casino brands data
  casinos: [
    {
      name: "BetNinja",
      logo: "BetNinja.png", // Change this filename to switch logos
      bonus: "£1000 + 100 FS",
      rating: 10.0,
      playLink: "https://tidgw.com/?a=274&oc=3267&c=8639&s3=BetNinja-CXUK01ZZ&s2="
    },
    {
      name: "SlotExpress",
      logo: "SlotExpress-Casino.webp", // Change this filename to switch logos
      bonus: "Up to £1,000 + 200 FS",
      rating: 9.8,
      playLink: "https://record.slotexpressaffiliates.com/_XUdgfahaGge2bnhOaaLAUmNd7ZgqdRLk/4/?pg=2&s2s.req_id=SlotExpress-CXUK01ZZ&payload="
    },
    {
      name: "30Bet",
      logo: "30Bet.gif", // Change this filename to switch logos
      bonus: "Up to £100 + 50 FS",
      rating: 9.6,
      playLink: "https://record.betgroup.partners/_YnRh4Sd1bK-RpNYGCjuhmmNd7ZgqdRLk/1/?pg=3&s2s.req_id=30BET-CXUK01ZZ&payload="
    },
    {
      name: "Superspins",
      logo: "super spin (1).svg", // Change this filename to switch logos
      bonus: "725% up to £6250 + 425 FS",
      rating: 9.4,
      playLink: "https://superspins777.net/dhpkgcx7q?subid=Superspins-CXUK01ZZ&visit_id="
    },
    {
      name: "RollySpin",
      logo: "rollyspins.svg", // Change this filename to switch logos
      bonus: "425% up to £4250 + 425 FS",
      rating: 9.2,
      playLink: "https://rollyspin19.net/d8hyrrn6u?subid=RollySpin-CXUK01ZZ&visit_id="
    },
    
    {
      name: "WinOlympia",
      logo: "Winolimpia.png", // Change this filename to switch logos
      bonus: "425% up to £4250 + 425 FS",
      rating: 9.0,
      playLink: "https://tokenaffstracker.com/j5scxt5kf?subid=WinOlympia-CXUK01ZZ&visit_id="
    },
   
    {
      name: "WinBeast",
      logo: "winbeast.svg", // Change this filename to switch logos
      bonus: "Welcome Pack €/£3000\n300 FS",
      rating: 8.8,
      playLink: "https://beast-net.co/aue1i1msc?subid=WinBeast-CXUK01&visit_id="
    }
    ,
    
    {
      name: "Lizaro",
      logo: "lizaro.webp", // Change this filename to switch logos
      bonus: "250% up to £2,550 + 350 FS + 1 Bonus Crab",
      rating: 8.6,
      playLink: "https://bestcpa.online/click?o=184&a=36&sub_id1=Lizaro-CXUK01ZZ&aff_click_id="
    },
   {
      name: "GrandIvy",
      logo: "grandivy.webp",
      bonus: "Bet £20\nGet 100 Free Spins",
      rating: 8.0,
      playLink: "https://media1.casimbaaff.com/redirect.aspx?pid=16629&lpid=224&bid=1633&subid=GrandIvy-CXUK01&clickid="
    }
  ],

  
  
  // Features section
  features: {
    title: "Why Players Choose Us",
    subtitle: "We make finding your perfect casino effortless",
    items: [
      {
        icon: "🎯",
        title: "Expertly Curated",
        description: "Every casino is thoroughly vetted for quality, security, and player satisfaction"
      },
      {
        icon: "⚡",
        title: "Instant Comparisons",
        description: "Compare bonuses, games, and features side-by-side in seconds"
      },
      {
        icon: "🔒",
        title: "100% Licensed",
        description: "Only UK Gambling Commission licensed casinos make our list"
      },
      {
        icon: "💎",
        title: "Exclusive Bonuses",
        description: "Access special welcome offers and promotions not available elsewhere"
      }
    ]
  },
  
  // Trust signals
  trustSignals: {
    title: "Trusted by Thousands of UK Players",
    subtitle: "Your safety and satisfaction are our top priorities",
    stats: [
      { value: "50K+", label: "Happy Players" },
      { value: "100%", label: "Licensed Casinos" },
      { value: "24/7", label: "Support Available" },
      { value: "4.9★", label: "Average Rating" }
    ]
  },
  
  // Contact information
  contact: {
    email: "info@premiumcasinos.uk"
  }
};

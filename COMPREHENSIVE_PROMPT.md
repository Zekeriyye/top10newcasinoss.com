# Professional Landing Page Template - Development Prompt

## 🎯 Project Overview
Create a professional comparison/affiliate landing page using Next.js 14 with TypeScript, Tailwind CSS, and modern web development practices. The site should be conversion-optimized, mobile-responsive, and legally compliant for your target market.

## 🛠️ Technical Stack

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.0
- **Deployment**: Vercel
- **Version Control**: Git with GitHub

### Key Dependencies
```json
{
  "next": "14.0.0",
  "react": "18.0.0",
  "typescript": "5.0.0",
  "tailwindcss": "3.4.0",
  "@types/node": "20.0.0",
  "@types/react": "18.0.0",
  "@types/react-dom": "18.0.0"
}
```

## 🎨 Design Requirements

### Color Scheme (Customize for your brand)
- **Primary**: [Your brand color]
- **Secondary**: [Complementary color]
- **Background**: [Main background color]
- **Surface**: [Card/component background]
- **Text**: [Primary text color]
- **Text Secondary**: [Secondary text color]

### Visual Style
- **Theme**: [Choose: Dark, Light, or Mixed]
- **Typography**: Clean, modern fonts
- **Layout**: Card-based design with hover effects
- **Responsive**: Mobile-first approach
- **Animations**: Subtle hover and transition effects

## 📱 Component Structure

### 1. Header Component
**File**: `src/components/Header.tsx`
**Features**:
- Responsive navigation with burger menu for mobile
- Logo and site name branding
- Navigation links (customize for your needs)
- Sticky positioning with backdrop blur
- Auto-close mobile menu on link click

**Navigation Structure**:
- Main pages (Home, About, Contact)
- Legal pages (Privacy Policy, Terms & Conditions)
- Industry-specific pages (customize as needed)

### 2. Hero Section
**File**: `src/components/Hero.tsx`
**Features**:
- Compelling headline and subtext
- Trust badges/keywords (horizontally scrollable on mobile)
- Gradient or solid background
- Responsive typography

**Trust Elements** (customize for your industry):
- Key selling points
- Trust indicators
- Industry-specific benefits
- Call-to-action elements

### 3. Product/Service Cards Section
**File**: `src/components/ProductCards.tsx` (rename as needed)
**Features**:
- Grid layout of product/service cards
- Large, prominent logos/images
- Rating system (stars, numbers, or custom)
- Key information/offers with labels
- Multiple clickable areas (logo, description, CTA button)
- Tracking integration (GCLID, UTM, etc.)
- Hover effects and transitions

**Card Structure**:
- Product/service logo (clickable)
- Rating display
- Key information/offers (clickable)
- Call-to-action button

### 4. Trust Signals
**File**: `src/components/TrustSignals.tsx`
**Features**:
- 4-column grid on desktop
- Trust indicators with icons
- Professional messaging

**Trust Points** (customize for your industry):
- Credentials/Certifications
- Quality indicators
- Security/Privacy features
- Support/Service guarantees

### 5. Why Choose Us/About Section
**File**: `src/components/WhyChooseUs.tsx`
**Features**:
- Two-column layout
- Numbered feature list
- Statistics/metrics section
- Professional copy

**Content Structure**:
- Key differentiators
- Benefits and features
- Statistics and social proof
- Company/service highlights

### 6. FAQ Section
**File**: `src/components/FAQ.tsx`
**Features**:
- Collapsible accordion design
- Common questions (customize count)
- Smooth animations
- Mobile-optimized

**Content Guidelines**:
- Address common concerns
- Industry-specific questions
- Technical questions
- Service-related queries

### 7. Footer
**File**: `src/components/Footer.tsx`
**Features**:
- Background (gradient, solid, or pattern)
- Logo and branding section
- Multi-column navigation
- Industry-specific sections
- Copyright information

**Footer Sections** (customize as needed):
- Main pages (Home, About, Contact)
- Legal (Privacy Policy, Terms & Conditions)
- Industry compliance (if applicable)
- Social links and contact info

## 📄 Page Structure

### Main Page
**File**: `src/app/page.tsx`
**Sections**:
1. Header
2. Hero
3. Product/Service Cards
4. Trust Signals
5. Why Choose Us
6. FAQ
7. Footer

### Legal Pages
- **About**: `src/app/about/page.tsx`
- **Contact**: `src/app/contact/page.tsx`
- **Privacy Policy**: `src/app/privacy/page.tsx`
- **Terms & Conditions**: `src/app/terms/page.tsx`

## ⚙️ Configuration

### Site Configuration
**File**: `src/config/site.ts`
**Structure**:
```typescript
export const siteConfig = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://yoursite.com",
  
  colors: {
    primary: "[Your primary color]",
    secondary: "[Your secondary color]",
    accent: "[Your accent color]",
    background: "[Your background color]",
    surface: "[Your surface color]",
    text: "[Your text color]",
    textSecondary: "[Your secondary text color]"
  },
  
  hero: {
    headline: "Your compelling headline",
    subtext: "Your value proposition..."
  },
  
  products: [ // Rename as needed (casinos, services, etc.)
    {
      name: "Product/Service Name",
      logo: "logo-filename.webp",
      description: "Key information/offer",
      rating: 5.0,
      link: "https://affiliate-link.com?clickid={gclid}"
    }
  ],
  
  contact: {
    email: "your-email@domain.com"
  }
}
```

## 🎯 Key Features

### Tracking Integration
- Capture tracking parameters from URL (GCLID, UTM, etc.)
- Replace `{gclid}` or `{utm}` placeholders in affiliate links
- Client-side implementation with `useState` and `useEffect`

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Horizontal scrolling for trust badges
- Collapsible mobile navigation

### Clickable Elements
- Product/service logos are clickable
- Description/offer text is clickable
- CTA buttons are clickable
- All link to same affiliate URL with tracking

### Legal Compliance
- Privacy Policy (GDPR/CCPA compliant)
- Terms & Conditions
- Industry-specific disclaimers
- Cookie consent (if needed)
- Relevant regulations compliance

## 📁 File Structure
```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ProductCards.tsx (or rename as needed)
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TrustSignals.tsx
│   └── WhyChooseUs.tsx
└── config/
    └── site.ts

public/
├── product-logos/ (or rename as needed)
│   └── [product/service logo files]
├── logos/
│   ├── websitelogo.svg
│   └── compliance/ (if needed)
│       └── [industry compliance logos]
└── [other assets]
```

## 🚀 Deployment Setup

### Vercel Configuration
**File**: `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
```

### Git Setup
```bash
# Initialize repository
git init
git add .
git commit -m "Initial casino landing page"

# Add remote
git remote add origin git@github.com:username/repository.git
git push -u origin main
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes
- Use utility classes for styling
- Custom components in `globals.css`
- Responsive prefixes: `sm:`, `md:`, `lg:`
- Hover states: `hover:`
- Focus states: `focus:`

### Custom Components
```css
.btn-primary {
  @apply btn bg-yellow-500 text-black hover:bg-yellow-400 focus:ring-yellow-500 shadow-lg hover:shadow-xl font-bold;
}

.card {
  @apply bg-gray-900 border border-gray-700 rounded-xl shadow-lg overflow-hidden;
}

.gradient-text {
  @apply bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent;
}
```

## 📊 SEO & Performance

### Meta Tags
- Title and description in layout
- Open Graph tags
- Twitter Card tags
- Favicon setup

### Performance
- Next.js Image component for optimization
- Lazy loading
- Minimal JavaScript bundle
- CSS optimization

## 🔒 Security & Compliance

### Privacy
- No tracking cookies
- GDPR compliant privacy policy
- Data retention policies
- Contact information only

### Legal
- UK gambling regulations
- Responsible gambling links
- Age verification (18+)
- Terms and conditions

## 🎯 Conversion Optimization

### User Experience
- Multiple clickable areas per product/service
- Clear call-to-action buttons
- Trust signals and social proof
- Mobile-optimized design

### Tracking
- Tracking parameter capture (GCLID, UTM, etc.)
- Affiliate link attribution
- Click tracking ready

## 📝 Content Guidelines

### Product/Service Data
- Accurate information and offers
- Real brand names and logos
- Proper rating system (customize as needed)
- Working affiliate links

### Legal Content
- Professional legal pages
- Industry-specific regulations
- Compliance focus
- Clear disclaimers

## 🛠️ Development Workflow

### Setup
1. Create Next.js project
2. Install dependencies
3. Configure Tailwind CSS
4. Set up TypeScript
5. Create component structure

### Development
1. Build components individually
2. Test responsive design
3. Implement GCLID tracking
4. Add legal pages
5. Optimize for performance

### Deployment
1. Push to GitHub
2. Connect to Vercel
3. Configure custom domain
4. Test live site
5. Monitor performance

## 📋 Quality Checklist

### Functionality
- [ ] All links work correctly
- [ ] GCLID tracking functions
- [ ] Mobile navigation works
- [ ] FAQ accordion functions
- [ ] Forms submit properly

### Design
- [ ] Responsive on all devices
- [ ] Consistent color scheme
- [ ] Proper typography
- [ ] Hover effects work
- [ ] Images load correctly

### Content
- [ ] All text is accurate
- [ ] Legal pages complete
- [ ] Product/service data current
- [ ] Contact information correct
- [ ] No placeholder text

### Performance
- [ ] Fast loading times
- [ ] Optimized images
- [ ] Clean code
- [ ] No console errors
- [ ] Mobile performance good

## 🎯 Success Metrics

### Technical
- Page load speed < 3 seconds
- Mobile-friendly score > 90
- SEO score > 85
- Accessibility score > 90

### Business
- High conversion rates
- Low bounce rate
- Good user engagement
- Legal compliance

---

## 🚀 Quick Start Commands

```bash
# Create new Next.js project
npx create-next-app@latest your-project-name --typescript --tailwind --eslint --app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npx vercel

# Git setup
git init
git add .
git commit -m "Initial commit"
git remote add origin [repository-url]
git push -u origin main
```

## 🎯 Template Customization

### For Different Industries:
- **E-commerce**: Replace "casinos" with "products", add shopping cart
- **SaaS**: Replace with "software", add pricing tiers
- **Services**: Replace with "providers", add service categories
- **Finance**: Add compliance badges, financial disclaimers
- **Health**: Add medical disclaimers, certification badges

### For Different Markets:
- **US**: Update legal compliance for US regulations
- **EU**: Ensure GDPR compliance
- **Global**: Add multi-language support
- **Local**: Add location-specific content

This comprehensive template provides everything needed to build a professional comparison/affiliate landing page from scratch, with flexible structure that can be adapted to any industry or market.

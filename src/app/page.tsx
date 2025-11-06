import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CasinoBrands from '@/components/CasinoBrands';
import TrustSignals from '@/components/TrustSignals';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F0F23]">
      <Header />
      <Hero />
      <CasinoBrands />
      <TrustSignals />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </div>
  );
}
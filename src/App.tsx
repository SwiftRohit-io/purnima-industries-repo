import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { About } from '@/components/sections/About';
import { Capability } from '@/components/sections/Capability';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Location } from '@/components/sections/Location';
import { Services } from '@/components/sections/Services';
import { Work } from '@/components/sections/Work';

export default function App() {
  return (
    <div className="max-[700px]:pb-[54px]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to content
      </a>
      <span id="top" />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Capability />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

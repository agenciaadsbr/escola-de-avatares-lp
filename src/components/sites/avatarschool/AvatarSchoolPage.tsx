import { SiteRuntime } from "./SiteRuntime";
import { Cast } from "./sections/Cast";
import { Curriculum } from "./sections/Curriculum";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { Footer } from "./sections/Footer";
import { Guarantee } from "./sections/Guarantee";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { HowMoney } from "./sections/HowMoney";
import { IconSprite } from "./sections/IconSprite";
import { Money } from "./sections/Money";
import { Numbers } from "./sections/Numbers";
import { Pricing } from "./sections/Pricing";
import { ProgressBar } from "./sections/ProgressBar";
import { Secret } from "./sections/Secret";
import { Testimonials } from "./sections/Testimonials";
import { Ticker } from "./sections/Ticker";
import { Who } from "./sections/Who";
import { Why } from "./sections/Why";

export function AvatarSchoolPage() {
  return (
    <>
      <ProgressBar />
      <IconSprite />
      <Ticker />
      <main>
        <Hero />
        <HowMoney />
        <Cast />
        <Numbers />
        <Secret />
        <Why />
        <HowItWorks />
        <Curriculum />
        <Who />
        <Money />
        <Pricing />
        <Testimonials />
        <Guarantee />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
      <SiteRuntime />
    </>
  );
}

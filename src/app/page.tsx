import { Hero } from "@/components/Hero";
import { PhotographerSection } from "@/components/PhotographerSection";
import { GiftingSection } from "@/components/GiftingSection";
import { InvitationSection } from "@/components/InvitationSection";
import { WhySection } from "@/components/WhySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PhotographerSection />
      <GiftingSection />
      <InvitationSection />
      <WhySection />
      <Footer />
    </div>
  );
}

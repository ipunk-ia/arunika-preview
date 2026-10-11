import { Doctors } from "@/components/Doctors";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { Location } from "@/components/Location";
import { Services } from "@/components/Services";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Hours />
      <Doctors />
      <Services />
      <Location />
      <Steps />
      <FinalCta />
      <Footer />
    </main>
  );
}

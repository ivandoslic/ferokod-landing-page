import AboutSection from "@/components/sections/about-section";
import FormSection from "@/components/sections/form-section";
import HeroSection from "@/components/sections/hero-section";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <AboutSection />
      <FormSection />
    </DefaultLayout>
  );
}

import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DashboardPreview from "@/components/DashboardPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <DashboardPreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
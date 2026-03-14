import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import DashboardPreview from "@/components/DashboardPreview";
import TargetUsersSection from "@/components/TargetUsersSection";
import ComparisonSection from "@/components/ComparisonSection";
import FoundersSection from "@/components/FoundersSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <FeaturesSection />
    <DemoSection />
    <DashboardPreview />
    <TargetUsersSection />
    <ComparisonSection />
    <FoundersSection />
    <CTASection />
    <FooterSection />
  </div>
);

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlatformCategories from "@/components/PlatformCategories";
import FeaturedGames from "@/components/FeaturedGames";
import SpecialOffers from "@/components/SpecialOffers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PlatformCategories />
      <FeaturedGames />
      <SpecialOffers />
      <Footer />
    </div>
  );
};

export default Index;

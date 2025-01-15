import HeroSection from "@/components/ui/HomePage/HeroSection/Hero";
import TopRatedDoctors from "@/components/ui/HomePage/HeroSection/TopRatedDoctors/TopRatedDoctors";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import WhyUs from "@/components/ui/HomePage/WhyUs/WhyUs";

const Home = () => {
    return (
        < >
           <HeroSection />
           <Specialist />
           <TopRatedDoctors/>
           <WhyUs/>
        </>
    );
};

export default Home; 
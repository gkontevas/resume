import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
// import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import ContactInfoCard from "./components/ContactInfoCard";
import Achievements from "./components/Achievements";

export default function Home() {
  const myContactInfo = {
    name: "Dimos Gkontevas",
    email: "dimosgkontevas1@gmail.com",
    phone: "(+30) 6945004617",
    github: "github.com/gkontevas",
    linkedin: "www.linkedin.com/in/dimos-gkontevas-bb87a22b3/",
    
  }

  
  return (
    
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-12 mx-auto px-12 py-14">
        <HeroSection />
        <Achievements />
        <br/>
        <AboutSection />
        <br/>
        <ProjectSection />
        <br/>
        <div className="container mt-24 mx-auto px-12 py-4">
        <ContactInfoCard 
        github="https://github.com/gkontevas"
        linkedin="https://www.linkedin.com/in/dimos-gkontevas-bb87a22b3/"
        phone="6945004617"
        email="dimosgkontevas1@gmail.com"
        instagram="gkontevas_"
      />
      </div>
        {/* <EmailSection /> */}
        </div>
        <Footer />
       </main>
  
  );
}

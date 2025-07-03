import AboutCompany from "./Components/AboutCompany"
import CaseStudySection from "./Components/CaseStudySection"
import CompanyStats from "./Components/CompanyStats"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import LatestNews from "./Components/LatestNews"
import Navbar from "./Components/Navbar"
import PopularServices from "./Components/PopularServices"
import Pricing from "./Components/Pricing"
import TeamMembers from "./Components/TeamMembers"
import Testimonal from "./Components/Testimonal"
import VideoComponent from "./Components/VideoComponent"

function App() {


  return (
    <>
     <Navbar/>
     <HeroSection/>
     <AboutCompany/>
     <PopularServices/>
     <VideoComponent/>
     <TeamMembers/>
     <Pricing/>
     <CompanyStats/>
     <CaseStudySection/>
     <Testimonal/>
     <LatestNews/>
     <Footer/>
    </>
  )
}

export default App

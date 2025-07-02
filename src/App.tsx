import AboutCompany from "./Components/AboutCompany"
import CompanyStats from "./Components/CompanyStats"
import Footer from "./Components/Footer"
import LatestNews from "./Components/LatestNews"
import Navbar from "./Components/Navbar"
import PopularServices from "./Components/PopularServices"
import Pricing from "./Components/Pricing"
import TeamMembers from "./Components/TeamMembers"
import VideoComponent from "./Components/VideoComponent"

function App() {


  return (
    <>
     <Navbar/>
     <AboutCompany/>
     <PopularServices/>
     <VideoComponent/>
     <TeamMembers/>
     <Pricing/>
     <CompanyStats/>
     <LatestNews/>
     <Footer/>
    </>
  )
}

export default App

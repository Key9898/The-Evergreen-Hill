import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/HeroSection'
import FAQs from './components/FAQs/FAQs'
import TermsOfService from './components/TermsOfService/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import RoomsSuites from './components/Rooms&Suites/Rooms&Suites'
import Experiences from './components/Experiences/Experiences'
import DiningAndBar from './components/Dining&Bar/Dining&Bar'
import SwimmingPool from './components/SwimmingPool/SwimmingPool'
import SpaAndWellnessCenter from './components/Spa&WellnessCenter/Spa&WellnessCenter'
import Activities from './components/Activities/Activities'
import Gallery from './components/Gallery/Gallery'
import OurStory from './components/OurStory/OurStory'
import Team from './components/Team/Team'
import GuestReviews from './components/GuestReviews/GuestReviews'
import Location from './components/Location/Location'
import Contact from './components/Contact/Contact'
import Events from './components/Events/Events'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />
      case 'roomsAndSuites':
        return <RoomsSuites onNavigate={setCurrentPage} />  
      case 'experiences':
        return <Experiences onNavigate={setCurrentPage} />
      case 'DiningAndBar':
        return <DiningAndBar onNavigate={setCurrentPage} />
      case 'swimmingPool':
        return <SwimmingPool onNavigate={setCurrentPage} />  
      case 'spaAndWellnessCenter':
        return <SpaAndWellnessCenter onNavigate={setCurrentPage} />
      case 'activities':
        return <Activities onNavigate={setCurrentPage} />
      case 'gallery':
        return <Gallery onNavigate={setCurrentPage} />
      case 'ourStory':
        return <OurStory onNavigate={setCurrentPage} />
      case 'team':
        return <Team onNavigate={setCurrentPage} />
      case 'guestReviews':
        return <GuestReviews onNavigate={setCurrentPage} />   
      case 'location':
        return <Location onNavigate={setCurrentPage} />
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />
      case 'events':
        return <Events onNavigate={setCurrentPage} />          
      case 'faqs':
       return <FAQs onNavigate={setCurrentPage} />  
      case 'termsOfService':
        return <TermsOfService onNavigate={setCurrentPage} />
      case 'privacyPolicy':
        return <PrivacyPolicy onNavigate={setCurrentPage} />
      default:
        return <Hero onNavigate={setCurrentPage} />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App
import {Navbar, LandingPage, Marquee, About, Eyes, Featured, Cards, Footer} from './components/index.js'
import LocomotiveScroll from "locomotive-scroll";


function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </>
  )
}

export default App

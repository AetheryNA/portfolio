import ReachMe from "../src/components/ReachMe"
import IntroTitle from "../src/components/IntroTitle"
import AboutCard from "../src/components/AboutCard"
import Timeline from "../src/components/Timeline"
import Slideshow from "../src/components/Slideshow"
import AboutMe from "../src/components/AboutMe"
import BackToTop from "../src/components/BackToTop"
import Info from "../src/components/Info"

export default function Home() {
  return (
    <>
      <BackToTop />
      <div className="container overflow-visible">
        <div className="portfolio-main__wrapper pt-4 md:grid hidden relative">
          <IntroTitle title={'I build things on the Web.'} />
          <AboutCard />
          <Timeline />
        </div>
        <ReachMe />
      </div>
      
      <div className="portfolio-main__wrapper pt-4 md:hidden">
        <IntroTitle title={'I build things on the Web.'} />
        <Slideshow />
      </div>

      <AboutMe />
      <Info />
    </>
  )
}

import Footer from "../src/components/Footer"
import IntroTitle from "../src/components/IntroTitle"
import AboutCard from "../src/components/AboutCard"
import Timeline from "../src/components/Timeline"
import Slideshow from "../src/components/Slideshow"

export default function Home() {
  return (
    <>
      <div className="container overflow-visible">
        <IntroTitle title={'I build things on the Web.'} />
        <div className="portfolio-main__wrapper pt-4 md:grid hidden relative">
          <AboutCard />
          <Timeline />
        </div>
      </div>
      <div className="portfolio-main__wrapper pt-4 md:hidden">
        <Slideshow />
      </div>
      <Footer />
    </>
  )
}

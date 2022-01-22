import Footer from "../src/components/Footer"
import IntroTitle from "../src/components/IntroTitle"
import AboutCard from "../src/components/AboutCard"
import Timeline from "../src/components/Timeline"

export default function Home() {
  return (
    <>
      <div className="container overflow-visible">
        <IntroTitle title={'I build things on the Web.'} />
        <div className="portfolio-main__wrapper pt-4 grid">
          <AboutCard />
          <Timeline />
        </div>
      </div>
      <Footer />
    </>
  )
}

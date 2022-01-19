import Footer from "../src/components/Footer"
import IntroTitle from "../src/components/IntroTitle"
import AboutCard from "../src/components/AboutCard"

export default function Home() {
  return (
    <>
      <div className="container">
        <IntroTitle title={'Hi! I build things on the Web.'} />
        <AboutCard />
      </div>
      <Footer />
    </>
  )
}

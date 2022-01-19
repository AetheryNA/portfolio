import Footer from "../src/components/Footer"
import IntroTitle from "../src/components/IntroTitle"

export default function Home() {
  return (
    <>
      <div className="container">
        <IntroTitle title={'Hi! I build things on the Web.'} />
      </div>
      <Footer />
    </>
  )
}

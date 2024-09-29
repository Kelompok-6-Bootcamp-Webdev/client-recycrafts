import Articles from "../components/LandingPage/Articles"
import Collection from "../components/LandingPage/Collection"
import Donation from "../components/LandingPage/Donation"
import Faq from "../components/LandingPage/Faq"
import Hero from "../components/LandingPage/Hero"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Collection />
      <Donation />
      <Articles />
      <Faq />
    </>
  )
}

export default HomePage
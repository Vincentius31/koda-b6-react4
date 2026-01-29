import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Menu } from "../components/Menu"
import Footer from "../components/footer"

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Menu/>
        <Footer/>
    </>
  )
}

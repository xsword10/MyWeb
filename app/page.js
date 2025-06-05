import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import MyBlogs from "./components/MyBlogs"
import Footer from "./components/Footer"
import './globals.css'
import Contact from "./components/Contact"

export default function Home() {

  return (
    <>
    <Navbar />
    <Header />
    <About />
    <MyBlogs />
    <Contact />
    <Footer />
    </>
  );
}

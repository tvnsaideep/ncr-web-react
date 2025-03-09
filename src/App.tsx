import './App.css'
import Header from './header/Header';
import FooterBody from './footer/FooterBody';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Blog from './sections/Blog';

function App() {


  return (
    <>
      <main className="indxMain1">
      <Header></Header>
       
        <Routes >
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <AboutUs /> } />
          <Route path="/services" element={ <Services /> } />
          <Route path="/blog" element = {<Blog></Blog>}/>
          <Route path="/contact" element={ <ContactUs /> } />
          <Route path='*' element = {<Home />} />
        </Routes>
      
        <footer className="w-100 clearfix footer" id="footer">
        <FooterBody></FooterBody>
        </footer>
      </main>

    </>
  )
}

export default App

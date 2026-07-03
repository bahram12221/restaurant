import logo from './logo.svg';
import './App.css';
import Home from './Home/home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Book from './pages/bookPage/book';
import About from './pages/about/about';
import Services from './pages/services/services';
import Menu from './pages/menu/menu';
import Gallery from './pages/gallery/gallery';
import Testimonials from './pages/testimonials/testimonials';
import Contact from './pages/contact/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;

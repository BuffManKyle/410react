import './App.css';
import "./pages/styles.css"
import { Route, Routes } from 'react-router-dom'
import Header from './pages/partials/header';
import Footer from './pages/partials/footer';
import Home from './pages/home';
import About from './pages/about';
import Addon from './pages/addon';
import Aio from './pages/aio';
import Contact from './pages/contact';
import Explain from './pages/explain';
import Faq from './pages/faq';
import Kits from './pages/kits';
import Multi from './pages/multi';
import Options from './pages/suplemental';
import Packages from './pages/packages';
import Single from './pages/single'
import Paintcorrectionpage from './pages/paint-correction-group';
import Coatingoptions from './pages/coating-options';


function App() {
  return (
    <div  className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add-ons' element={<Addon/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path='/aio-polish' element={<Aio/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/what-is-a-protective-coating' element={<Explain/>} />
          <Route path='/paint-correction-faqs' element={<Faq/>} />
          <Route path='/carwashkit' element={<Kits/>} />
          <Route path='/multistage' element={<Multi/>} />
          <Route path='/supplementalcoatings' element={<Options/>} />
          <Route path='/coatingpackages' element={<Packages/>} />
          <Route path='/one-stage' element={<Single/>} />
          <Route path='/paintcorrection' element= {<Paintcorrectionpage/>} />
          <Route path='/undrdogcoating' element = {<Coatingoptions/>} />
        </Routes>
        <Footer />

      
      
    </div>
  );
}

export default App;

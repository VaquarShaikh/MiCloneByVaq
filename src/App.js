import './App.css';
import PreNavbar from './components/PreNavbar.js'
import Navbar from './components/navbar.js'
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom' 
import Slider from './components/Slider.js'
// import data from './data/data.json'
// const {data} = require('./data/data.json')
import data from './data/data.js'
import temp from './data/hotAccessories.js'
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import StartProduct from './components/StartProduct.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import { Outlet } from "react-router-dom";
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner  from './components/Banner.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  return(
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>

      {/* console.log(data.banner.start) */}
      <Slider start = {data.banner.start}/>
      <Offers offer = {data.offer} />
      <Heading text="STAR PRODUCTS"/>
      <StartProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu  />
      <Routes>

      <Route path="/music"  element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
      <Route path="/smartDevice"  element = {<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
      <Route path="/home"  element = {<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
      <Route path="/Lifestyle"  element = {<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
      <Route path="/mobileAccessories"  element = {<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text='IN THE PRESS' />
      <Banner banner={data.banner}/>
      <Footer footer = {data.footer}/>
    </Router>
    
    );
  }
  
  export default App; 
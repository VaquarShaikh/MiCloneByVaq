import React from 'react'
import "../styles/nav.css"
// import logo from '../data/data.js'
// import imgg from '../../public/favicon.ico'

const image = <svg id="logoImage" width="112px" height="56px" version="1.1" viewBox="0 0 224 112" xmlns="http://www.w3.org/2000/svg">
<g fill="none" fill-rule="evenodd">
<g fill="#fff">
<path d="m57.805 26.743 0.12618 0.1349 23.436 26.9c1.4023 1.609 0.32051 4.0935-1.7689 4.2168l-0.16269 0.0047665h-3.4364v13.335c0 3.6819-3.019 6.6654-6.7448 6.6654h-26.51c-3.7257 0-6.7448-2.9835-6.7448-6.6654v-13.335h-3.4364c-2.1401 0-3.3105-2.4443-2.0346-4.0961l0.10299-0.12544 23.436-26.9c0.97734-1.1242 2.6984-1.1692 3.737-0.1349zm142.8 7.8166c0.386 0 0.706 0.31 0.706 0.692v41.502c0 0.376-0.32 0.688-0.706 0.688h-9.094c-0.39 0-0.706-0.312-0.706-0.688v-41.502c0-0.382 0.316-0.692 0.706-0.692h9.094zm-39.46 0c6.86 0 14.032 0.314 17.568 3.854 3.48 3.4839 3.8554 10.419 3.8696 17.154l4.38e-4 21.186c0 0.376-0.316 0.688-0.706 0.688h-9.09c-0.39 0-0.708-0.312-0.708-0.688v-21.55c-0.01-3.762-0.226-7.628-2.166-9.574-1.67-1.674-4.786-2.058-8.026-2.138h-16.48c-0.388 0-0.704 0.312-0.704 0.688v32.574c0 0.376-0.32 0.688-0.708 0.688h-9.098c-0.388 0-0.702-0.312-0.702-0.688v-41.502c0-0.382 0.314-0.692 0.702-0.692h26.248zm2.036 16.528c0.386 0 0.7 0.31 0.7 0.688v24.978c0 0.376-0.314 0.688-0.7 0.688h-9.552c-0.392 0-0.708-0.312-0.708-0.688v-24.978c0-0.378 0.316-0.688 0.708-0.688h9.552zm-103.88 2.912h-6.6047c-1.4355 0-2.6057 1.1943-2.6904 2.6981l-0.0049103 0.17485v6.254c0 1.5264 1.117 2.7772 2.5309 2.8677l0.16442 0.0052496h6.6047c1.4355 0 2.6101-1.1943 2.6951-2.6981l0.0049294-0.17485v-6.254c0-1.5851-1.2093-2.873-2.7001-2.873z"/>
</g>
</g>
</svg>

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

const Navbar = () => {
    return (
        <div className="nav">

            <div className="logo">
               
             <a href="/">
                  {/* <img id="logoImage" src = {logo} image alt="Not" />  */}
                  {image}
             </a>

             </div>

             <a  className="navlinks" href="/miphones">Mi Phones</a>
           <a   className="navlinks"  href="/redmiphones">Redmi Phones</a>
           <a   className="navlinks" href="/tv">TV</a>
           <a   className="navlinks" href="/laptops">Laptops</a>
           <a   className="navlinks" href="/lifestyle">Fitness & Lifestyle</a>
           <a  className="navlinks" href="/home">Home</a>
           <a   className="navlinks" href="/audio">Radio</a>
           <a   className="navlinks" href="/accessories">Accessories</a>

           <div className="searchbox">
              <input type="text" name="search"  placeholder="Search Products"/>
              {searchIcon}

          </div>
            

           </div>
    )
}

export default Navbar

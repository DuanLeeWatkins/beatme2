import React from 'react'
import homePageImage from '../assets/james-stamler.jpg'



export default function Main() {
    return (
      <main>
        
          <img className='home-page-image'
            src={homePageImage}
            alt="music-equipment"
          />
      </main>
    );
}
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCrouselData } from './MainCrouselData';



const MainCrosel = () => {
 
      const items = MainCrouselData.map((item) => (
        <img className='carousel-img cursor-pointer w-full h-auto object-contain' role='presentation' src={item.image} alt="img" />
      ));
        
    return (
        <AliceCarousel className=''

            items={items}
            autoHeight
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
        />
    )
}


export default MainCrosel;
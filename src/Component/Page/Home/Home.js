import React from 'react';
import Banner from './Banner/Banner';


import ListProduct from '../../PROPS/ListProduct/ListProduct';
import CardContent from './CardContent/CardContent';
import CardFavorites from './CardFavorites/CardFavorites';
import Slideshow from './SlideShow/Slideshow';
import ImageBanner from './ImageBanner/ImageBanner';
import MediaIntro from './MediaIntro/MediaIntro';
import HeroSection from './HeroSection/HeroSection';




const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Slideshow></Slideshow>
            <ImageBanner></ImageBanner>
            
            {/* <ListProduct></ListProduct> */}
            <CardFavorites></CardFavorites>
            <HeroSection></HeroSection>
            <CardContent></CardContent>
            
            <MediaIntro></MediaIntro>
           
            
            
            
            
            
            
            
        </>
    );
};

export default Home;
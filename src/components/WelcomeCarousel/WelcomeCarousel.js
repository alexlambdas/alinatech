import React from "react";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import Img1 from "../../images/carousel_img1.png";
import Img2 from "../../images/carousel_img2.png";
import styles from "./Styles";

function WelcomeCarousel(){

    return(
        <Carousel 
            additionalTransfrom={0}
            autoPlay={true}
            autoPlaySpeed={9000}
            transitionDuration={1000}
            centerMode={false} 
            className="" 
            containerClass="container" 
            dotListClass=""
            draggable 
            focusOnSelect={false}
            infinite={true} 
            itemClass=""
            keyBoardControl 
            minimumTouchDrag={80} 
            renderButtonGroupOutside={false} 
            renderDotsOutside={false} 
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1,
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                }
            }}
            //showDots={true}
            sliderClass="" 
            slidesToSlide={1}
            swipeable 
            >
                <img 
                    src={Img1} 
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%',
                    }} />
                <img 
                    src={Img2} 
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%',
                    }} />
        </Carousel>
    )
}

export default WelcomeCarousel;
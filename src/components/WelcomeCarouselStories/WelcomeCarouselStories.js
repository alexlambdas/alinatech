import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import ImgMelaxa from "../../images/melexa_logo_cuadrado.png";
import ImgOlt from "../../images/olt_consulting_logo_cuadrado.png";
import ImgQbe from "../../images/qbe_seguros_logo_cuadrado.png";
import ImgGsa from "../../images/professional_services_pss_logo_cuadrado.png"
import styles from "./Styles";

function WelcomeCarouselStories(){
    return(
        <Carousel 
            swipeable={false}
            draggable={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={100}
            slidesToSlide={1}
            responsive={{
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 3,
            },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 3,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 3,
                }
            }}>
                <div style={styles.cardStories}>
                    <span 
                        style={styles.cardStoriesTitle}
                        className="cardStoriesTitle">
                        Melaxa
                    </span>
                    <img 
                        src={ImgMelaxa} 
                        style={{
                            display: 'block',
                            margin: 'auto',
                        }} />
                </div>
                <div style={styles.cardStories}>
                    <span 
                        style={styles.cardStoriesTitle}
                        className="cardStoriesTitle">
                        OLT Consulting
                    </span>
                    <img 
                        src={ImgOlt} 
                        style={{
                            display: 'block',
                            margin: 'auto',
                            width: "59%",
                        }} />
                </div>
                <div style={styles.cardStories}>
                    <span 
                        style={styles.cardStoriesTitle}
                        className="cardStoriesTitle">
                        Professional Services (PSS)
                    </span>
                    <img 
                        src={ImgGsa} 
                        style={{
                            display: 'block',
                            margin: 'auto',
                            width: "63%",
                        }} />
                </div>
                <div style={styles.cardStories}>
                    <span 
                        style={styles.cardStoriesTitle}
                        className="cardStoriesTitle">
                        QBE Seguros Colombia
                    </span>
                    <img 
                        src={ImgQbe} 
                        style={{
                            display: 'block',
                            margin: 'auto',
                            width: "63%",
                        }} />
                </div>
        </Carousel>
    )
}

export default WelcomeCarouselStories;
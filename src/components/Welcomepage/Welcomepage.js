import React from "react";
import Navbar from "../Navbar/Navbar";
import MenuItems from "../MenuItems/MenuItems";
import WelcomeCarousel from "../WelcomeCarousel/WelcomeCarousel";
import OurServices from "../OurServices/OurServices";
import WelcomeCarouselTitle from "../WelcomeCarouselTitle/WelcomeCarouselTitle";
import WelcomeCarouselStories from "../WelcomeCarouselStories/WelcomeCarouselStories";
import WelcomeSupport from "../WelcomeSupport/WelcomeSupport";

import styles from "./Styles";

function Welcomepage(props){

    const { openNav, handleOpenNav } = props;

    return(
        <main>
            <div className="mainFirstBigSection">
                <Navbar 
                    openNav={openNav}
                    handleOpenNav={handleOpenNav}/>
                <div style={styles.mainContainerAllSections}>
                    <MenuItems />
                    <WelcomeCarousel />
                    <OurServices />
                    <WelcomeSupport />
                    <div 
                        style={styles.containerCarouselStories}
                        className="containerCarouselStories">
                            <WelcomeCarouselTitle />
                            <WelcomeCarouselStories />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Welcomepage;
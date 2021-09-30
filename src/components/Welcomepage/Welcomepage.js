import React from "react";
import Navbar from "../Navbar/Navbar";
import MenuItems from "../MenuItems/MenuItems";
import WelcomeCarousel from "../WelcomeCarousel/WelcomeCarousel";
import OurServices from "../OurServices/OurServices";
import WelcomeCarouselStories from "../WelcomeCarouselStories/WelcomeCarouselStories";

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
                    <div 
                        style={styles.containerCarouselStories}
                        className="containerCarouselStories">
                        <WelcomeCarouselStories />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Welcomepage;
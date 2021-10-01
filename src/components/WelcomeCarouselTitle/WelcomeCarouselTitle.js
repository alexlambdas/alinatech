import React from "react";
import MaterialIcon from "material-icons-react";

import styles from "./Styles";

function WelcomeCarouselTitle(props){
    return(
        <div 
            style={styles.welcomeCarouselTitleContainer}
            className="welcomeCarouselTitleContainer">
            <MaterialIcon 
                icon="group_add" 
                color="#00bcd4" 
                size="large"/>
            <span style={{marginLeft: "12px"}}>
                    Casos de Éxito
            </span>
        </div>
    )
}

export default WelcomeCarouselTitle;
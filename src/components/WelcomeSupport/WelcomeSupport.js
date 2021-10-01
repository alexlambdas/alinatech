import React from "react";
import MaterialIcon from "material-icons-react";

import styles from "./Styles";

function WelcomeSupport(props){
    return(
        <section style={styles.welcomeSupportContainer}>
            <div style={styles.welcomeSupprtContainerTitle}>
                <div 
                    style={styles.welcomeSupportTitleIcon}
                    className="welcomeSupportTitleIcon">
                        <MaterialIcon 
                            icon="phone_in_talk" 
                            color="#00bcd4" 
                            size="large"/>
                        <div style={{marginLeft: "12px"}}>Centro de Asistencia y</div>
                </div>
                <div
                    style={styles.welcomeSupportTitleIcon2}
                    className="welcomeSupportTitleIcon2">
                        Soporte
                </div>
            </div>
            <div 
                style={styles.welcomeSupprtContainerText}
                className="welcomeSupprtContainerText">
                <p>
                    Ponemos a disposición de sus clientes, esta herramienta, con el fin de facilitarles
                    la interacción con las mesa de ayuda en el reporte de las fallas y minimizar así los 
                    tiempos de atención de las mismas. Adicionalmente, por esta herramienta se pueden 
                    solicitar los cambios requeridos en la red y las peticiones de tipo administrativo 
                    y comercial.
                </p>
            </div>
        </section>
    )
}

export default WelcomeSupport;
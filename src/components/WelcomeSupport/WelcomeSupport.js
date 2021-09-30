import React from "react";
import MaterialIcon from "material-icons-react";

function WelcomeSupport(props){
    return(
        <section>
            <div>
                <MaterialIcon 
                    icon="phone_in_talk" 
                    color="#1976d2" 
                    size="medium"/>
                <div>Asistencia y</div>
            </div>
            <div>Soporte</div>
            <p>
                Ponemos a disposición de sus clientes, esta herramienta, con el fin de facilitarles
                la interacción con las mesa de ayuda en el reporte de las fallas y minimizar así los 
                tiempos de atención de las mismas. Adicionalmente, por esta herramienta se pueden 
                solicitar los cambios requeridos en la red y las peticiones de tipo administrativo 
                y comercial.
            </p>
        </section>
    )
}

export default WelcomeSupport;
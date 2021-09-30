import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../resources/Routes";

import styles from "./Styles";

function MenuItems(props){
    return(
        <div style={styles.containerMenuItems}>
            <Link 
                to={ROUTES.ROUTE_MAIN}
                style={styles.menuItem}
                className="menuItem">
                    Inicio
            </Link>
            <Link 
                to={ROUTES.ROUTE_MAIN}
                style={styles.menuItem}
                className="menuItem">
                    Nuestra Empresa
            </Link>
            <Link 
                to={ROUTES.ROUTE_MAIN}
                style={styles.menuItem}
                className="menuItem">
                    Servicios
            </Link>
            <Link 
                to={ROUTES.ROUTE_MAIN}
                style={styles.menuItem}
                className="menuItem">
                    Soporte
            </Link>
            <Link 
                to={ROUTES.ROUTE_MAIN}
                style={styles.menuItem}
                className="menuItem">
                    Contáctenos
            </Link>
            <Link 
                to={ROUTES.ROUTE_MAIN}
                style={styles.menuItem}
                className="menuItem">
                    Intranet
            </Link>
        </div>
    )
}

export default MenuItems;
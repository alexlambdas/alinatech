import React from "react";
import { Link } from "react-router-dom";
import { ROUTES, LINKS } from "../../resources/Routes";

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
            <a 
                href={LINKS.LINK_APP_SUPPORT}
                style={styles.menuItem}
                target="_blank"
                className="menuItem">
                    Soporte
            </a>
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
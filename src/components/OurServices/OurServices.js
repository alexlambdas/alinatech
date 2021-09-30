import React from "react";
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../resources/Routes";
import SvgPadlock from "../SvgPadlock/SvgPadlock";
import SvgConsulting from "../SvgConsulting/SvgConsulting";
import SvgFlowchart from "../SvgFlowchart/SvgFlowchart";
import SvgSchedule from "../SvgSchedule/SvgSchedule";

import styles from "./Styles";

function OurServices(props){

    return(
        <section style={styles.mainContainerOurServices}>
            <div 
                style={styles.ourServicesTitle}
                className="ourServicesTitle">
                <MaterialIcon 
                    icon="group" 
                    color="#00bcd4" 
                    size="large" />
                <div style={styles.ourServicesTextTitle}>
                    Servicios y Consultorías
                </div>
            </div>
            <div 
                style={styles.ourServicesContainerIcons}>
                <Link 
                    to={ROUTES.ROUTE_MAIN}
                    style={styles.ourServicesCommonStylesIcons}
                    className="ourServicesCommonStylesIcons">
                    <div 
                        style={styles.ourServiceMarginBottomIcon}>
                            <SvgPadlock 
                                fill={"#616161"}
                                width={"80px"}
                                heigh={"auto"} />
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            SEGURIDAD
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            INFORMÁTICA
                    </div>
                </Link>
                <Link 
                    to={ROUTES.ROUTE_MAIN}
                    style={styles.ourServicesCommonStylesIcons}
                    className="ourServicesCommonStylesIcons">
                    <div 
                        style={styles.ourServiceMarginBottomIcon}>
                            <SvgConsulting 
                                fill={"#616161"}
                                width={"80px"}
                                heigh={"auto"} />
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            CONSULTORÍA
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            SGS
                    </div>
                </Link>
                <Link 
                    to={ROUTES.ROUTE_MAIN}
                    style={styles.ourServicesCommonStylesIcons}
                    className="ourServicesCommonStylesIcons">
                    <div style={styles.ourServiceMarginBottomIcon}>
                        <SvgFlowchart 
                            fill={"#616161"}
                            width={"80px"}
                            heigh={"auto"} />
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            CONTINUIDAD
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            DE NEGOCIO
                    </div>
                </Link>
                <Link 
                    to={ROUTES.ROUTE_MAIN}
                    style={styles.ourServicesCommonStylesIcons}
                    className="ourServicesCommonStylesIcons">
                    <div style={styles.ourServiceMarginBottomIcon}>
                        <SvgSchedule 
                            fill={"#616161"}
                            width={"80px"}
                            heigh={"auto"} />
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            ADMINISTRACIÓN
                    </div>
                    <div
                        style={styles.ourServicesCommonStylesIconsText}
                        className="ourServicesCommonStylesIconsText">
                            DELEGADA
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default OurServices;
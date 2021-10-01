import React, { useState } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

import { ROUTES, LINKS } from "../../resources/Routes";
import styles from "./Styles";
import "../../App.css";

function Navbar(props){

    const { openNav, handleOpenNav } = props;

    const handleOpenAndCloseNav = () => handleOpenNav();

    const sideNavItems = (
        <>
            <div 
                style={styles.sidenavOpen_closebtn} 
                onClick={handleOpenAndCloseNav}>
                <MaterialIcon 
                    icon="close" 
                    color="#616161" 
                    size="small"/> 
            </div>
            <Link
                style={styles.sidenavOpen_a_custom}
                to={ROUTES.ROUTE_MAIN}>
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="web" 
                                    color="#1976d2" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Inicio
                            </span>
                    </div>
            </Link>
            <Link
                style={styles.sidenavOpen_a_custom}
                to={ROUTES.ROUTE_MAIN}>
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="group" 
                                    color="#1976d2" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Nuestra Empresa
                            </span>
                    </div>
            </Link>
            <Link
                style={styles.sidenavOpen_a_custom}
                to={ROUTES.ROUTE_MAIN}>
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="compare_arrows" 
                                    color="#1976d2" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Servicios
                            </span>
                    </div>
            </Link>
            <a
                style={styles.sidenavOpen_a_custom}
                href={LINKS.LINK_APP_SUPPORT}
                target="_blank">
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="phone_in_talk" 
                                    color="#1976d2" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Soporte
                            </span>
                    </div>
            </a>
            <Link
                style={styles.sidenavOpen_a_custom}
                to={ROUTES.ROUTE_MAIN}>
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="contact_mail" 
                                    color="#1976d2" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Contáctenos
                            </span>
                    </div>
            </Link>
            <Link
                style={styles.sidenavOpen_a_custom}
                to={ROUTES.ROUTE_MAIN}>
                    <div 
                        style={styles.sideNavItemYoutube} 
                        className="sideNavItemCustomIcon"
                        onClick={handleOpenAndCloseNav}>
                            <div style={styles.sideNavItemMDIconSize}>   
                                <MaterialIcon 
                                    icon="account_circle" 
                                    color="#1976d2" 
                                    size="medium"/> 
                            </div>
                            <span 
                                style={styles.itemTextYoutube}
                                className="itemText"> 
                                Intranet
                            </span>
                    </div>
            </Link>
        </>
    )

    const sideNavOpen = (
        <div style={styles.sidenavOpen}>
            {sideNavItems}
        </div>
    )

    const sideNavClose = (
        <div style={styles.sidenavClose}>
            {sideNavItems}
        </div>
    )

    return(
        <nav style={styles.default}>
            {openNav ? sideNavOpen : sideNavClose}
            <div style={styles.menuLeft}>
                <div 
                    style={styles.menuLeftItem}
                    onClick={handleOpenAndCloseNav}>
                    <MaterialIcon 
                        icon="menu" 
                        color="#ffffff" 
                        size="small"/>
                    <div style={styles.circleHoverMDIcon}></div>
                </div>
            </div>
            <div style={styles.menuRight}></div>
        </nav>
    )
}

export default Navbar;
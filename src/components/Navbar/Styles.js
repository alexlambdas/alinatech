const styles = {
    default: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "7vh",
        paddingLeft: "30px",
        paddingRight: "50px",
    },
    menuLeft: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    menuLeftItem: {
        cursor: "pointer",
        position: "relative",
        marginTop: "10px",
        zIndex: "2",
    },
    circleHoverMDIcon: {
        position: "absolute",
        top: "-6px",
        left: "-7px",
        borderRadius: "50%",
        height: "38px",
        width: "38px",
    },
    menuRight: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    sidenavOpen: {
        height: "100%", /* 100% Full-height */
        width: "250px", /* 0 width - change this with JavaScript */
        position: "fixed", /* Stay in place */
        zIndex: "10000", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "#eeeeee", /* purple */
        overflowX: "hidden", /* Disable horizontal scroll */
        paddingTop: "60px", /* Place content 60px from the top */
        transition: "0.5s", /* 0.5 second transition effect to slide in the sidenav */
    },
    sidenavClose: {
        height: "100%", /* 100% Full-height */
        width: "0px", /* 0 width - change this with JavaScript */
        position: "fixed", /* Stay in place */
        zIndex: "10000", /* Stay on top */
        top: "0", /* Stay at the top */
        left: "0",
        backgroundColor: "#eeeeee", /* purple */
        overflowX: "hidden", /* Disable horizontal scroll */
        paddingTop: "60px", /* Place content 60px from the top */
        transition: "0.5s", /* 0.5 second transition effect to slide in the sidenav */
    },
    sidenavOpen_closebtn: {
        padding: "8px 8px 8px 32px",
        textDecoration: "none",
        color: "#818181",
        display: "block",
        transition: "0.3s",
        position: "absolute",
        top: "0",
        right: "25px",
        fontSize: "36px",
        marginLeft: "50px",
        cursor: "pointer"
    },
    sidenavOpen_a_custom: {
        textDecoration: "none",
        transition: "0.3s",
    },
    sideNavItemMDIconSize: {
        width: "40px"
    },
    circleHoverMDIcon: {
        position: "absolute",
        top: "-4px",
        left: "-3px",
        borderRadius: "10%",
        height: "42px",
        width: "42px",
        backgroundColor: "#1A237E",
        zIndex: "-1",
    },
    sideNavItemYoutube: {
        display: "flex",
        paddingLeft: "15px",
        flexDirection: "row",
        alignItems: "center",
        height: "60px"
    },
    itemTextYoutube: {
        fontSize: "15px",
        color: "#263238",
        marginLeft: "7px",
    }
}

export default styles;
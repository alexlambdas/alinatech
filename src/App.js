import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Welcomepage from "./components/Welcomepage/Welcomepage";

import { ROUTES } from "./resources/Routes";
import "./App.css";

function App(){

    const [openNav, setOpenNav] = useState(false);

    const handleOpenNav = () => setOpenNav(!openNav);

    const handleOnClickSideNav = (event) => {
        if(openNav){
            if(parseInt(event.clientX, 10) >= 250) setOpenNav(false);
        }
    }

    return(
        <div onClick={handleOnClickSideNav}>
            <BrowserRouter>
                <Switch>
                    <Route 
                        path={ROUTES.ROUTE_MAIN}
                        render={() => {
                            return(
                                <Welcomepage 
                                    openNav={openNav}
                                    handleOpenNav={handleOpenNav}/>
                            )
                    }}/>
                    <Route exact path="/alinatech">
                        <Redirect to={ROUTES.ROUTE_MAIN}/>
                    </Route>
                    <Route exact path="/">
                        <Redirect to={ROUTES.ROUTE_MAIN}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
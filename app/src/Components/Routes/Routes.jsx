import React from 'react';
import {Switch, Route} from "react-router-dom";
import FourOFour from "./404";
import MainDashboard from "../MainDashboard";

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/edit-node">

                </Route>
                <Route path="/edit-edge">

                </Route>
                <Route exact path="/">
                    <MainDashboard />
                </Route>
                <Route path="*">
                    <FourOFour />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;

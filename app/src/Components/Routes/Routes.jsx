import React from 'react';
import {Switch, Route} from "react-router-dom";
import FourOFour from "./404";
import Graph from "../Graph";

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/edit-graph">

                </Route>
                <Route exact path="/">
                    <Graph dimensions={{height: 700, width: 700}}/>
                </Route>
                <Route path="*">
                    <FourOFour />
                </Route>
            </Switch>
        </>
    );
}

export default Routes;

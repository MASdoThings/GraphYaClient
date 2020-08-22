import Graph from '../Graph';
import React, {useContext} from "react";
import ToolBar from "./ToolBar";
import Context from "../Context";

function MainDashboard(props) {
    const test = useContext(Context);
    console.log(test.test);

    return (
        <>
            <div className="dashboard">
                <div className="tool-bar">
                    <ToolBar/>
                </div>
                <div className="graph-display">
                    <Graph dimensions={{height: 1000, width: 1000}}/>
                </div>
            </div>
        </>
    );
}

export default MainDashboard;

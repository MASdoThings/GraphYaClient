import Graph from '../Graph';
import React from "react";
import ToolBar from "./ToolBar";

function MainDashboard(props) {
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

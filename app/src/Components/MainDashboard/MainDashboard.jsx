import Graph from '../Graph';
import React, {useContext} from "react";
import ToolBar from "./ToolBar";
import DialogCst from '../Basic/DialogCst';
import Context from "../Context";

function MainDashboard(props) {
    console.log('check');

    return (
        <>
            <div className="dashboard">
                <div className="tool-bar">
                    <ToolBar/>
                </div>
                <div className="graph-display">
                    <Graph dimensions={{height: 1000, width: 1000}}/>
                    <DialogCst />
                </div>
            </div>
        </>
    );
}

export default MainDashboard;

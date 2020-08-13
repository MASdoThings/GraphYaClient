import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Components/Routes";


function App () {
    //<Graph dimensions={{height: 700, width: 700}}/>
    return(
        <Router>
            <Routes/>
        </Router>
    )
}



export default App;

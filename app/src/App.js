import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Components/Routes";
import Provider from "./Components/Context/Provider/Provider";

function App () {

    return(

        <Router>
            <Provider>
                <Routes/>
            </Provider>
        </Router>

    )
}



export default App;

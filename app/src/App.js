import React, {useContext} from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Components/Routes";
import Provider from "./Components/Context/Provider/Provider";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#2196f3',
            main: '#1976d2',
            dark: '#0d47a1',
            contrastText: '#fff',
        },
        secondary: {
            light: '#b3c8c7',
            main: '#67ced6',
            dark: '#1096a4',
            contrastText: '#fff',
        },
    },
});

function App () {

    return(

    <MuiThemeProvider theme={theme}>
        <Router>
            <Provider>
                <Routes/>
            </Provider>
        </Router>
    </MuiThemeProvider>
    )
}



export default App;

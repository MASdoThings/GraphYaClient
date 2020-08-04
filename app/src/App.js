import React, {useRef, useEffect, useState, useCallback, useMemo} from 'react';
import './App.css';
import Graph from "./Components/Graph";


function App () {
    console.log('app test');


    return(
            <Graph dimensions={{height: 700, width: 700}}/>
    )
}



export default App;

import React, {useRef,useEffect,useState} from 'react';
import './App.css';
import * as d3 from 'd3';
import Circle from './Components/Graph/Shapes/Circle/Circle'


function App() {

    useEffect(() => {

    }, []);

    return (
        <>
            <svg
                viewBox="0 0 100 50"
            >
                <Circle x={10} y={10} r={2}/>
                <Circle x={30} y={40} r={2}/>
                <Circle x={20} y={33} r={2}/>
                <line x1="10" y1="10" x2="30" y2="40" strokeWidth="0.5" stroke="black"/>
            </svg>
        </>
    );
}

export default App;

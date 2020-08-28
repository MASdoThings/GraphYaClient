import React, {useState} from 'react';
import Context from "../index";
import axios from "axios";
import d from '../../../dummyData';


function Provider(props) {
    const [data,setData] = useState(d);



    return (
       <Context.Provider
        value={
            {
                nodes: data.nodes,
                edges: data.edges,
                setData: setData,
            }
        }
           >
           {props.children}
       </Context.Provider>
    );
}

export default Provider;

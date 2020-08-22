import React from 'react';
import Context from "../index";
import axios from "axios";

function Provider(props) {
    return (
       <Context.Provider
        value={{
                test:'hi'
            }}
           >
           {props.children}
       </Context.Provider>
    );
}

export default Provider;

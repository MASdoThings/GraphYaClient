import React, {useState} from 'react';
import {Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NodesTools from "./NodesTools";
import DialogCst from "../../Basic/DialogCst";
import EdgesTools from  "./EdgesTools";

function ToolBar(props) {
    const [dialog,setDialog] = useState({
        open: false,
        content: null
    });

    console.log('check');

    const sideBar = [
        {
            title: 'Nodes',
            details: <NodesTools setDialog={setDialog}/>
        },
        {
            title: 'Edges',
            details: <EdgesTools setDialog={setDialog}/>
        }
    ];

    return (
        <>
            {
                sideBar.map((x,i) => {
                    return  <Accordion className="acc" key={i+10}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={`${x.title}-header`}
                        >
                            {x.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            {x.details}
                        </AccordionDetails>
                    </Accordion>
                })
            }
            <DialogCst open={dialog.open} setDialog={setDialog} content={dialog.content}/>

        </>
    );
}

export default ToolBar;

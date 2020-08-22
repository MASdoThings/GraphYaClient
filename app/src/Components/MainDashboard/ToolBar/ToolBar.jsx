import React from 'react';
import {Button,Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ToolBar(props) {
    const sideBar = [
        {
            title: 'Nodes',
            tools: [
                <Button variant="contained" color="" onClick={() => console.log('hi')}>
                    CREATE NODE
                </Button>
            ]
        },
        {
            title: 'Edges',
            tools: [
                <Button variant="contained" color="" onClick={() => console.log('hi')}>
                    CREATE EDGE
                </Button>
            ]
        }
    ];

    return (
        <>
            {
                sideBar.map((x) => {
                    return  <Accordion className="acc">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={`${x.title}-header`}
                        >
                            {x.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            {x.tools.map(x => x)}
                        </AccordionDetails>
                    </Accordion>
                })
            }

        </>
    );
}

export default ToolBar;

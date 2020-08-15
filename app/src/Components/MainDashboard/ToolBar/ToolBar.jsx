import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ToolBar(props) {
    return (
        <>
            <Accordion className="acc">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    NODES
                </AccordionSummary>
                <AccordionDetails>
                        test
                </AccordionDetails>
            </Accordion>
            <Accordion className="acc">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    EDGES
                </AccordionSummary>
                <AccordionDetails>
                       test
                </AccordionDetails>
            </Accordion>
            <Accordion className="acc">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    MATH
                </AccordionSummary>
                <AccordionDetails>
                    test
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default ToolBar;

import React from 'react';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import NewEdge from "../../../Basic/Forms/NewEdge";
import PropTypes from "prop-types";

function EdgesTools({setDialog}) {
    return (
        <>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={() => setDialog({open:true,content:<NewEdge setDialog={setDialog}/>})}
                >
                    New node
                </Button>
            </div>
        </>
    );
}

EdgesTools.propTypes = {
    setDialog: PropTypes.func
};
export default EdgesTools;

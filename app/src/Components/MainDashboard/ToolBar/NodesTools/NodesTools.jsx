import React from 'react';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PropTypes from 'prop-types';
import NewNode from "../../../Basic/Forms/NewNode";
import {useTheme} from "@material-ui/core/styles";

function NodesTools({setDialog}) {

    return (
        <>
        <div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => setDialog({open:true,content:<NewNode setDialog={setDialog}/>})}
            >
                New node
            </Button>
        </div>
        </>
    );
}

NodesTools.propTypes = {
    setDialog: PropTypes.func
};
export default NodesTools;

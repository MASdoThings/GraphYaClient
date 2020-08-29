import React, {useCallback} from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';

function DialogCst({open,setDialog,content}) {

    return (
        <div>
            <Dialog open={open} onClose={()=>setDialog({open:false,content:null})} aria-labelledby="dialog-title">
                {content}
            </Dialog>
        </div>
    );
}

export default DialogCst;

DialogCst.propTypes = {
    open: PropTypes.bool,
    setDialog: PropTypes.func,
    content: PropTypes.element
};

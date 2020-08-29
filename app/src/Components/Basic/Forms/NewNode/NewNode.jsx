import React, {useContext, useState} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from '@material-ui/icons/Done';
import Button from "@material-ui/core/Button";
import { useTheme } from '@material-ui/core/styles';
import Context from '../../../Context';
import PropTypes from "prop-types";
import NodesTools from "../../../MainDashboard/ToolBar/NodesTools";

function NewNode({setDialog}) {
    const [value, setValue] = useState({name:'',group:''});
    const context = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(context.nodes.concat([value]));
        context.setData({
            ...context.data,
            nodes: context.nodes.concat([value]),
        });
        setDialog({open:false,content:null})
    };

    return (
        <>
        <div style={{width:400,padding:40}}>
            <DialogTitle id="form-dialog-title">NEW NODE</DialogTitle>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <DialogContent>
                <DialogContentText>
                         <TextField  color="secondary"
                                     id="standard-basic"
                                     label="Name"
                                     value={value.name}
                                     fullWidth
                                     onChange={(e) => {
                                         setValue({...value,
                                             name:e.target.value,
                                             id: `${context.nodes.length}`})
                                     }}
                                     />
                         <TextField color="secondary"
                                    style={{marginTop: 5}}
                                    id="standard-basic"
                                    label="Group"
                                    value={value.group}
                                    fullWidth
                                    onChange={(e) => {
                                        setValue({...value,group:e.target.value})
                                    }}/>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    style={{marginRight: 15}}
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="small"
                    startIcon={<DoneIcon />}
                    onClick={(e) => e}
                >
                    Save
                </Button>
            </DialogActions>
            </form>

        </div>
        </>
    );
}

NewNode.propTypes = {
    setDialog: PropTypes.func
};

export default NewNode;

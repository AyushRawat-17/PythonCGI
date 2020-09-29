import React from 'react';
import './linux.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
function Linux() {
    return (
        <div className="Linux-Content">
            <div className="main-content">
                <div className="form-content">
                <i className="fab fa-redhat fa-7x hat" style={{color:"#E92C00"}}></i>
                <h1>Linux Command </h1>
                <form action="http://192.168.0.8/cgi-bin/linux.py">
                <TextField className="form-field" id="outlined-basic"  variant="outlined" placeholder="Enter the Command" name="x"/>
                <Button class="form-button" variant="contained" color="primary" type="submit">
                  Run
                </Button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Linux;

import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./docker.css";

function Docker() {
  const[visible,setvisible]=React.useState(false);
  const[image,setimage]=React.useState(false)
  const[button,setbutton]=React.useState(false)
  function showform(event){
    let form =event.target.value;
    if (form==="0"){
        setvisible(false);
        setimage(false);
        setbutton(false);
    }
    else if(form==="image"){
      setvisible(false);
      setimage(false);
      setbutton(true);
    }
    else if(form==="remove") {
        setvisible(true);
        setimage(false);
        setbutton(true);
    }
    else if(form==="launch"){
      setvisible(true);
      setimage(true);
      setbutton(true);
    }
  }

  return (
    <div>
      <div className="docker-content">
        <div className="docker-form">
          <i class="fab fa-docker fa-7x"></i>
          <h2>Docker Services</h2>
          <form action="http://192.168.0.8/cgi-bin/docker.py">
          <select onChange={showform} className="select-style" name="s" id="select-service">
              <option value="0">--Select Your Service--</option>
              <option value="launch">Launch a Container</option>
              <option value="remove">Remove a Container</option>
              <option value="image">Show available Images</option>
            </select>
            {image && 
              <select className="select-style" name="i" id="select-image">
              <option value="0">--Select Your Image--</option>
              <option value="ubu">Ubantu</option>
              <option value="cent">CentOS</option>
            </select>              
            }
            {visible && <TextField name="os" className="submit-field" label="Enter Container Name" variant="outlined" />}
            {button &&
             <Button style={{marginTop:"10px",display:"block"}} variant="contained" color="primary" type="submit">
              Submit
            </Button>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Docker;

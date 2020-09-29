import React from 'react'
import Paper from '@material-ui/core/Paper';
import './home.css';
import {Link} from 'react-router-dom';
function Home() {
    const dockerstyles = {
        color:"white",
        backgroundColor:"#38A2F1",
      };
    
      const linuxstyles = {
        color:"#E92C00",
        backgroundColor:"black",
      }
    
      // const filestyles = {
      //   color:"yellow",
      //   backgroundColor:"#46f251",
      // }
    
   
    return (
        <div>
            <div className="body-content">
          <div className="content-list">
            <Link exact to="/docker">
            <Paper className="paper-style" style={dockerstyles} elevation={3}>
              <i class="fab fa-docker fa-7x"></i>
              <h1>Docker</h1>
            </Paper>
            </Link>
            <Link exact to="/linux">
            <Paper className="paper-style" style={linuxstyles} elevation={3}>
              <i class="fab fa-redhat fa-7x"></i>
              <h1>Linux Command</h1>
            </Paper>
            </Link>
            {/* <Link exact to="/file">
            <Paper className="paper-style" style={filestyles} elevation={3}>
              <i class="far fa-file fa-7x"></i>
              <h1>File System</h1>
            </Paper>
            </Link> */}
          </div>
    </div>
        </div>
    );
}

export default Home;

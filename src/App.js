import React from 'react';
import Home from './Home';
import Linux from './Linux';
import Docker from './Docker';
// import File from './File';
import {Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/linux' component={Linux}/>
     <Route exact path='/docker' component={Docker}/>
     {/* <Route exact path='/file' component={File}/>  */}
    </Switch>   
  );
}

export default App;

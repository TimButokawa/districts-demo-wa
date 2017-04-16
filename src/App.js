import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header.component';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Districts from './routes/districts/Districts.container';
import DistrictsMap from './routes/map/DistrictsMap.container';
import Home from './routes/home/Home.container';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Header/>
            <div style={{marginTop: '64px', flexGrow: 1, padding: '24px'}}>
              <Route exact path='/' component={Home}/>
              <Route path='/districts' component={Districts}/>
              <Route path='/map' component={DistrictsMap}/>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

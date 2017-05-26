import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header.component';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Districts from './routes/districts/Districts.container';
import Map from './routes/map/Map.container';
import Home from './routes/home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Header/>
            <div style={{marginTop: '48px', flexGrow: 1, padding: '24px'}}>
              <Route exact path='/' component={Home}/>
              <Route path='/map' component={Map}/>
              <Route path='/districts' component={Districts}/>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

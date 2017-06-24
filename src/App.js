import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header.container';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './routes/home/Home.container';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <Header/>
            <div style={{height: '100%'}}>
              <Route exact path='/' component={Home}/>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;

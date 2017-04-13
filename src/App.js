import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header/Header.component';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header/>
          <div style={{paddingTop: '64px'}}>
            <h1>Hello World</h1>
            <h2>Main Content</h2>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

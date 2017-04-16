import React, {Component} from 'react';
import Layout from 'material-ui/Layout';

class Home extends Component {
  render() {
    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
        <img src="https://unsplash.it/1920/1080?image=1" alt="Contemplative Reptile" style={{maxWidth: '100%', display: 'block'}}/>
        <h1>Map of Washington State Districts</h1>
        </Layout>
      </Layout>
    );
  }
}

export default Home;

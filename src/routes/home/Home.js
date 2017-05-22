import React, {Component} from 'react';
import Layout from 'material-ui/Layout';
import {Link} from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
    const {districtsGeo} = this.props;
    if (!districtsGeo.length) {
      this.props.districtAction.requestDistrictsGeo();
    }
  }

  render() {
    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
        <img src="https://unsplash.it/1920/1080?image=2" alt="Contemplative Reptile" style={{maxWidth: '100%', display: 'block'}}/>
        <Link to="/districts">Districts Cards</Link>
        <br/>
        </Layout>
      </Layout>
    );
  }
}

export default Home;

import React, {Component} from 'react';
import Layout from 'material-ui/Layout';
import {Link} from 'react-router-dom';
import L from 'leaflet';

const styles = {
  map: {
    height: '500px'
  }
};

class Home extends Component {
  componentWillMount() {
    const {districtsGeo} = this.props;
    if (!districtsGeo.length) {
      this.props.districtAction.requestDistrictsGeo();
    }
  }

  componentDidMount() {
    const accessToken = 'pk.eyJ1IjoidGJ1dG9yIiwiYSI6ImNqMzBhYzgyeDAwOGczNW9rbDNhNDdhcGYifQ.q7B9wNdpPz_I6fIKmS2ZFw';
    const myMap = L.map('mapId', {
        center: [47.3816144, -119.5585346],
        zoom: 7
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      accessToken: accessToken
    }).addTo(myMap);
  }

  render() {
    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <div style={styles.map} id="mapId"></div>
          <Link to="/districts">Districts Cards</Link>
        </Layout>
      </Layout>
    );
  }
}

export default Home;

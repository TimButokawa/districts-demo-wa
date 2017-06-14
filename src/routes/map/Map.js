import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router';

import Loader from '../../components/loader/Loader.component';
import DistrictMap from '../../components/district-map/DistrictMap.component';

class Map extends Component {
  constructor(props) {
    super(props);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(route) {
    const {history} = this.props;
    history.push(route);
  }

  componentWillMount() {
    const {districtsGeo} = this.props;
    if (!districtsGeo.length) {
      this.props.districtAction.requestDistrictsGeo();
    }
  }

  render() {
    const {districtsGeo} = this.props;

    return (
      <Layout container gutter={16}>
        {districtsGeo.length ?
          <Layout container>
            <Layout item xs={12}>
              <DistrictMap districtsGeo={districtsGeo}/>
            </Layout>
            <Layout container align="center" justify="center">
              <Layout item>
                <Button onClick={() => this.handleNavigation('/')}>Back</Button>
              </Layout>
            </Layout>
          </Layout> : <Loader/>}
      </Layout>
    );
  }
}



Map.propTypes = {
  districtAction: PropTypes.object,
  districtsGeo: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(Map);

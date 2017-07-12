import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DistrictMap from '../../components/district-map/DistrictMap.component';
import DistrictList from '../../components/district-list/DistrictList.component';
import DistrictCard from '../../components/district-card/DistrictCard.component';
import PopulationChart from '../../components/population-chart/PopulationChart.component';
import Loader from '../../components/loader/Loader.component';
import Paper from 'material-ui/Paper';

const styles = {
  container: {
    height: '100%',
    display: 'flex',
  },
  aside: {
    overflowX: 'scroll',
    minWidth: '255px'
  },
  mainContent: {
    flexGrow: '1',
    padding: '16px',
    position: 'relative'
  },
  dialog: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1001,
    flexDirection: 'column'
  }
};

class Home extends Component {

  componentWillMount() {
    const {districts, demographics} = this.props;
    if (!districts.length) {
      this.props.districtGeoAction.requestDistrictsGeo();
    }

    if (!demographics.length) {
      this.props.demographicsAction.requestDemographics();
    }
  }

  render() {
    const {
      districts,
      selectedDistrict,
      selectedDemographics,
      favorites,
      displayFavorites,
      favoritesAction,
      districtGeoAction,
      demographicsAction,
      interfaceAction,
      chartType
    } = this.props;

    return (
      <div style={styles.container}>
        <Paper
          square
          style={styles.aside}>
          <DistrictList
            districts={districts}
            favoritesAction={favoritesAction}
            districtGeoAction={districtGeoAction}
            demographicsAction={demographicsAction}
            selectedDistrict={selectedDistrict}/>
        </Paper>
        <div style={styles.mainContent}>
          {selectedDistrict.length ?
            <div style={styles.dialog}>
              <DistrictCard
                action={interfaceAction}
                district={selectedDistrict[0]}
                chartType={chartType}>
                <PopulationChart data={selectedDemographics} chartType='bar'/>
              </DistrictCard>
            </div> : null}
          {districts.length ?
            <DistrictMap
              displayFavorites={displayFavorites}
              districts={districts}
              selectedDistrict={selectedDistrict}
              favorites={favorites}
              districtGeoAction={districtGeoAction}
              demographicsAction={demographicsAction}/> : <Loader/>}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  districts: PropTypes.array,
  demographics: PropTypes.array,
  selectedDistrict: PropTypes.array,
  selectedDemographics: PropTypes.object,
  favorites: PropTypes.array,
  districtGeoAction: PropTypes.object,
  demographicsAction: PropTypes.object,
  favoritesAction: PropTypes.object,
  interfaceAction: PropTypes.object,
  displayFavorites: PropTypes.bool,
  chartType: PropTypes.string
}

export default Home;

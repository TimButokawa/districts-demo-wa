import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import {withRouter} from 'react-router';
import DistrictCard from '../../components/district-card/DistrictCard.component';
import Button from 'material-ui/Button';
import Loader from '../../components/loader/Loader.component';
import {slice, filter} from 'lodash';

class Districts extends Component {
  constructor(props) {
    super(props);
    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  handleNavigation(route) {
    const {history} = this.props;
    history.push(route);
  }

  handleShowMore() {
    const {visibleIndexes} = this.props;
    this.props.districtAction.showMoreDistricts(visibleIndexes[1]);
  }

  componentWillMount() {
    const {districts} = this.props;
    if (!districts.length) {
      this.props.districtAction.requestDistricts();
    }
  }

  render() {
    const {districts, favorites, favoritesAction, visibleIndexes} = this.props;
    const visibleDistricts = slice(districts, visibleIndexes[0], visibleIndexes[1])
    const displayFavorites = filter(districts, 'isAFavorite');
    const displayDistricts = favorites.displayFavorites ? displayFavorites : visibleDistricts;

    const districtCards = displayDistricts.length ? displayDistricts.map((district, i) => {
      return <DistrictCard key={i} district={district} action={favoritesAction}/>;
    }) : <Loader/>;

    const showMore = visibleIndexes[1] <= displayDistricts.length ? (
      <Button onClick={() => this.handleShowMore()}>
        Show More
      </Button>
    ) : null;

    return (
      <Layout container gutter={16}>
        {districtCards}
        <Layout container align="center" justify="center">
          <Layout item>
            <Button onClick={() => this.handleNavigation('/')}>Back</Button>
            {showMore}
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

Districts.propTypes = {
  districtAction: PropTypes.object,
  favoritesAction: PropTypes.object,
  districts: PropTypes.array.isRequired,
  favorites: PropTypes.object.isRequired,
  visibleIndexes: PropTypes.array.isRequired,
  history: PropTypes.object
};

export default withRouter(Districts);

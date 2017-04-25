import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import DistrictCard from '../../components/district-card/DistrictCard.component';
import _ from 'lodash';

class Districts extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveFavorites = this.handleRemoveFavorites.bind(this);
    this.handleViewFavorites = this.handleViewFavorites.bind(this);
  }

  handleRemoveFavorites() {
    const {districts} = this.props;
    this.props.favoritesAction.removeFavorites(districts);
  }

  handleViewFavorites() {
    this.props.favoritesAction.viewFavoriteDistricts();
  }

  componentWillMount() {
    const {districts} = this.props;
    if (!districts.data.length) {
      this.props.districtAction.requestDistricts();
    }
  }

  render() {
    const {districts, favorites, favoritesAction} = this.props;
    const displayFavorites = _.filter(districts.data, 'isAFavorite');
    const displayDistricts = favorites.displayFavorites ? displayFavorites : districts.data;

    const content = displayDistricts.map((district, i) => {
      return <DistrictCard key={i} item={district} action={favoritesAction}/>;
    });

    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <span>Favorites: {displayFavorites.length}</span><br/>
          <span className="cursor-pointer" onClick={() => this.handleRemoveFavorites()}>Clear Favorites</span><br/>
          <span className="cursor-pointer" onClick={() => this.handleViewFavorites()}>View Favorites</span>
        </Layout>
        {content}
      </Layout>
    );
  }
}

Districts.propTypes = {
  districtAction: PropTypes.object,
  favoritesAction: PropTypes.object,
  districts: PropTypes.object.isRequired,
  favorites: PropTypes.object.isRequired
};

export default Districts;

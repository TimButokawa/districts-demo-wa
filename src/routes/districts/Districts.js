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
    this.props.action.removeFavorites()
  }

  handleViewFavorites() {
    this.props.action.viewFavoriteDistricts()
  }

  componentWillMount() {
    const {districts} = this.props;
    if (!districts.data.length) {
      this.props.action.requestDistricts();
    }
  }

  render() {
    const {districts, favorites, action} = this.props;
    const displayDistricts = favorites.displayFavorites ? _.filter(districts.data, 'isAFavorite') : districts.data;

    const content = displayDistricts.map((district, i) => {
      return <DistrictCard key={i} item={district} action={action}/>;
    });

    return (
      <Layout container gutter={16}>
        <Layout item xs={12}>
          <span>Favorites: {favorites.data.length}</span><br/>
          <span className="cursor-pointer" onClick={() => this.handleRemoveFavorites()}>Clear Favorites</span><br/>
          <span className="cursor-pointer" onClick={() => this.handleViewFavorites()}>View Favorites</span>
        </Layout>
        {content}
      </Layout>
    );
  }
}

Districts.propTypes = {
  action: PropTypes.object,
  districts: PropTypes.object.isRequired,
  favorites: PropTypes.object.isRequired
};

export default Districts;

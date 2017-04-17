import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import DistrictCard from '../../components/district-card/DistrictCard.component';

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

  render() {
    const {districts, favorites, action} = this.props;
    const content = favorites.displayFavorites ? favorites.data.map(favorite => {
      return <DistrictCard key={favorite.id} item={favorite} action={action}/>;
    }) : districts.map(district => {
      return <DistrictCard key={district.id} item={district} action={action}/>;
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
  districts: PropTypes.array.isRequired,
  favorites: PropTypes.object.isRequired
};

export default Districts;

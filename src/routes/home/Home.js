import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Layout from 'material-ui/Layout';
import {Card, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import {withRouter} from 'react-router';
import buildingTwo from '../../assets/building-two.jpg';
const styles = {
  image: {
    maxWidth: '100%',
    display: 'block'
  },
  caption: {
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#5E5E5E'
  },
  layout: {
    alignSelf: 'center'
  }
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleViewCards = this.handleViewCards.bind(this);
    this.handleViewMap = this.handleViewMap.bind(this);
  }

  handleViewCards() {
    const {history} = this.props;
    history.push('districts');
  }

  handleViewMap() {
    const {history} = this.props;
    history.push('map');
  }

  render() {
    return (
      <Layout container direction="row" gutter={16}>
        <Layout item xs={12} sm={6}>
          <Card>
            <CardMedia>
              <img style={styles.image} src={buildingTwo} alt="Old Capitol Building"/>
            </CardMedia>
            <CardContent>
              <span style={styles.caption}>"Washington Territory was created in 1853. It was carved out of the Oregon territory and consisted originally of all of what is now Washington and part of Idaho and Montana. President Franklin Pierce appointed Isaac I. Stevens, first territorial governor and he, upon arrival in the territory, called for elections to the legislative assembly which was to consist of a nine-member Council and an eighteen-member House." - History of the Washington Legislature, by Don Brazier</span>
            </CardContent>
          </Card>
        </Layout>
        <Layout style={styles.layout} item xs={12} sm={6}>
          <Layout container direction="row" align="center" justify="center">
            <Layout item>
              <Button onClick={() => this.handleViewMap()}>View Map</Button>
            </Layout>
            <Layout item>
              <Button onClick={() => this.handleViewCards()}>View Cards</Button>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

Home.propTypes = {
  history: PropTypes.object
}

export default withRouter(Home);

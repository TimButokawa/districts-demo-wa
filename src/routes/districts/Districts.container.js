import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Districts from './Districts';
import * as Actions from '../../actions';

const mapStateToProps = state => {
  return {
    districts: state.districts,
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Districts);

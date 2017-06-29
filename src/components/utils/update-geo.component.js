import PropTypes from 'prop-types';
import {GeoJSON}  from 'react-leaflet';

class UpdateGeoJSON extends GeoJSON {
    componentWillReceiveProps(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.leafletElement.clearLayers();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.leafletElement.addData(this.props.data);
        }
    }
}

UpdateGeoJSON.propTypes = {
    data: PropTypes.array.isRequired
};

export default UpdateGeoJSON;

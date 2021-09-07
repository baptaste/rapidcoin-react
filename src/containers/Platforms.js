import { connect } from 'react-redux';

import Platforms from 'src/components/Platforms';

const mapStateToProps = (state) => ({
  platforms: state.platforms,
});

const mapDispatchToProps = (dispatch) => ({
  getPlatforms: () => {
    dispatch({ type: 'GET_PLATFORMS' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Platforms);

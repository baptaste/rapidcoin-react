import { connect } from 'react-redux';

import Coins from 'src/components/Coins';

const mapStateToProps = (state) => ({
  coins: state.coins,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Coins);


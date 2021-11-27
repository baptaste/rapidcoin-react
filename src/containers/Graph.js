import { connect } from 'react-redux';
import Graph from 'src/components/Graph';

const mapStateToProps = (state) => ({
  chartData: state.chartData,
  chartValue: state.chartValue,
  coin: state.coin,
  isEUR: state.isEUR,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getMarketChart: () => {
    dispatch({ type: 'GET_MARKET_CHART' })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
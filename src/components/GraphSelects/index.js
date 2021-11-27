import React from 'react'

import './graph-selects.scss'

const GraphSelects = ({ setMarketChartValue, chartValue, coin }) => {

  return (
    <div className="selectValues">
      {coin.market_data.price_change_percentage_24h !== 0 ? (
         <button id="1" key="1" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "1" ? 'btnValue active' : 'btnValue'}>24H
        </button>
      ) : (
        <button id="1" key="1"
          className='btnValue disabled' type="button" disabled>24H
        </button>
      )}
      {coin.market_data.price_change_percentage_7d !== 0 ? (
         <button id="7" key="7" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "7" ? 'btnValue active' : 'btnValue'}>7D
        </button>
      ) : (
        <button id="7" key="7"
          className='btnValue disabled' type="button" disabled>7D
        </button>
      )}
      {coin.market_data.price_change_percentage_14d !== 0 ? (
         <button id="14" key="14" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "14" ? 'btnValue active' : 'btnValue'}>14D
        </button>
      ) : (
        <button id="14" key="14"
          className='btnValue disabled' type="button" disabled>14D
        </button>
      )}
      {coin.market_data.price_change_percentage_30d !== 0 ? (
         <button id="30" key="30" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "30" ? 'btnValue active' : 'btnValue'}>1M
        </button>
      ) : (
        <button id="30" key="30"
          className='btnValue disabled' type="button" disabled>1M
        </button>
      )}
      {coin.market_data.price_change_percentage_60d !== 0 ? (
         <button id="60" key="60" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "60" ? 'btnValue active' : 'btnValue'}>2M
        </button>
      ) : (
        <button id="60" key="60"
          className='btnValue disabled' type="button" disabled>2M
        </button>
      )}
      {coin.market_data.price_change_percentage_200d !== 0 ? (
         <button id="200" key="200" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "200" ? 'btnValue active' : 'btnValue'}>6M
        </button>
      ) : (
        <button id="200" key="200"
          className='btnValue disabled' type="button" disabled>6M
        </button>
      )}
      {coin.market_data.price_change_percentage_1y !== 0 ? (
         <button id="365" key="365" onClick={(e) => setMarketChartValue(e.target.id)}
          className={chartValue === "365" ? 'btnValue active' : 'btnValue'}>1Y
        </button>
      ) : (
        <button id="365" key="365"
          className='btnValue disabled' type="button" disabled>1Y
        </button>
      )}
    </div>
  )
};

export default GraphSelects;
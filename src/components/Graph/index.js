import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Loading from 'src/components/Loading';

import { getDecimalsLength } from 'src/utils'

import './graph.scss'

const Graph = ({ getMarketChart, chartData, chartValue, coin, isEUR, isLoading }) => {
  useEffect(() => {
    getMarketChart();
  }, [chartValue, isEUR]);

  const priceDecimals = getDecimalsLength(coin.market_data.current_price.eur)
  let currency,
      chartTime;

  if (isEUR) currency = '€'
  if (!isEUR) currency = '$'

  if (chartValue === '365') chartTime = 'over the year'
  if (chartValue === '200') chartTime = 'over the last 6 months'
  if (chartValue === '60') chartTime = 'over the last 2 months'
  if (chartValue === '30') chartTime = 'over the month'
  if (chartValue === '14') chartTime = 'over the last 2 weeks'
  if (chartValue === '7') chartTime = 'over the week'
  if (chartValue === '1') chartTime = 'in the last 24 hours'

  const options = {
    chart: {
      type: 'line',
      className: 'graph',
      style: {
        "font-family": "Source Sans Pro, sans-serif",
      },
      backgroundColor: 'transparent',
      marginRight: 0,
  },
  title: {
      text: `Price evolution ${chartTime}`,
      style: {
        "color": "#fff",
        "fontSize": "16px",
        fontWeight: 'bold'
      }
  },
  xAxis: {
      type: 'datetime',
  },
  yAxis: {
      title: {
        text: null
      },
      gridLineWidth: '.25px',
      gridLineColor: '#d2d2f9'
  },
  legend: {
      enabled: false
  },
  plotOptions: {
      series: {
          pointPadding: 0.4,
          borderWidth: 0,

      }
  },
  tooltip: {
    useHTML: true,
  },
  series: [
      {
        name: "Price",
        colorByPoint: false,
        data: chartData,
        // color: '#ffa366', LINE
        tooltip: {
          valueDecimals: priceDecimals,
          shared: true,
          useHTML: true,
          headerFormat: '<span style="font-size: 12px; font-weight: bold">{point.key}</span><br/>',
          pointFormat: '<span>{series.name}: </span>' +
              `<span style="text-align: right; font-weight: bold">{point.y} ${currency}</span>`,
          xDateFormat: '%d/%m/%Y',
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 700
          },
          chartOptions: {
            chart: {
              width: 782,
              height: 474,
            },
          },
        },
        {
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            chart: {
              width: 325,
              height: 450,
            },
          },
        },
      ],
    },
  };

  return (
    <div className="graph">
      {isLoading ? <Loading /> : <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};

export default Graph;
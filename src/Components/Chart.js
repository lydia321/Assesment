import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Inflation',
        data: [5, 50, 60, 80, 86, 95],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        background: 'transparent',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top',
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + '%';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#304758'],
        },
      },
      xaxis: {
        categories: [
          '2020',
          '2021',
          '2022',
          '2023',
          '2024',
          '2025',
        ],
        position: 'top',
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      title: {
        text: 'New Students',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444',
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Chart;

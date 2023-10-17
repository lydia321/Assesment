import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Header = () => {
  const options = {
    series: [
      {
        data: [2, 27, 59, 70],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        '2019',
        '2020',
        '2021',
        '2022',
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
};

export default Header;

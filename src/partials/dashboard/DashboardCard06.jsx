import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['487', '200', '404', '480', '403', '408', '486', '420', '484', '503'],
    datasets: [
      {
        label: 'Quantidade',
        data: [
          100, 30, 12, 10, 8, 6, 5, 3, 2, 2,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.red[500],
          tailwindConfig().theme.colors.green[500],
          tailwindConfig().theme.colors.violet[800],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.violet[500],

        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.red[600],
          tailwindConfig().theme.colors.green[600],
          tailwindConfig().theme.colors.violet[900],
          tailwindConfig().theme.colors.sky[500],
          tailwindConfig().theme.colors.violet[500],

        ],
        borderWidth: 0,
      },
    ],
  };

 

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">SIP Codes</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260}/>
    </div>
  );
}

export default DashboardCard06;

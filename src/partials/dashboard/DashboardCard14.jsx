import React from 'react';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import LineChart from '../../charts/LineChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard14() {

  const chartData = {
    labels: [
      '01-01-2024',
      '02-01-2024',
      '03-01-2024',
      '04-01-2024',
      '05-01-2024',
      '06-01-2024',
      '07-01-2024',
      '08-01-2024',
      '09-01-2024',
      '10-01-2024',
      '11-01-2024',
      '12-01-2024',
    ],
    datasets: [
      // Indigo line
      {
        label: 'Custo',
        data: [73, 64, 73, 69, 104, 104, 164, 164, 380, 321, 298, 305, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323],
        borderColor: tailwindConfig().theme.colors.violet[500],
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Valor das Chamadas</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard14;
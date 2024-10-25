import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Top 10 por TechPrefix</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-center">TechPrefix</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Código nacional</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Qtd Normais</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Qtd Curtas</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center"> %  Curtas</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">47444</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(11), (13), (41)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.4K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.877</div>
                </td>
                <td className="p-2">
                  <div className="text-center">67</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">41419</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(21), (22), (47)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.2K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">3.426</div>
                </td>
                <td className="p-2">
                  <div className="text-center">49</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">4747</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(13), (42), (51)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.0K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.444</div>
                </td>
                <td className="p-2">
                  <div className="text-center">24</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">41418</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(19), (48), (62)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.9K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.236</div>
                </td>
                <td className="p-2">
                  <div className="text-center">20</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">5957</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(81), (67), (54)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.7K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.191</div>
                </td>
                <td className="p-2">
                  <div className="text-center">14</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">47444</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(61), (11), (54)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.9K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.171</div>
                </td>
                <td className="p-2">
                  <div className="text-center">11</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">51544</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(44), (48), (51)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.3K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.032</div>
                </td>
                <td className="p-2">
                  <div className="text-center">9</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">51555</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(21), (45), (81)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.2K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.098</div>
                </td>
                <td className="p-2">
                  <div className="text-center">7</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">34914</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(13), (41), (11)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.1K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">521</div>
                </td>
                <td className="p-2">
                  <div className="text-center">7</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                    <div className="text-center text-gray-800 dark:text-gray-100">41418</div>
                </td>
                <td className="p-2">
                    <div className="text-center">(11), (21), (13)</div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.9K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">184</div>
                </td>
                <td className="p-2">
                  <div className="text-center">6</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;

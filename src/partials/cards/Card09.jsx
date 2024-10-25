import React, { useState } from 'react';
import Tooltip from '../../components/Tooltip';

function Card09() {
  
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Exemplo de dados (pode ser substituído por dados reais)
  const data = [
    {id: '1', ddd: '(11)', quantity: '1000'},
    {id: '2', ddd: '(21)', quantity: '980'},
    {id: '3', ddd: '(31)', quantity: '960'},
    {id: '4', ddd: '(41)', quantity: '940'},
    {id: '5', ddd: '(51)', quantity: '920'},
    {id: '6', ddd: '(61)', quantity: '900'},
    {id: '7', ddd: '(71)', quantity: '880'},
    {id: '8', ddd: '(81)', quantity: '860'},
    {id: '9', ddd: '(91)', quantity: '840'},
    {id: '10', ddd: '(12)', quantity: '820'},
    {id: '11', ddd: '(22)', quantity: '800'},
    {id: '12', ddd: '(32)', quantity: '780'},
    {id: '13', ddd: '(42)', quantity: '760'},
    {id: '14', ddd: '(52)', quantity: '740'},
    {id: '15', ddd: '(62)', quantity: '720'},
    {id: '16', ddd: '(72)', quantity: '700'},
    {id: '17', ddd: '(82)', quantity: '680'},
    {id: '18', ddd: '(92)', quantity: '660'},
    {id: '19', ddd: '(13)', quantity: '640'},
    {id: '20', ddd: '(23)', quantity: '620'},
    {id: '21', ddd: '(33)', quantity: '600'},
    {id: '22', ddd: '(43)', quantity: '580'},
    {id: '23', ddd: '(53)', quantity: '560'},
    {id: '24', ddd: '(63)', quantity: '540'},
    {id: '25', ddd: '(73)', quantity: '520'},
    {id: '26', ddd: '(83)', quantity: '500'},
    {id: '27', ddd: '(93)', quantity: '480'},
    {id: '28', ddd: '(14)', quantity: '460'},
    {id: '29', ddd: '(24)', quantity: '440'},
    {id: '30', ddd: '(34)', quantity: '420'},
    {id: '31', ddd: '(44)', quantity: '400'},
    {id: '32', ddd: '(54)', quantity: '380'},
    {id: '33', ddd: '(64)', quantity: '360'},
    {id: '34', ddd: '(74)', quantity: '340'},
    {id: '35', ddd: '(84)', quantity: '320'},
    {id: '36', ddd: '(94)', quantity: '300'},
    {id: '37', ddd: '(15)', quantity: '280'},
    {id: '38', ddd: '(25)', quantity: '260'},
    {id: '39', ddd: '(35)', quantity: '240'},
    {id: '40', ddd: '(45)', quantity: '220'},
    {id: '41', ddd: '(55)', quantity: '200'},
    {id: '42', ddd: '(65)', quantity: '180'},
    {id: '43', ddd: '(75)', quantity: '160'},
    {id: '44', ddd: '(85)', quantity: '140'},
    {id: '45', ddd: '(95)', quantity: '120'},
    {id: '46', ddd: '(16)', quantity: '100'},
    {id: '47', ddd: '(26)', quantity: '80'},
    {id: '48', ddd: '(36)', quantity: '60'},
    {id: '49', ddd: '(46)', quantity: '40'},
    {id: '50', ddd: '(56)', quantity: '20'}
  ];

  // Função para lidar com a mudança na seleção de linhas por página
  const handleRowsChange = (event) => {
    setRowsPerPage(Number(event.target.value));
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
        {/* Título */}
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
            Agressividade por Código Nacional
         </h2>

        {/* Seletor para número de linhas por página */}
        <div className="ml-auto flex items-center">
            <select
                id="rows-per-page"
                value={rowsPerPage}
                onChange={handleRowsChange}
                className="p-1 px-3 pr-8 border rounded dark:bg-gray-700 dark:text-gray-300 text-center appearance-none"
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
      </header>
      <div className="p-3">
        {/* Tabela */}
        <div className="overflow-x-auto ">
          <table className="table-auto w-full dark:text-gray-300 ">
            {/* Cabeçalho da Tabela */}
            <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Índice</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Código Nacional - DDD</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantidade</div>
                </th>
              </tr>
            </thead>
            {/* Corpo da Tabela */}
            <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
              {data.slice(0, rowsPerPage).map((item, index) => (
                <tr key={index}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">{item.id}</div>
                    </div>
                 </td>
                 <td className="p-2">
                      <div className="text-center">{item.ddd}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{item.quantity}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Card09;
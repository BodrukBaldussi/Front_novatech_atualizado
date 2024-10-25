import React, { useState } from 'react';
import Tooltip from '../../components/Tooltip';

function Card08() {
  
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Exemplo de dados (pode ser substituído por dados reais)
  const data = [
    {id: '1', number: '5585987471570', quantity: '100' },
    {id: '2', number: '554135645882', quantity: '35' },
    {id: '3', number: '554145645882', quantity: '31' },
    {id: '4', number: '554135648254', quantity: '31' },
    {id: '5', number: '554833729849', quantity: '28' },
    {id: '6', number: '554833789229', quantity: '28'},
    {id: '7', number: '554899889229', quantity: '28'},
    {id: '8', number: '553899774229', quantity: '28' },
    {id: '9', number: '5513899774239', quantity: '17' },
    {id: '10', number: '5534998135786', quantity: '17' },
    {id: '11', number: '5585987471570', quantity: '17' },
    {id: '12', number: '5531983524888', quantity: '17' },
    {id: '13', number: '551232092122', quantity: '11' },
    {id: '14', number: '554532273076', quantity: '11' },
    {id: '15', number: '5511959765284', quantity: '11' },
    {id: '16', number: '552830153588', quantity: '11' },
    {id: '11', number: '5521999242369', quantity: '11' },
    {id: '18', number: '5527998874493', quantity: '11' },
    {id: '19', number: '5511948601296', quantity: '11' },
    {id: '20', number: '5561984074260', quantity: '11' },
    {id: '21', number: '551141875941', quantity: '11' },
    {id: '22', number: '551147434847', quantity: '9' },
    {id: '23', number: '555332337100', quantity: '9' },
    {id: '24', number: '554434258800', quantity: '9' },
    {id: '25', number: '552137639690', quantity: '9' },
    {id: '26', number: '551156115544', quantity: '9' },
    {id: '27', number: '5581984358962', quantity: '9' },
    {id: '28', number: '552134184827', quantity: '9' },
    {id: '29', number: '5591993222512', quantity: '9' },
    {id: '30', number: '5511940376337', quantity: '5' },
    {id: '31', number: '5591991498794', quantity: '5' },
    {id: '32', number: '5522998240924', quantity: '5' },
    {id: '33', number: '5511946954927', quantity: '5' },
    {id: '34', number: '5598991225372', quantity: '5' },
    {id: '35', number: '553436699000', quantity: '5' },
    {id: '36', number: '5561991609093', quantity: '5' },
    {id: '37', number: '554136420068', quantity: '5' },
    {id: '38', number: '551936216687', quantity: '3' },
    {id: '39', number: '553121263700', quantity: '3' },
    {id: '40', number: '5511953543993', quantity: '3' },
    {id: '41', number: '5511980629597', quantity: '3' },
    {id: '42', number: '5531998062511', quantity: '3' },
    {id: '43', number: '5585996552157', quantity: '3' },
    {id: '44', number: '5591985380418', quantity: '3' },
    {id: '45', number: '5521969624784', quantity: '3' },
    {id: '46', number: '5511966934132', quantity: '3' },
    {id: '47', number: '556239424441', quantity: '3' },
    {id: '48', number: '5586995913123', quantity: '3' },
    {id: '49', number: '5571986545783', quantity: '3' },
    {id: '50', number: '5511987790107', quantity: '3' },
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
            Quantidade de Ligações por número
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
                  <div className="font-semibold text-center">Número Discado</div>
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
                      <div className="text-center">{item.number}</div>
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

export default Card08;
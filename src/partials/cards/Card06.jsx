import React, { useState } from 'react';
import Tooltip from '../../components/Tooltip';
import ModalConfig from '../../components/ModalConfig';

function Card06() {

  const [ configModalOpen, setConfigModalOpen] = useState(false)

    return (
      <div className="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <header className="px-5 py-5 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">487 - REQUEST TERMINATED</h2>
          <Tooltip className="m-2 flex-grow">
            <div className="text-xs text-center whitespace-nowrap">Números inativos por 6 horas</div>
          </Tooltip>
          <div>
            <button 
              className={`btn mr-2 bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ${configModalOpen && 'bg-gray-200 dark:bg-gray-800'}`}
                onClick={(e) => { e.stopPropagation(); setConfigModalOpen(true); }}
                aria-controls="config-modal"
                >
                <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="max-xs:sr-only">Configurações</span>
            </button> 
            <ModalConfig id="config-modal" modalOpen={configModalOpen} setModalOpen={setConfigModalOpen} /> 
          </div>
          
        </header>
        <div className="p-3">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full dark:text-gray-300">
              {/* Table header */}
              <thead className="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50 rounded-sm">
                <tr>
                  <th className="p-2">
                    <div className="font-semibold text-left">Números</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Datetime</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-gray-100 dark:divide-gray-700/60">
                {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5524998156244</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5511998075703</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5521994953666</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">551194120177</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5571987187329</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">55582981537523</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">556232270026</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5511959616826</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5524988810768</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
                {/* Row */}
                <tr>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-gray-800 dark:text-gray-100">5554996031048</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">23/10/2024 15:00:01</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
export default Card06;
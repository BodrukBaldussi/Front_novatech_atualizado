import { useState } from "react";
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard14 from "../partials/dashboard/DashboardCard14";
import Card01 from "../partials/cards/Card01";
import Card02 from "../partials/cards/Card02";
import Card03 from "../partials/cards/Card03";
import Heatmap from "../charts/HeatMap";
import Card08 from "../partials/cards/Card08";
import Card09 from "../partials/cards/Card09";

function RelatorioAgressividade(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">

          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
    
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    
            <main className="grow">
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    
                {/* actions */}
                <div className="sm:flex sm:justify-between sm:items-center mb-8">
    
                  {/* Left: Title */}
                  <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Relatório Agressividade</h1>
                  </div>
    
                  {/* Right: Actions */}
                  <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                    {/* Filter button */}
                    <FilterButton align="right" />
                    {/* Datepicker built with flatpickr */}
                    <Datepicker align="right" />
                    {/* Add view button */}
                    <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                      <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span className="max-xs:sr-only">Filtrar</span>
                    </button>                
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                  <Card08 />
                  <Card09 />
                  {/* <Heatmap /> */}

                </div>
                 
                
             
              </div>
            </main>   
          </div>
        </div>
      );
    
}

export default RelatorioAgressividade;
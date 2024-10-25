import React from 'react';

function Card02() {

 return (
    <div className="flex flex-col col-span-full sm:col-span-4 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <svg class="size-6 text-gray-500 dark:text-gray-400 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">4321</h5>
         <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Total de minutos no período</p>
       </div>
    </div>
    
  );
}

export default Card02;
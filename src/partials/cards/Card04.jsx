import React from 'react';

function Card04() {

 return (
  <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">487 - REQUEST TERMINATED</h2>
        </header>
        <div className="px-5 py-4">
          <h5 class="text-center mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">100</h5>
          <p class="text-center mb-3 font-normal text-gray-500 dark:text-gray-400">Números Inativados</p>
        </div>
  </div>
    
  );
}

export default Card04;
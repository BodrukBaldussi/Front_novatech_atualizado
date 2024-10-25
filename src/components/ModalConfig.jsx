import React, { useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function ModalConfig({
  id,
  modalOpen,
  setModalOpen,
}) {

  const modalContent = useRef(null);
  const periodInput = useRef(null);

  // Fecha o modal ao clicar fora
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [modalOpen, setModalOpen]);

  // Fecha o modal ao clicar esc
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // Coloca o foco no primeiro input quando o modal é aberto
  useEffect(() => {
    modalOpen && periodInput.current.focus();
  }, [modalOpen]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-20 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 overflow-auto max-w-md w-full max-h-full rounded-lg shadow-lg p-4"
        >
              
          {/* Header do Modal */}
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4 flex justify-between items-center">
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Configurações
            </h3>
            <button
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setModalOpen(false)}
            >
              <span className="sr-only">Fechar</span>
              {/* Ícone de X */}
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Formulário de Configurações */}
          <form className="py-4 space-y-4">
            {/* Campo para o Período */}
            <div>
              <label className="text-center block text-sm font-medium text-gray-700 dark:text-gray-300">
                Período de Análise (em horas)
              </label>
              <input
                ref={periodInput}
                type="number"
                className="mt-1 block w-1/2 mx-auto border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Ex: 24"
              />
            </div>

            {/* Campo para a Frequência */}
            <div>
              <label className="text-center block text-sm font-medium text-gray-700 dark:text-gray-300">
                Frequência de Ocorrência
              </label>
              <select
                className="mt-1 block block w-1/2 mx-auto border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>1x</option>
                <option>2x</option>
                <option>3x</option>
                <option>4x</option>
                <option>5x</option>
              </select>
            </div>

            {/* Campo para o Número */}
            <div>
              <label className="text-center block text-sm font-medium text-gray-700 dark:text-gray-300">
                Tempo de Bloqueio (em horas)
              </label>
              <input
                ref={periodInput}
                type="number"
                className="mt-1 block block w-1/2 mx-auto border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Ex: 24"
              />
            </div>

            {/* Botão de Salvar */}
            <div className="pt-4">
              <button
                type="button"
                className="block w-1/2 mx-auto justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                onClick={() => setModalOpen(false)}
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </Transition>
    </>
  );
}

export default ModalConfig;
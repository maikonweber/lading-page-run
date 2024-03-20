'use client'
import React, { useEffect, useState } from 'react';
import AddCaixaButton from '../AddCaixaButton';
import Table from '../Table';
import Modal from '../Modal'; // Importe o componente Modal aqui

const ContainerMain = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  useEffect(() => {
    console.log(isAddModalOpen, isTableModalOpen)
  }, [isTableModalOpen, isAddModalOpen])

  // Funções para abrir e fechar os modais
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const openTableModal = () => setIsTableModalOpen(true);
  const closeTableModal = () => setIsTableModalOpen(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <main className="flex-1 p-4 overflow-hidden">
        <h1 className="text-3xl font-bold mb-4">Entrada</h1>
        <div className="m-3">
          <AddCaixaButton modal={openAddModal} />
          <Table url="http://localhost:3032/caixa/get-despesa" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Saída</h1>
        <div className="m-3">
          <AddCaixaButton onClick={openTableModal} modal={openTableModal} />
          <Table url="http://localhost:3032/caixa/get-despesa" />
        </div>
      </main>
      {/* Modal para adicionar */}
      <Modal isOpen={isAddModalOpen} onClose={closeAddModal}>
        {/* Conteúdo do modal de adição */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Adicionar Item</h2>
          {/* Conteúdo do formulário de adição */}
        </div>
      </Modal>
      {/* Modal para tabela */}
      <Modal isOpen={isTableModalOpen} onClose={closeTableModal}>
        {/* Conteúdo do modal de tabela */}
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Tabela</h2>
          {/* Conteúdo da tabela */}
        </div>
      </Modal>
    </div>
  );
};

export default ContainerMain;

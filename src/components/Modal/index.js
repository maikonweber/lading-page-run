'use client'
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [inputValues, setInputValues] = useState({
        nome: '',
        valor: 0,
        user_id: '',
        sub_tipo: '',
        type: 'Despesa', // Valor padrão
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Faça o que desejar com os valores do formulário
        console.log(inputValues);

        setLoading(true);

        const createCaixaDto = {
            nome: 'Example',
            typo: 'RECEITA', // Adjust as needed
            valor: 50.0, // Adjust as needed
            sub_tipo: 'SubTypeA', // Adjust as needed
        };

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ createCaixaDto, user_id }),
            });

            if (response.ok) {
                console.log('Data added successfully');
                // You can fetch the updated data or perform other actions here
            } else {
                console.error('Failed to add data');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }

        onClose(); // Feche o modal após a submissão
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-75 ${isOpen ? '' : 'hidden'
                }`}
        >
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Adicionar Transação</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="field1" className="block text-sm font-medium text-gray-700">
                            Campo 1
                        </label>
                        <input
                            type="text"
                            id="field1"
                            name="field1"
                            value={inputValues.field1}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    {/* Repita os blocos acima para os outros campos de texto */}
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Tipo
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={inputValues.type}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        >
                            <option value="Despesa">Despesa</option>
                            <option value="Receita">Receita</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {

    const [inputValues, setInputValues] = useState({
        nome: '',
        valor: 0,
        sub_tipo: '',
        typo: 'Despesa', // Default value
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


        const { nome, valor, sub_tipo, typo } = inputValues;

        const uppercaseType = typo.toUpperCase()

        const sendeData = { nome, valor, sub_tipo, typo: uppercaseType }

        console.log(getCookie('token'))

        try {
            const response = await fetch('http://localhost:3032/caixa/add-fluxo-caixa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getCookie('token')}`, // Assuming you have a function to get token from cookie
                },
                body: JSON.stringify(sendeData)
            });

            if (response.ok) {
                console.log('Data added successfully');
                onPageUpdate();
                
                // You can fetch the updated data or perform other actions here
            } else {
                console.error('Failed to add data');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            onClose(); // Close the modal after submission
        }
    };


    return (
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-75 ${isOpen ? '' : 'hidden'}`}>
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Adicionar Transação</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={inputValues.nome}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <label htmlFor="valor" className="block text-sm font-medium text-gray-700">Valor</label>
                        <input
                            type="number"
                            id="valor"
                            name="valor"
                            value={inputValues.valor}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <label htmlFor="sub_tipo" className="block text-sm font-medium text-gray-700">Subtipo</label>
                        <input
                            type="text"
                            id="sub_tipo"
                            name="sub_tipo"
                            value={inputValues.sub_tipo}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">Tipo</label>
                        <select
                            id="type"
                            name="typo"
                            value={inputValues.typo}
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

const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return '';
};

export default Modal;

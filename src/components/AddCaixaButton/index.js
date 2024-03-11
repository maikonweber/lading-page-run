// components/AddCaixaButton.js
"use client"
import React, { useState } from 'react';

const AddCaixaButton = ({ user_id }) => {
    const [loading, setLoading] = useState(false);

    const handleAddCaixa = async () => {
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
    };

    return (
        <button
            className={`bg-blue-500 text-white px-4 py-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleAddCaixa}
            disabled={loading}
        >
            {loading ? 'Adding...' : 'Add Caixa'}
        </button>
    );
};

export default AddCaixaButton;

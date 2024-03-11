'use client'

import React, { useEffect, useState } from 'react';

const Table = () => {


    const [data, setData] = useState([{ id: 1, date: '2024-03-10T12:30:00' },
    { id: 2, date: '2024-03-11T15:45:00' },
    { id: 3, date: '2024-03-12T09:00:00' },]);

    useEffect(() => {
        // Fetch data from your API endpoint
        const fetchData = async () => {
            try {
                const response = await fetch('YOUR_API_ENDPOINT');
                const jsonData = await response.json();


                // setData(simulatedData);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto mt-8">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b">ID</th>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b">Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 border">{item.id}</td>
                            <td className="py-2 px-4 border">{formatDate(item.date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
    return formattedDate;
};

export default Table;
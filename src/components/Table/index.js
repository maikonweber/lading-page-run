'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Table = ({ url }) => {
    const [data, setData] = useState([]);
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Retrieve the Bearer token from the cookie
                const token = getCookie('token');
                console.log(token)
                // Fetch data from the API endpoint using the token for authorization
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });


                const jsonData = await response.json();
                if (jsonData.statusCode === 403) {
                    router.push('/login')
                    console.log(jsonData.statusCode)
                }
                console.log(jsonData)
                setData(jsonData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return
    }, [url, router]);

    return (
        <div className="container mx-auto mt-8">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b">ID</th>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b"> Nome </th>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b"> Tipo </th>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b"> Valor </th>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b"> Modalida </th>
                        <th className="py-2 px-4 bg-gray-800 text-white font-semibold border-b"> Data </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) => (
                        <tr key={item.id}>
                            <td className="py-2 px-4 border">{item.id}</td>
                            <td className="py-2 px-4 border">{item.nome}</td>
                            <td className="py-2 px-4 border">{item.sub_tipo}</td>
                            <td className="py-2 px-4 border">{item.valor}</td>
                            <td className="py-2 px-4 border">{item.typo}</td>
                            <td className="py-2 px-4 border">{formatDate(item.registre_date)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}


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

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
    return formattedDate;
};

export default Table;
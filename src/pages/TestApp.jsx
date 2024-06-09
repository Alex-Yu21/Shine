// src/App.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const TestApp = () => {
    const [vacancies, setVacancies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/vacancies');
                setVacancies(response.data); // Предполагая, что API возвращает массив объектов
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
                setError('Ошибка при получении данных');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Вакансии</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {vacancies.map((vacancy, index) => (
                        <li key={index}>
                            <h2>{vacancy.title}</h2>
                            <p><strong>Обязанности:</strong> {vacancy.duties}</p>
                            <p><strong>Требования:</strong> {vacancy.requirements}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TestApp;
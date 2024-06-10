// src/components/Treatments.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Treatments.module.css';

const treatmentsData = [
    {
        id: 'волосы',
        title: 'Волосы',
        services: [
            { name: 'Окрашивание в один тон (без учета материалов)', price: 'от 2 800' },
            { name: 'Сложное окрашивание (без учета материалов)', price: 'от 6 200' },
            { name: 'Тонирование', price: 'от 2 700' },
            { name: 'Стрижка', price: 'от 1 300' },
            { name: 'Укладка', price: 'от 2 700' },
            { name: 'Лечение волос', price: 'от 3 000' },
            { name: 'Кератиновое выпрямление', price: 'от 5 000' },
        ],
    },
    {
        id: 'массаж',
        title: 'Массаж',
        services: [
            { name: 'Спортивный общий 60 мин', price: '3 000' },
            { name: 'Лимфодренажный 90 мин', price: '3 700' },
            { name: 'Антицеллюлитный 60 мин', price: '3 200' },
            { name: '"Плоский живот" 60 мин', price: '2 500' },
            { name: 'С солевым пилингом 60 мин', price: '4 000' },
            { name: 'Расслабляющий массаж 60 мин', price: '3 500' },
            { name: 'Ароматерапевтический массаж 60 мин', price: '3 800' },
        ],
    },
    {
        id: 'косметология',
        title: 'Косметология',
        services: [
            { name: 'Ботулоксиды', price: 'от 140 за единицу' },
            { name: 'Биоревитализация\\Мезотерапия', price: 'от 13 400 за мл' },
            { name: 'Чистка лица', price: 'от 4 200' },
            { name: 'Хиромассаж', price: 'от 2 500' },
            { name: 'Пилинг лица', price: 'от 5 000' },
            { name: 'Уход за кожей лица', price: 'от 3 500' },
            { name: 'Лазерная терапия', price: 'от 7 000' },
        ],
    },
    {
        id: 'маникюр',
        title: 'Маникюр',
        services: [
            { name: 'Маникюр, покрытие гель-лак, снятие предыдущего покрытия', price: 'от 2 850' },
            { name: 'Маникюр и покрытие гель-лаком (French, лунный French)', price: 'от 3 000' },
            { name: 'Маникюр и покрытие гель-лак', price: 'от 3 000' },
            { name: 'Маникюр без покрытия', price: 'от 1 200' },
            { name: 'Снятие гель лака', price: '800' },
            { name: 'SPA маникюр', price: 'от 3 500' },
            { name: 'Парафинотерапия', price: 'от 1 500' },
        ],
    },
    {
        id: 'солярий',
        title: 'Солярий',
        services: [
            { name: 'Сеанс от 1 до 10 мин', price: '250' },
            { name: 'Сеанс от 11 до 15 мин', price: '375' },
        ],
    },
    {
        id: 'макияж',
        title: 'Макияж',
        services: [
            { name: 'Дневной', price: 'от 3 200' },
            { name: 'Вечерний', price: 'от 4 200' },
            { name: 'Свадебный', price: 'от 4 200' },
            { name: 'Экспресс', price: 'от 2 000' },
            { name: 'Лифтинг макияж 50+', price: 'от 4 200' },
            { name: 'Фантазийный макияж', price: 'от 5 000' },
            { name: 'Макияж для фотосессий', price: 'от 4 500' },
        ],
    },
    {
        id: 'эпиляция',
        title: 'Эпиляция',
        services: [
            { name: 'Шугаринг подмышечная зона', price: 'от 800' },
            { name: 'Шугаринг зона бикини', price: 'от 2 500' },
            { name: 'Шугаринг ноги до колен', price: 'от 1 800' },
            { name: 'Шугаринг ноги полностью', price: 'от 2 800' },
            { name: 'Шугаринг руки', price: 'от 1 000' },
        ],
    },
    {
        id: 'для_мужчин',
        title: 'Для мужчин',
        services: [
            { name: 'Стрижка с укладкой', price: 'от 1 800' },
            { name: 'Мужская укладка', price: 'от 1 200' },
            { name: 'Стрижка наголо, окантовка', price: '1 000' },
            { name: 'Стрижка усов, бороды', price: 'от 900' },
            { name: 'Камуфляж седины', price: 'от 1 800' },
            { name: 'Мужской маникюр', price: 'от 2 000' },
            { name: 'Мужская эпиляция', price: 'от 2 500' },
        ],
    },
];

const Treatments = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryId = searchParams.get('category');
    const [activeTab, setActiveTab] = useState(categoryId || treatmentsData[0].id);

    useEffect(() => {
        if (categoryId) {
            setActiveTab(categoryId);
        }
    }, [categoryId]);

    const handleTabClick = (id) => {
        setActiveTab(id);
        setSearchParams({ category: id });
    };

    return (
        <main className={styles.container}>
            <div className={styles.tabs}>
                {treatmentsData.map((category) => (
                    <button
                        key={category.id}
                        className={`${styles.tabButton} ${activeTab === category.id ? styles.active : ''}`}
                        onClick={() => handleTabClick(category.id)}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {treatmentsData.map((category) => (
                <section
                    id={category.id}
                    className={`${styles.tabContent} ${activeTab === category.id ? styles.active : ''}`}
                    key={category.id}
                >
                    <h2>{category.title}</h2>
                    <table className={styles.servicesTable}>
                        <tbody>
                        {category.services.map((service, index) => (
                            <tr key={index}>
                                <td>{service.name}</td>
                                <td>{service.price}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            ))}

            <div className={styles.warning}>
                *Цены носят ознакомительный характер. <br /> Окончательную стоимость услуги Вам назовет специалист в салоне.
            </div>
        </main>
    );
};

export default Treatments;
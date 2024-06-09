import { useEffect, useState } from 'react';
import styles from './JobOffers.module.css';
import Vacancy from './Vacancy';
import teamImage from '../../public/images/team.png';

const JobOffers = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        fetch('/api/vacancies')
            .then(response => response.json())
            .then(data => setVacancies(data))
            .catch(error => console.error('Error fetching vacancies:', error));
    }, []);

    return (
        <main>
            <div className={styles['vacancy-section']}>
                <div className={styles['image-container']}>
                    <img src={teamImage} alt="коллектив" className={styles['background-image']} />
                    <div className={styles['text-overlay']}>
                        <h2>Наши вакансии</h2>
                        <p>Мы ищем талантливых и целеустремленных людей, которые разделяют наши ценности и готовы расти вместе с нами.</p>
                        <button onClick={scrollToContactForm} className={`btn-black ${styles['btn-black']}`}>Откликнуться</button>
                    </div>
                </div>
                {vacancies.map((vacancy, index) => (
                    <Vacancy
                        key={index}
                        title={vacancy.title}
                        duties={vacancy.duties}
                        requirements={vacancy.requirements}
                    />
                ))}
            </div>
            <div className={styles['contact-form']} id="contact-form">
                <h3>Напишите нам</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Enter your Name</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Enter a valid email address</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Enter your message</label>
                        <textarea className="form-control" id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </main>
    );
};

function scrollToContactForm() {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

export default JobOffers;
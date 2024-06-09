import PropTypes from 'prop-types';
import styles from './JobOffers.module.css';

const Vacancy = ({ title, duties, requirements}) => {
    return (
        <div className={styles.vacancy}>
            <h3>{title}</h3>
            <p>{duties}</p>
            <p>{requirements}</p>
            <button onClick={scrollToContactForm} className={`btn-black ${styles['btn-black']}`}>Откликнуться</button>
        </div>
    );
};

Vacancy.propTypes = {
    title: PropTypes.string.isRequired,
    duties: PropTypes.string.isRequired,
    requirements: PropTypes.string.isRequired
};

function scrollToContactForm() {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

export default Vacancy;
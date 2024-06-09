import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import JobOffers from './pages/JobOffers';
import './App.css';
import whatsappImage from '../public/images/whatsapp.png';
import telegramImage from '../public/images/telegram.png';
import vkImage from '../public/images/vk.png';
import signature from '../public/images/signature.png';
import contactsImage from '../public/images/contacts.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ scrollToAboutUs }) => (
    <header>
        <div className="header-container">
            <div className="logo">
                <Link to="/">S H I N E</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/treatments">Услуги</Link></li>
                    <li><a onClick={scrollToAboutUs} className="about-us-link">О нас</a></li>
                    <li><Link to="/joboffers">Вакансии</Link></li>
                    <button onClick={openContactsPopup}>Записаться</button>
                </ul>
            </nav>
        </div>
    </header>
);

const ContactPopup = () => (
    <div className="popup" id="contactPopup">
        <div className="popup-content">
            <div className="contact-photo">
                <img src={contactsImage} alt="Contact Photo" />
                <div className="social-icons">
                    <a href="https://wa.me/89992119875" target="_blank" rel="noopener noreferrer">
                        <img src={whatsappImage} alt="WhatsApp" />
                    </a>
                    <a href="https://t.me/shinebeautyspb" target="_blank" rel="noopener noreferrer">
                        <img src={telegramImage} alt="Telegram" />
                    </a>
                    <a href="https://vk.com/shinespb" target="_blank" rel="noopener noreferrer">
                        <img src={vkImage} alt="VK" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const AboutUs = () => (
    <div id="about-us" className="about-us">
        <h1 className="about-us-header">О нас</h1>
        <h2>ЗАБОТИМСЯ О ВАС И ВАШЕМ КОМФОРТЕ</h2>
        <p>
            Мы не только создаём красивый образ и здоровое тело. Наша любовь к делу незримо ощущается <br />
            в деталях и окутывает вас атмосферой чуткого и заботливого отношения.
        </p>
        <h2>ИДЁМ В НОГУ СО ВРЕМЕНЕМ</h2>
        <p>
            Наши мастера не перестают совершенствовать профессиональные навыки и регулярно повышают <br />
            квалификацию в Европе. Это помогает нам всегда оставаться на пике модных тенденций <br />
            и новейших технологий.
        </p>
        <div className="signature">
            <img src={signature} alt="SHINE" />
        </div>
    </div>
);

const Footer = () => (
    <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <Link to="/">S H I N E</Link>
            </div>
            <div className="footer-text">
                <p>&copy; +7 (906) 211 98 76 <br /> г. Санкт Петербург Рижский проспект дом 8 парадная 2​</p>
            </div>
            <div className="footer-social-icons">
                <a href="https://wa.me/89992119875" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappImage} alt="WhatsApp" />
                </a>
                <a href="https://t.me/shinebeautyspb" target="_blank" rel="noopener noreferrer">
                    <img src={telegramImage} alt="Telegram" />
                </a>
                <a href="https://vk.com/shinespb" target="_blank" rel="noopener noreferrer">
                    <img src={vkImage} alt="VK" />
                </a>
            </div>
        </div>
    </footer>
);

const App = () => {
    const aboutUsRef = useRef(null);

    const scrollToAboutUs = () => {
        if (aboutUsRef.current) {
            aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Header scrollToAboutUs={scrollToAboutUs} />
            <Routes>
                <Route path="/" element={<Home aboutUsRef={aboutUsRef} />} />
                <Route path="/treatments" element={<Treatments />} />
                <Route path="/joboffers" element={<JobOffers />} />
            </Routes>
            <ContactPopup />
            <Footer />
        </div>
    );
};

function openContactsPopup() {
    document.getElementById('contactPopup').style.display = 'block';
}

window.onclick = function(event) {
    var popup = document.getElementById('contactPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

Header.propTypes = {
    scrollToAboutUs: PropTypes.func.isRequired,
};

export default App;
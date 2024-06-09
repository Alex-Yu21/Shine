import React from 'react';
import { Carousel as BootstrapCarousel, Button } from 'react-bootstrap';
import styles from './Home.module.css';
import signature from "../../public/images/signature.png";  // Импортируем CSS-модуль

const serverUrl = ""; // URL вашего сервера

const promotions = [
    {
        src: `${serverUrl}/images/promotion_1.png`,
        alt: "Первый слайд",
        title: "Порадуйте себя",
        description: "При любом массаже лица,<br />альгинатная маска в подарок.",
    },
    {
        src: `${serverUrl}/images/promotion_2.png`,
        alt: "Второй слайд",
        title: "Подарок мертвого моря",
        description: "Солевые массажные<br /> смеси из Израиля.",
    },
    {
        src: `${serverUrl}/images/promotion_3.png`,
        alt: "Третий слайд",
        title: "Истинная красота",
        description: "Дневной макияж со скидкой 30%<br />для постоянных клиентов.",
    }
];

const services = [
    { href: "treatments?category=волосы", src: `${serverUrl}/images/hair.jpg`, alt: "Волосы", text: "ВОЛОСЫ" },
    { href: "treatments?category=массаж", src: `${serverUrl}/images/massage.jpg`, alt: "Массаж", text: "МАССАЖ" },
    { href: "treatments?category=косметология", src: `${serverUrl}/images/cosmetology.jpg`, alt: "Косметология", text: "КОСМЕТОЛОГИЯ" },
    { href: "treatments?category=маникюр", src: `${serverUrl}/images/manicure.jpg`, alt: "Маникюр", text: "МАНИКЮР" },
    { href: "treatments?category=солярий", src: `${serverUrl}/images/tanning.jpg`, alt: "Солярий", text: "СОЛЯРИЙ" },
    { href: "treatments?category=макияж", src: `${serverUrl}/images/makeup.jpg`, alt: "Макияж", text: "МАКИЯЖ" },
    { href: "treatments?category=эпиляция", src: `${serverUrl}/images/epilation.jpg`, alt: "Эпиляция", text: "ЭПИЛЯЦИЯ" },
    { href: "treatments?category=для_мужчин", src: `${serverUrl}/images/for_men.jpg`, alt: "Для мужчин", text: "МУЖЧИНАМ" },
];

const Carousel = () => (
    <BootstrapCarousel>
        {promotions.map((promo, index) => (
            <BootstrapCarousel.Item key={index} className={index === 0 ? "active" : ""}>
                <img className="d-block w-100" src={promo.src} alt={promo.alt} />
                <div className={styles["description"]}>
                    <h3>{promo.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: promo.description }}></p>
                    <Button onClick={openContactsPopup}>Записаться</Button>
                </div>
            </BootstrapCarousel.Item>
        ))}
    </BootstrapCarousel>
);

const Services = () => (
    <div className={styles["services"]}>
        <h2 className={styles['services-header']}><a href="treatments">УСЛУГИ</a></h2>
        <div className={styles["row"]}>
            {services.slice(0, 4).map((service, index) => (
                <div className={styles["column"]} key={index}>
                    <a href={service.href}>
                        <img src={service.src} alt={service.alt} />
                        <div>{service.text}</div>
                    </a>
                </div>
            ))}
        </div>
        <div className={styles["row"]}>
            {services.slice(4).map((service, index) => (
                <div className={styles["column"]} key={index}>
                    <a href={service.href}>
                        <img src={service.src} alt={service.alt} />
                        <div>{service.text}</div>
                    </a>
                </div>
            ))}
        </div>
    </div>
);

const PromoBox = () => (
    <div className={styles["split-container"]}>
        <div className={styles["top-half"]}></div>
        <div className={styles["promo-box"]}>
            <p>НОВЫМ <br /> КЛИЕНТАМ <br /> СКИДКА 30%</p>
            <Button onClick={openContactsPopup}>Записаться</Button>
        </div>
        <div className={styles["bottom-half"]}></div>
    </div>
);


const AboutUs = React.forwardRef((props, ref) => (
    <div id="about-us" className="about-us" ref={ref}>
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
));

const Home = ({ aboutUsRef }) => (
    <div>
        <Carousel />
        <Services />
        <PromoBox />
        <AboutUs ref={aboutUsRef} />
    </div>
);

function openContactsPopup() {
    document.getElementById('contactPopup').style.display = 'block';
}

export default Home;
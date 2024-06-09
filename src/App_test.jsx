import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import JobOffers from './pages/JobOffers';
import './App.css';
import whatsappImage from './assets/images/whatsapp.png';
import telegramImage from './assets/images/telegram.png';
import vkImage from './assets/images/vk.png';

function App_test() {
    const openContactsPopup = () => {
        alert('Open Contacts Popup');
    };

    return (
        <>
            <header>
                <div className="header-container">
                    <div className="logo">
                        <Link to="/">S H I N E</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/treatments">Услуги</Link></li>
                            <li><a href="/#about-us">О нас</a></li>
                            <li><Link to="/joboffers">Вакансии</Link></li>
                            <button onClick={openContactsPopup}>Записаться</button>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/treatments" element={<Treatments/>}/>
                    <Route path="/joboffers" element={<JobOffers/>}/>
                </Routes>
            </div>

            <main>

                {/* Карусель акций */}
                <div id="carouselАкции" className="carousel slide" data-ride="carousel">
                    {/* Индикаторы карусели */}
                    <ol className="carousel-indicators">
                        <li data-target="#carouselАкции" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselАкции" data-slide-to="1"></li>
                        <li data-target="#carouselАкции" data-slide-to="2"></li>
                    </ol>
                    {/* Слайды карусели */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="../public/images/promotion_1.png" alt="Первый слайд"/>
                            <div className="description">
                                <h3>Порадуйте себя</h3>
                                <p>При любом массаже лица,<br/>альгинатная маска в подарок.</p>
                                <button onClick="openContactsPopup()">Записаться</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/promotion_2.png" alt="Второй слайд"/>
                            <div className="description">
                                <h3>Подарок мертвого моря</h3>
                                <p>Солевые массажные<br/> смеси из Израиля.</p>
                                <button onClick="openContactsPopup()">Записаться</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="images/promotion_3.png" alt="Третий слайд"/>
                            <div className="description">
                                <h3>Истинная красота</h3>
                                <p>Дневной макияж со скидкой 30%<br/>для постоянных клиентов.</p>
                                <button onClick="openContactsPopup()">Записаться</button>
                            </div>
                        </div>
                    </div>
                    {/* Управление каруселью */}
                    <a className="carousel-control-prev" href="#carouselАкции" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Предыдущий</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselАкции" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Следующий</span>
                    </a>
                </div>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

                {/* Услуги */}
                <h2 className="services-header"><a href="treatments.html">УСЛУГИ</a></h2>
                <div className="services">
                    <div className="row">
                        <div className="column">
                            <a href="treatments.html#волосы">
                                <img src="images/hair.jpg" alt="Волосы"/>
                                <div> ВОЛОСЫ</div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="treatments.html#массаж">
                                <img src="images/massage.jpg" alt="Массаж"/>
                                <div>МАССАЖ</div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="treatments.html#косметология">
                                <img src="images/cosmetology.jpg" alt="Косметология"/>
                                <div>КОСМЕТОЛОГИЯ</div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="treatments.html#маникюр">
                                <img src="images/manicure.jpg" alt="Маникюр"/>
                                <div>МАНИКЮР</div>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <a href="treatments.html#солярий">
                                <img src="images/tanning.jpg" alt="Солярий"/>
                                <div>СОЛЯРИЙ</div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="treatments.html#макияж">
                                <img src="images/makeup.jpg" alt="Макияж"/>
                                <div>МАКИЯЖ</div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="treatments.html#эпиляция">
                                <img src="images/epilation.jpg" alt="Эпиляция"/>
                                <div>ЭПИЛЯЦИЯ</div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="treatments.html#для_мужчин">
                                <img src="images/for_men.jpg" alt="Для мужчин"/>
                                <div>МУЖЧИНАМ</div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* новым клиентам скидка 30% */}
                <div className="split-container">
                    <div className="top-half"></div>
                    <div className="promo-box">
                        <p>НОВЫМ <br/> КЛИЕНТАМ <br/> СКИДКА 30%</p>
                        <button onClick="openContactsPopup()">Записаться</button>
                    </div>
                    <div className="bottom-half"></div>
                </div>

                {/* окно с контактами */}
                <div className="popup" id="contactPopup">
                    <div className="popup-content">
                        <div className="contact-photo">
                            <img src="images/contacts.jpg" alt="Contact Photo"/>
                            {/* иконки-ссылки соц сетей */}
                            <div className="social-icons">
                                <a href="https://wa.me/89992119875" target="_blank">
                                    <img src="images/whatsapp.png" alt="WhatsApp"/>
                                </a>
                                <a href="https://t.me/shinebeautyspb" target="_blank">
                                    <img src="images/telegram.png" alt="Telegram"/>
                                </a>
                                <a href="https://vk.com/shinespb" target="_blank">
                                    <img src="images/vk.png" alt="VK"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* о нас */}
                <div id="about-us" className="about-us">
                    <h1 className="about-us-header">О нас</h1>
                    <h2>ЗАБОТИМСЯ О ВАС И ВАШЕМ КОМФОРТЕ</h2>
                    <p>
                        Мы не только создаём красивый образ и здоровое тело. Наша любовь к делу незримо ощущается <br/>
                        в деталях и окутывает вас атмосферой чуткого и заботливого отношения.
                    </p>
                    <h2>ИДЁМ В НОГУ СО ВРЕМЕНЕМ</h2>
                    <p>
                        Наши мастера не перестают совершенствовать профессиональные навыки и регулярно повышают <br/>
                        квалификацию в Европе. Это помогает нам всегда оставаться на пике модных тенденций <br/>
                        и новейших технологий.
                    </p>
                    <div className="signature">
                        <img src="images/signature.png" alt="SHINE"/>
                    </div>
                </div>

            </main>

            <footer>
                <div className="footer-container">
                    <div className="footer-logo">
                        <Link to="/">S H I N E</Link>
                    </div>
                    <div className="footer-text">
                        <p>&copy; +7 (906) 211 98 76 <br/> г. Санкт Петербург Рижский проспект дом 8 парадная 2​</p>
                    </div>
                    <div className="footer-social-icons">
                        <a href="https://wa.me/89992119875" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappImage} alt="WhatsApp"/>
                        </a>
                        <a href="https://t.me/shinebeautyspb" target="_blank" rel="noopener noreferrer">
                            <img src={telegramImage} alt="Telegram"/>
                        </a>
                        <a href="https://vk.com/shinespb" target="_blank" rel="noopener noreferrer">
                            <img src={vkImage} alt="VK"/>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App_test;
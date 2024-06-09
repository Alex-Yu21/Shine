import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors'; // Импортируем пакет cors
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

const vacancies = [
    {
        title: "Стилист-парикмахер",
        duties: "Обязанности: Стрижки, укладки, окрашивание волос, консультации по уходу за волосами.",
        requirements: "Требования: Опыт работы от 2 лет, профессиональное образование, умение работать с разными типами волос, знание современных техник и трендов."
    },
    {
        title: "Косметолог",
        duties: "Обязанности: Проведение косметических процедур по уходу за лицом и телом, консультации клиентов, подбор индивидуальных программ ухода.",
        requirements: "Требования: Профильное образование, опыт работы от 3 лет, знание различных косметологических методов и технологий, умение работать с современным оборудованием."
    },
    {
        title: "Мастер маникюра и педикюра",
        duties: "Обязанности: Маникюр, педикюр, наращивание ногтей, дизайн ногтей.",
        requirements: "Требования: Опыт работы от 1 года, профессиональное образование, креативность, внимательность к деталям, знание современных трендов."
    }
];

app.use(cors()); // Добавляем поддержку CORS
app.use(express.static(path.join(__dirname, 'public'))); // Обслуживание статических файлов из папки public

app.get('/api/vacancies', (req, res) => {
    res.json(vacancies);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
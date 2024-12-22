import { defineConfig } from 'vite'; // Импорт функции defineConfig для настройки Vite
import react from '@vitejs/plugin-react'; // Импорт плагина для поддержки React

export default defineConfig({
  plugins: [react()], // Подключение плагина React для поддержки JSX и React HMR (горячая перезагрузка)

  // Раздел server используется только в режиме разработки
  // server: {
  //   proxy: {
  //     '/api': 'http://localhost:3000' // Проксирование запросов с клиента на API сервер (для локальной разработки)
  //     // Например, fetch('/api/vacancies') будет перенаправляться на http://localhost:3000/api/vacancies
  //   }
  // }

  // В продакшене этот блок не нужен, так как прокси применяется только в dev-среде.
});
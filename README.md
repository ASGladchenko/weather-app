# 🌤️ Weather App

## 👋 Welcome!

This application demonstrates:

- 🏗️ **Feature-Sliced Design** architecture
- 🔥 **React 18** with modern hooks
- 💎 **TypeScript** for type safety
- ⚡ **Vite** for fast development
- 🗂️ **Zustand** for state management

## ✨ Features

- 📍 **Auto location detection** via Geolocation API
- 🌡️ **Current weather** with detailed information
- 📊 **12-hour forecast** with interactive chart
- 📅 **7-day forecast** with details

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

git clone https://github.com/ASGladchenko/weather-app.git
cd weather-app

npm install

echo "VITE\*OPENWEATHER_API_KEY=your_openweather_api_key" > .env

npm run dev

```

### Getting OpenWeather API Key

1. Register at [OpenWeatherMap](https://openweathermap.org/api)
2. Get a free API key
3. Add it to the `.env` file

### Core Technologies

- **React 18** - UI library with modern capabilities
- **TypeScript 5.9** - static typing
- **Vite** - fast build tool
- **Zustand** - lightweight state management

### Additional Libraries

- **React Router v7** - routing with lazy loading
- **Recharts** - beautiful charts
- **React Toastify** - notifications
- **Axios** - HTTP client

## 📁 Project Architecture


```

```
src/
├── app/ #Application configuration
├── entities/ #Business entities (weather)
├── features/ #Features (search, geolocation)
├── pages/ #Application pages
├── shared/ #Reusable components and utilities
└── widgets/ #Composite components
```

## 🎯 Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### ESLint

Project is configured with modern rules for TypeScript and React:

- React Hooks rules
- TypeScript strict mode
- Automatic formatting

### TypeScript

- Strict mode enabled
- Path mapping for convenient imports
- Full type coverage

### State Management

Uses Zustand for simple and efficient state management:

- Automatic request cancellation on new searches
- API data normalization
- Centralized error handling

## 📱 Supported Browsers

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

All improvement suggestions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Create a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Anatoly Gladchenko**

- GitHub: [@ASGladchenko](https://github.com/ASGladchenko)

---

_Made with ❤️ and modern technologies_

```

```

# 🎬 Movie Finder App

A modern React-based web application that lets users search for movies, explore trending titles, and discover popular films effortlessly.  
Built with **React, Vite, TailwindCSS, TMDB API, and Appwrite**, this app provides a fast, responsive, and user-friendly experience.

---

## 🚀 Features

- 🔍 **Search Movies** – Type a movie name to instantly search from TMDB (The Movie Database).
- ⏳ **Debounced Search** – Optimized API calls with a debounce mechanism to prevent unnecessary requests.
- 📈 **Trending Movies** – Displays a list of currently trending movies (fetched from Appwrite backend).
- 🎥 **Popular Movies** – Shows a curated list of popular films when no search query is entered.
- 🌀 **Loading Spinner** – Smooth loading animations while fetching data.
- ⚠️ **Error Handling** – Graceful fallback messages if API requests fail.
- 📊 **Search Analytics** – Tracks search counts and saves them to Appwrite (optional).
- 🌙 **Responsive UI** – Mobile-first design powered by TailwindCSS.

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite + TailwindCSS  
- **State & Hooks:** React Hooks + `react-use` (for debounce)  
- **API:** [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)  
- **Backend:** [Appwrite](https://appwrite.io/) for storing trending movies & analytics  
- **Hosting:** Vercel / Netlify  

---

## 📂 Project Structure

.
├── src/
│ ├── components/
│ │ ├── Search.jsx
│ │ ├── Spinner.jsx
│ │ ├── MovieCards.jsx
│ ├── App.jsx
│ ├── appwrite.js
│ ├── main.jsx
│ └── App.css
├── public/
│ └── hero-img.png
├── .env # API keys and environment variables
├── package.json
├── README.md
└── vite.config.js



---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/sabir daar/movies-Web-APP.git
   cd REPO_NAME

Install dependencies

npm install


Set up environment variables

Create a .env file in the project root and add:

VITE_TMDB_API_KEY=your_tmdb_api_key_here


Get your API key from TMDB API
.

Run the development server

npm run dev


Build for production

npm run build

🖥️ Usage

Open the app in your browser at http://localhost:5173/

Type in the search bar to find movies.

Browse trending and popular movies directly on the home screen.

🔑 Environment Variables
Variable	Description
VITE_TMDB_API_KEY	API key from TMDB
APPWRITE_ENDPOINT	Appwrite server endpoint (optional)
APPWRITE_PROJECT_ID	Appwrite project ID (optional)
🌍 Live Demo

You can deploy the app easily using Vercel or Netlify:

Deploy on Vercel

Push your project to GitHub.

Go to Vercel
 and import the repo.

Add your environment variables in Vercel Dashboard → Project Settings → Environment Variables.

Deploy and get your live link 🎉

Deploy on Netlify

Push your project to GitHub.

Go to Netlify
 and link the repo.

Add environment variables under Site Settings → Build & Deploy → Environment.

Deploy and share your app 🎉

📸 Screenshots

(Add screenshots of your app here once you have them!)

🐞 Troubleshooting

API not working?
Check if your .env file is configured properly and restart the dev server.

Too many requests?
Adjust debounce timing in App.jsx to reduce API calls.

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

📜 License

This project is licensed under the MIT License.

💡 Acknowledgments

TMDB API for movie data

React + Vite

Appwrite for backend services

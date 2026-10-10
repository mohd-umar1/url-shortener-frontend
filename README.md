# Shorty — URL Shortener

Shorty is a modern URL shortener frontend that allows users to convert long URLs into short, shareable links. Built with React and Vite, it provides a responsive interface for shortening URLs, managing links, and viewing click analytics through a Spring Boot backend.

## Features

* **URL Shortening** — Convert long URLs into short, shareable links.
* **User Authentication** — Register and log in to access user-specific features.
* **URL Management** — View and manage your shortened URLs.
* **Click Analytics** — Visualize link performance and click statistics.
* **Dashboard** — Access URL information and analytics through a centralized dashboard.
* **Responsive UI** — Clean interface designed for a smooth user experience.
* **API Integration** — Communicate with the backend through API requests.

## Tech Stack

**Frontend**

* React
* Vite
* JavaScript
* Tailwind CSS
* Flowbite React
* React Query
* Chart.js / Graphing components

**Backend**

* Java
* Spring Boot
* Spring Data JPA / Hibernate
* MySQL

## Project Structure

```text
url-shortener-frontend/
├── components/
│   ├── dashboard/
│   ├── contextapi/
│   ├── query/
│   ├── landingpage.jsx
│   ├── login.jsx
│   ├── register.jsx
│   └── shorten_url.jsx
├── public/
├── src/
│   ├── apis/
│   ├── hooks/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (LTS recommended)
* npm
* The Shorty backend API, if you want to use the application's API-dependent features

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohd-umar1/url-shortener-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your environment variables in a `.env` file in the project root.

   For Vite, frontend environment variables must use the `VITE_` prefix.

   Example:

   ```env
   VITE_API_BASE_URL=http://localhost:8080
   ```

   Replace the URL with the address of your running backend. Ensure the variable name matches what your application reads in `src/apis/api.js`.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed in your terminal, usually `http://localhost:5173`.

## Backend Integration

The frontend communicates with a Spring Boot backend to support URL shortening, authentication, URL management, and analytics.

To use these features:

1. Start the backend server.
2. Configure the frontend API base URL.
3. Ensure the backend permits requests from the frontend origin through CORS configuration.

## Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Start the development server  |
| `npm run build`   | Build the production frontend |

## Security

* Never commit `.env` files or private credentials.
* Configure environment variables separately for development and production.
* Remember that Vite exposes `VITE_` variables to the browser; do not store secrets in them.

## Future Improvements

* QR code generation for shortened URLs
* Link expiration and custom aliases
* Advanced analytics and date-based filtering
* Copy-to-clipboard functionality
* Dark mode and additional dashboard customizations

## Author

**Umar Inamdar**

GitHub: [@mohd-umar1](https://github.com/mohd-umar1)

---

*Shorty — Shorten links. Simplify sharing.*

Framer Motion Portfolio Website 

A modern, responsive personal portfolio built using React and Vite, showcasing projects, skills, and experience with smooth animations and a clean user interface. The application includes an interactive contact form powered by EmailJS for real-time communication.
🚀 Tech Stack

React.js – Component-based UI development

Vite – Fast build tool and development server

JavaScript (ES6+) – Core programming language

Tailwind CSS – Utility-first styling

Framer Motion – Smooth animations and transitions

EmailJS – Contact form email integration

React Icons – Icon library

✨ Features

Fully responsive design across all devices

Smooth animations and interactive UI elements

Reusable and maintainable component architecture

Contact form with validation and EmailJS integration

Social media integration with animated icons

Clean and modern user experience

📂 Project Folder Structure
portfolio/
├── public/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   ├── assets/
│   │   ├── Astra.png
│   │   └── images/
│   │
│   ├── components/
│   │   ├── ParticlesBackground.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Loader.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md

⚙️ Installation & Setup

npm create vite@latest portfolio
cd portfolio

Install dependencies
npm install
then,
npm install tailwindcss @tailwindcss/vite
npm run dev/npm run


Configure environment variables
Create a .env file in the root directory:

VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key


Run the development server

npm run dev

📧 EmailJS Configuration

Create an account on EmailJS

Set up an email service (Gmail / Outlook)

Create an email template with variables:

{{from_name}}
{{reply_to}}
{{service}}
{{budget}}
{{idea}}


Add your EmailJS credentials to the .env file

🧪 Scripts

npm run dev – Start development server

npm run build – Build for production

npm run preview – Preview production build

🌐 Deployment

This project can be deployed on:

Vercel

Netlify

GitHub Pages



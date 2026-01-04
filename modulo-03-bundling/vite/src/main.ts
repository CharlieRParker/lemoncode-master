import styles from './styles.module.css';

console.log('Environment:', import.meta.env.MODE);
console.log('App Env:', import.meta.env.VITE_APP_ENV);

const app = document.getElementById('app')!;

const h1 = document.createElement('h1');
h1.textContent = 'Hello from Vite!';
h1.className = styles.title;
app.appendChild(h1);
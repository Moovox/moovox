import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <App />
    </HelmetProvider>

);

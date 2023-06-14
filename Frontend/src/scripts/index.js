import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css'; 
import '../styles/contact-us.css';
import '../styles/keranjang-page.css'
import App from './views/app';
import '../styles/groceries-page.css';

const app = new App({
    button: document.querySelector('.app-bar__menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#mainContent')
});
 
window.addEventListener('hashchange', () => {
    app.renderPage();
  });
   
  window.addEventListener('load', () => {
    app.renderPage();
  });
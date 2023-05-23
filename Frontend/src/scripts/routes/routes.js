import HomePage from "../views/pages/home-page";
import ContactPage from "../views/pages/contact-page";
import LoginPage from "../views/pages/login-page";
// import GroceriesPage from "../views/pages/groceries-page";

const routes = {
    '/': HomePage, // default page
    '/contact-us': ContactPage,
    '/login-page': LoginPage,
    // '/detail/:id': Detail,
  };
   
  export default routes;
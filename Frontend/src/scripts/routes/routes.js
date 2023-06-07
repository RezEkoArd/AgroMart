import HomePage from "../views/pages/home-page";
import ContactPage from "../views/pages/contact-page";
import LoginPage from "../views/pages/login-page";
// import GroceriesPage from "../views/pages/groceries-page";
// import ProductListPage from "../views/pages/product-list-page";
import Detail from "../views/pages/product-detail-page";

const routes = {
    '/': HomePage, // default page
    '/contact-us': ContactPage,
    '/login-page': LoginPage,
    // '/detail/:id': Detail,    karena belum ada parameter id jadinya pakai yang bawah dulu
    '/detail': Detail,
    // '/product-list': ProductListPage,     

  };
   
  export default routes;
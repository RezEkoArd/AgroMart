import HomePage from "../views/pages/home-page";
import ContactPage from "../views/pages/contact-page";
import LoginPage from "../views/pages/login-page";
import GroceriesPage from "../views/pages/groceries-page";
import sayurPage from "../views/pages/groceries-page/sayur-page";
import buahPage from "../views/pages/groceries-page/buah-page";
import tanamanPage from "../views/pages/groceries-page/tanaman-page";
import Detail from "../views/pages/product-detail-page";
import Keranjang from "../views/pages/keranjang-page";

const routes = {
    '/': HomePage, // default page
    '/contact-us': ContactPage,
    '/login-page': LoginPage,
    // '/detail/:id': Detail,    karena belum ada parameter id jadinya pakai yang bawah dulu
    '/detail': Detail,
    // '/product-list': ProductListPage,     

    '/groceries-page': GroceriesPage,
    '/sayur-page': sayurPage,
    '/buah-page': buahPage,
    '/tanaman-page': tanamanPage,
    // '/detail/:id': Detail,
    '/keranjang' : Keranjang
  };
   
  export default routes;
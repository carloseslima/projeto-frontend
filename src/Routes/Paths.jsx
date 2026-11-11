import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductListingPage from "../pages/ProductListingPage.jsx";
import Category from "../pages/Category.jsx";
import MyOrders from "../pages/MyOrders.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/produtos" element={<ProductListingPage />}></Route>
                    <Route path="/categorias" element={<Category />}></Route>
                    <Route path="/meus-pedidos" element={<MyOrders />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths

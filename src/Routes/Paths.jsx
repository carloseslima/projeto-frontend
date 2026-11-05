import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductListingPage from "../pages/ProductListingPage.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/produtos" element={<ProductListingPage />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
 
export default Paths

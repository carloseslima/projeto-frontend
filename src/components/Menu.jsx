import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Menu = () => {
    return (
        <>
            <div>
                <Link to="/"><Logo /></Link>
                
                <span>
                    <input type="search" placeholder="Pesquisar produto..." />
                    <button type="submit"><img src="/search.svg" alt="search" /></button>
                </span>

                <a id="cadastrese" href="#">Cadastre-se</a>
                <a id="entrar" href="#">Entrar</a>
                <img id="cart"src="/buy.svg" alt="" />

            </div>
            <nav className="menu-sup">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                    <li><NavLink to="/categorias">Categorias</NavLink></li>
                    <li><NavLink to="/meus-pedidos">Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
 
export default Menu;
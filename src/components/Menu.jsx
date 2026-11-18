import "../Menu.css";
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Menu = () => {

    const [termo, setTermo] = useState("");

    const navigate = useNavigate();

    const pesquisar = (e) => {
        e.preventDefault();

        const busca = termo.trim();

        if (!busca) return;

        navigate(`/produtos?busca=${encodeURIComponent(busca)}`);

        setTermo("");
    };

    return (
        <>
            <div id="menu-container">

                <Link to="/">
                    <Logo />
                </Link>

                {/* Campo de pesquisa */}
                <form className="pesquisa-menu" onSubmit={pesquisar}>

                    <input
                        type="search"
                        placeholder="Pesquisar produto..."
                        value={termo}
                        onChange={(e) => setTermo(e.target.value)}
                    />

                    <button type="submit" aria-label="Pesquisar produtos">
                        <img src="/search.svg" alt="" />
                    </button>

                </form>

                <a id="cadastrese" href="#">
                    Cadastre-se
                </a>

                <a id="entrar" href="#">
                    Entrar
                </a>

                <img id="cart" src="/buy.svg" alt="Carrinho" />

            </div>

            <nav className="menu-sup">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/produtos">Produtos</NavLink>
                    </li>

                    <li>
                        <NavLink to="/categorias">Categorias</NavLink>
                    </li>

                    <li>
                        <NavLink to="/meus-pedidos">Meus Pedidos</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;


import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../Sidebar.css";
import Logo from "./Logo";

export default function MenuMobile() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [pesquisaAberta, setPesquisaAberta] = useState(false);
    const [termo, setTermo] = useState("");

    const navigate = useNavigate();

    const fecharMenu = () => setMenuAberto(false);

    const pesquisar = (e) => {
        e.preventDefault();

        const busca = termo.trim();

        if (!busca) return;

        navigate(`/produtos?busca=${encodeURIComponent(busca)}`);

        setPesquisaAberta(false);
        setTermo("");
    };

    return (
        <div id="container-hamburger">

            {/* Botão Hamburger */}
            <button
                className="hamburger"
                onClick={() => setMenuAberto(true)}
                aria-label="Abrir menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <Link to="/"><Logo /></Link>
             

            <div className="search-cart">

                {/* Botão de pesquisa */}
                <button
                    type="button"
                    className="btn-search"
                    onClick={() => setPesquisaAberta(!pesquisaAberta)}
                    aria-label="Abrir pesquisa"
                    aria-expanded={pesquisaAberta}
                >
                    <img id="search" src="/search.svg" alt="" />
                </button>

                <img id="cart" src="/buy.svg" alt="Carrinho" />

            </div>

            {/* Campo de pesquisa */}
            {pesquisaAberta && (
                <form className="campo-pesquisa" onSubmit={pesquisar}>
                    <button
                        type="submit"
                        className="botao-pesquisar"
                        aria-label="Pesquisar produtos"
                    >
                        <img src="/search.svg" alt="" />
                    </button>

                    <input
                        type="search"
                        placeholder="O que você está procurando?"
                        value={termo}
                        onChange={(e) => setTermo(e.target.value)}
                        autoFocus
                    />
                </form>
            )}

            {/* Fundo escuro */}
            <div
                className={`overlay ${menuAberto ? "ativo" : ""}`}
                onClick={fecharMenu}
            ></div>

            {/* Menu lateral */}
            <aside className={`sidebar ${menuAberto ? "aberto" : ""}`}>

                <button
                    className="fechar-menu"
                    onClick={fecharMenu}
                    aria-label="Fechar menu"
                >
                    &times;
                </button>

                <div className="sidebar-conteudo">

                    <h3>Páginas</h3>

                    <nav>
                        <NavLink
                            className="link-menu"
                            to="/"
                            onClick={fecharMenu}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className="link-menu"
                            to="/produtos"
                            onClick={fecharMenu}
                        >
                            Produtos
                        </NavLink>

                        <NavLink
                            className="link-menu"
                            to="/categorias"
                            onClick={fecharMenu}
                        >
                            Categorias
                        </NavLink>

                        <NavLink
                            className="link-menu"
                            to="/meus-pedidos"
                            onClick={fecharMenu}
                        >
                            Meus Pedidos
                        </NavLink>
                    </nav>

                    <div className="sidebar-conta">
                        <a href="/login" className="btn-entrar">
                            Entrar
                        </a>

                        <a href="/cadastro" className="link-cadastro">
                            Cadastre-se
                        </a>
                    </div>

                </div>
            </aside>

        </div>
    );
}

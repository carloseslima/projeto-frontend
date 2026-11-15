import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../Sidebar.css";

export default function MenuMobile() {
    const [menuAberto, setMenuAberto] = useState(false);

    const fecharMenu = () => setMenuAberto(false);

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
                        <NavLink className="link-menu" to="/">Home</NavLink>
                        <NavLink className="link-menu" to="/produtos" onClick={fecharMenu}>Produtos</NavLink>
                        <NavLink className="link-menu" to="/categorias" onClick={fecharMenu}>Categorias</NavLink>
                        <NavLink className="link-menu" to="/meus-pedidos" onClick={fecharMenu}>Meus Pedidos</NavLink>
                        
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

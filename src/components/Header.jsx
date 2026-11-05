import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme.colors.white};
    padding: 0 50px; 
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: column;
    font-family: "Inter", sans-serif;
    & div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        & input{
            background-color: ${(props) => props.theme.colors.darkgray2};
            border-radius: 8px;
            border: none;
            width: 559px;
            height: 60px;
        }
        & #entrar{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${(props) => props.theme.colors.primary};
            width: 114px;
            height: 40px;
            border-radius: 4px;
            font-weight: bold;
            color: ${(props) => props.theme.colors.white};
            font-size: 14px;
            text-decoration: none;
        }
        
    
    }
    & ul{
        display: flex;
        list-style: none;

    }
    
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo />
                <span>
                    <input type="search" placeholder="Pesquisar produto..." />
                    <button type="submit"><img src="../src/assets/search.svg" alt="search" /></button>
                </span>

                <a id="cadastrese" href="#">Cadastre-se</a>
                <a id="entrar" href="#">Entrar</a>
                <img src="../src/assets/cart.svg" alt="" />

            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                    <li><NavLink to="/categorias">Categorias</NavLink></li>
                    <li><NavLink to="/meus-pedidos">Meus Pedidos</NavLink></li>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;
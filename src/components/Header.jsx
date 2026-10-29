import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme.colors.white};
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
        gap: 20px;
        & span{
            display: flex;
            justify-content: space-between;
            background-color: ${(props) => props.theme.colors.lightgray3};
            align-items: center;
            border-radius: 8px;
            border: none;
            width: 559px;
            height: 60px;
            & input{
                background-color: none;
                border: none;
                height: 60px;
                background-color: transparent;
                width: 100%;
                outline: none;
                padding: 0 10px;
                font-size: 18px;
            }
            & input::-webkit-search-decoration,
            input::-webkit-search-cancel-button,
            input::-webkit-search-results-button,
            input::-webkit-search-results-decoration {
                display: none;
            }
            & button {
                border: none;
                cursor: pointer;
                background-color: transparent;
                & img{
                    opacity: 0.4;
                }
            }
        }

        & #cadastrese{
            font-size: 16px;
            color: ${(props) => props.theme.colors.darkgray2};
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
        padding: 0;
        gap: 30px;
        & li{
            display: flex;
            align-items: flex-end;
            & a{
                text-decoration: none;
                color: ${(props) => props.theme.colors.darkgray2};
                &.active{
                    color: ${(props) => props.theme.colors.primary};
                    font-weight: bold;
                }
                &.active::before{
                    content: "";
                    position: relative;
                    display: flex;
                    top: 25px;
                    width: 100%;
                    height: 2px;
                    background-color: ${(props) => props.theme.colors.primary};
                }
            }
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
                <img src="../src/assets/buy.svg" alt="" />

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
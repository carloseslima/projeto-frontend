import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    & div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        & span{
            display: flex;
            justify-content: space-between;
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
            & a{
                text-decoration: none;
                color: ${(props) => props.theme.colors.darkgray2};
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
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Produtos</a></li>
                <li><a href="/">Categorias</a></li>
                <li><a href="/">Meus Pedidos</a></li>
            </ul>

        </HeaderContainer>
    );
}

export default Header;
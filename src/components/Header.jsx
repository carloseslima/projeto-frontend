import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
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
                <input type="text" />
                <a id="cadastrese" href="#">Cadastre-se</a>
                <a id="entrar" href="#">Entrar</a>
                <img src="../src/assets/cart.svg" alt="" />

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
import Logo from "./Logo"
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 50px;
    gap: 50px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.darkgray};
    color: ${(props) => props.theme.colors.white};
    margin: 0 auto;
    font-size: 12px;
    & #footer-content{
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        gap: 50px
    }
    & #footer-logo{
        display: flex;
        flex-direction: column;
    }
    & h1 img{
        filter: contrast(0) brightness(10);
    }
    & #footer-logo #footer-social{
        display: flex;
        gap: 30px;
        align-items: center;
    }
    & #div-2{
        display: flex;
        gap: 50px;
    }
    & span{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        max-width: 1440px;
        margin: 0 auto;
        
        
        & hr{
            background-color: ${(props) => props.theme.colors.lightgray};
            border: none;
            width: 100%;
            height: 1px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <div id="footer-content">
                <div id="footer-logo">
                    <Logo />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et ut rerum tenetur possimus porro quis id ex, aliquid architecto animi voluptatibus perferendis voluptatum repellat, eius necessitatibus minima dicta. Nemo.</p>
                    <div id="footer-social">
                        <a href="#"><img src="/public/fb.png" alt="facebook" /></a>
                        <a href="#"><img src="/public/ig.png" alt="instagram" /></a>
                        <a href="#"><img src="/public/tw.png" alt="twitter" /></a>
                    </div>
                </div>
                <div id="div-2">
                    <div>
                        <h2>Informação</h2>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p >
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>
                    <div>
                        <h2>Categorias</h2>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bonés</p>
                        <p>Headphones</p>
                        <p>Tênis</p>
                    </div>
                </div>
                <div>
                    <h2>Contato</h2>
                    <p>Av. Santos Dumont, 1510-1 Andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 9 9999-9999</p>
                </div>
            </div>
            <span>
                <hr />
                <p>@2026 Digital College</p>
            </span>
        </FooterContainer>
    );
}

export default Footer;
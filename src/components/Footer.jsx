import Logo from "./Logo"
import styled from "styled-components";
import { Link } from "react-router-dom";
import Information from "./Information";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    
    gap: 50px;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.darkgray};
    color: ${(props) => props.theme.colors.white};
    margin: 10px auto 0 auto;
    font-size: 12px;
    & #footer-content{
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        gap: 20px;
        padding: 20px 0;
    }
    & #footer-logo{
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    & h1 img{
        filter: contrast(0) brightness(10);
    }
    & #footer-logo #footer-social{
        display: flex;
        gap: 30px;
        align-items: center;
    }
    & .infoContent{
        display: flex;
        gap: 20px;
        width: 25%;
    }
    & .info-section{
        display: flex;
        flex-direction: column;
        & a{
            text-decoration: none;
            color: ${(props) => props.theme.colors.white};
        }
        & .info-title{
            margin: 0 0 20px 0;
            font-size: 15px;
        }
        & .info-list{
            display: flex;
            flex-direction: column;
            list-style: none;
            margin: 0;
            padding: 0;
            gap: 10px;
        }
        
        
    }
    & #contato{
        display: flex;
        flex-direction: column;
        width: 25%;
        & h2{
            margin: 0 0 20px 0;
            font-size: 18px;
        }
        & p{
            margin: 0 0 20px 0;
        }
    }
    & span{
        display: flex;
        flex-direction: column;
        align-items: center;
        & hr{
            border: 1px solid ${(props) => props.theme.colors.lightgray2};;
            margin: 0;
            width: 1440px;
            max-width: 100%;
        }
    }
    

    
    @media (max-width: 1024px) {
        
        #footer-content{
            width: 100%;
            align-items: center;
            flex-direction: column;
            & #footer-logo{
                width: 80%;
                font-size: 18px;
            }
            & .infoContent{
                font-size: 18px;
                width: 80%;
                justify-content: space-between;                
                & .info-title {
                    
                    font-size: 18px;
                }
            }
        }
        & #contato{
            width: 80%;
            font-size: 18px;
            
        }
        & span hr{
            width: 80%;
        }
        & span p{
            font-size: 15px;
        }
        
        
    }
    
`;

const Footer = () => {

const infoData = [
    {
      text: "Sobre Drip Store",
      link: "#"
    },
    {
      text: "Segurança",
      link: "#"
    },
    {
      text: "Wishlist",
      link: "#"
    },
    {
      text: "Blog",
      link: "#"
    },
    {
      text: "Trabalhe conosco",
      link: "#"
    },
    {
      text: "Meus Pedidos",
      link: "#"
    }
  ];

const categoryData = [
    {
      text: "Camisetas",
      link: "#"
    },
    {
      text: "Calças",
      link: "#"
    },
    {
      text: "Bonés",
      link: "#"
    },
    {
      text: "Headphones",
      link: "#"
    },
    {
      text: "Tênis",
      link: "#"
    }
  ];


    return (
        <FooterContainer>
            <div id="footer-content">
                <div id="footer-logo">
                    <Link to="/"><Logo /></Link>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et ut rerum tenetur possimus porro quis id ex, aliquid architecto animi voluptatibus perferendis voluptatum repellat, eius necessitatibus minima dicta. Nemo.</p>
                    <div id="footer-social">
                        <Link to="#"><img src="/fb.png" alt="facebook" /></Link>
                        <Link to="#"><img src="/ig.png" alt="instagram" /></Link>
                        <Link to="#"><img src="/tw.png" alt="twitter" /></Link>
                    </div>
                </div>
                <div className="infoContent">
                    <Information title="Informação" informations={infoData} />
                    <Information title="Categorias" informations={categoryData} />
                </div>

                <div id="contato">
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
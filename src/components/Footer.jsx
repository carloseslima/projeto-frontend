import Logo from "./Logo"
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #000;
    margin: 0 auto;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Logo />
        </FooterContainer>
    );
}
 
export default Footer;
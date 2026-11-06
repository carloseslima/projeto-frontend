import styled from "styled-components";

const LogoContainer = styled.h1`
    & img{
        width: 253px;
    }
`;

const Logo = () => {
    return (
        <LogoContainer>
            <img src="/public/logo.svg" alt="logo" />
        </LogoContainer>
    );
}
 
export default Logo;
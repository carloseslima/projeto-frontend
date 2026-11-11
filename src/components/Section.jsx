import styled from "styled-components";

const CollectionSection = styled.section`
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    & h2{
        color: ${(props) => props.theme.colors.darkgray2};
        font-size: 17px;
    }
    & #collection-images{
        width: 100%;
        display: flex;
        gap: 10px;
        & a{
            width: 33%;
            border-radius: 10px;
            overflow: hidden;
            & img{
                width: 100%;
            }
        }
    }
    & #collection-images-2{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
        gap: 30px;
        & a{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${(props) => props.theme.colors.white};
            border-radius: 50%;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            width: 80px;
            height: 80px;
            & img{
                width: 60%;
            }
        }
    }
`;

const Section = () => {
    return (
        <CollectionSection>
            <h2>Coleções em destaque</h2>
            <div id="collection-images">
                <a href="#">
                    <img src="/collection-1.png" alt="Coleção em destaque" />
                </a>
                <a href="#">
                    <img src="/collection-2.png" alt="Coleção em destaque" />
                </a>
                <a href="#">
                    <img src="/collection-3.png" alt="Coleção em destaque" />
                </a>
                
                
                
            </div>

            <h2 style={{ textAlign: 'center' }}>Coleções em destaque</h2>
            <div id="collection-images-2">
                <a href="#">
                    <img src="/shirt.png" alt="shirt destaque" />
                </a>
                <a href="#">
                    <img src="/pants.png" alt="pants destaque" />
                </a>
                <a href="#">
                    <img src="/headphones.png" alt="headphones destaque" />
                </a>
                <a href="#">
                    <img src="/sneakers.png" alt="sneakers destaque" />
                </a>
            </div>
        </CollectionSection>
    );
};

export default Section;
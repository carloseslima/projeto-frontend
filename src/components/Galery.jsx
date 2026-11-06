import styled from "styled-components";

const Slider = styled.section`
    background-color: ${(props) => props.theme.colors.lightgray3};
    width: 100%;
    display: flex;
    padding: 50px 0;
    & #slider-text{
        width: 90%;
        display: flex;
        flex-direction: column;
        max-width: 1440px;
        margin: 0 auto;
        background-image: url("/public/ornament11.png");
        background-repeat: no-repeat;
        background-position: right 5% bottom 100%;
        & h2{
            color: ${(props) => props.theme.colors.warning};
            font-size: 15px;
        }
        & h3{
            font-size: 50px;
            margin: 0;
            padding: 0;
        }
        & p{
            width: 50%;
        }
        & a{
            display: flex;
            padding: 10px 20px;
            border-radius: 10px;
            text-decoration: none;
            width: 200px;
            align-items: center;
            justify-content: center;
            color: ${(props) => props.theme.colors.white};
            background-color: ${(props) => props.theme.colors.primary};
        }
    }
    & img{
        transform: rotate(-15deg);
        position: absolute;
        top: 2px;
        left: 50%;
        width: 500px;
    }
`;

const SliderControler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 30px;
    background-color: ${(props) => props.theme.colors.lightgray3};
    & span{
        cursor: pointer;
        width: 10px;
        height: 10px;
        background-color: ${(props) => props.theme.colors.lightgray};
        border-radius: 50%;
    }
    & .slide-active{
        background-color: ${(props) => props.theme.colors.primary};
    }
`;

const Galery = () => {
    return (
        <>
            <Slider>
                <div id="slider-text">
                    <h2>Melhores ofertas personalizadas</h2>
                    <h3>Queima de estoque Nike 🔥</h3>
                    <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et ut rerum tenetur possimus porro quis id ex, aliquid architecto animi voluptatibus perferendis voluptatum repellat, eius necessitatibus minima dicta. Nemo.</p>
                    <a href="#">Ver Ofertas</a>
                </div>
                <img src="/public/white-sneakers-png-clipart.png" alt="tenis" />
            </Slider>

            <SliderControler>
                <span className="slide-active"></span>
                <span></span>
                <span></span>
                <span></span>
            </SliderControler>

        </>

    );
}

export default Galery;
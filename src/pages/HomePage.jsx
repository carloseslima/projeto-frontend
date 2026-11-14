import Galery from "../components/Galery";
import Section from "../components/Section";
import Layout from "./Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ColectionImages = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    & a{
        width: 33%;
        & img{
            width: 100%;
            border-radius: 10px;
        }
    }
    
`;

const HomePage = () => {


    const produtos = [
        { id: 1, src: 'produc-image-1.jpeg', nome: 'Adidas Samba OG', price: "350,00", priceDiscount: '300,00' },
        { id: 2, src: 'produc-image-2.jpeg', nome: 'Adidas Gazelle Indoor', price: "350,00", priceDiscount: '300,00' },
        { id: 3, src: 'produc-image-3.jpeg', nome: 'Adidas Gazelle Indoor', price: "350,00", priceDiscount: '300,00' },
        { id: 4, src: 'produc-image-4.jpeg', nome: 'Nike Court Vision Low', price: "350,00", priceDiscount: '300,00' },
        { id: 5, src: 'produc-image-5.jpeg', nome: 'Puma Speedcat OG', price: "350,00", priceDiscount: '300,00' },
        { id: 6, src: 'produc-image-1.jpeg', nome: 'Puma Speedcat OG', price: "350,00", priceDiscount: '300,00' },
        { id: 7, src: 'produc-image-2.jpeg', nome: 'New Balance 9060', price: "350,00", priceDiscount: '300,00' },
        { id: 8, src: 'produc-image-3.jpeg', nome: 'New Balance 550', price: "350,00", priceDiscount: '300,00' },
    ];

    const ProdutosEmAlta = styled.div`
        width: 1440px;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1%;
        justify-content: space-between;
        align-items: start;
        & a{
            text-decoration: none;
        }
        
        & div{
            display: flex;
            justify-content: space-between;
            width: 24.25%;
            flex-direction: column;
            margin-bottom: 20px;
            & img{
                width: 100%;
                border-radius: 10px;
            }
            & h2{
                color: ${(props) => props.theme.colors.darkgray3};
                font-weight: 400;
                font-size: 24px;
            }
            & div{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: start;
                width: 100%;
                gap: 10px;
                font-size: 24px;
                & .price{
                    display: flex;
                    font-size: 20px;
                    color: ${(props) => props.theme.colors.lightgray2};
                    text-decoration: line-through;
                }
                & .priceDiscount{
                    display: flex;
                    font-size: 20px;
                    font-weight: 700;
                    color: ${(props) => props.theme.colors.darkgray};
                }
            }
        }
`;

    return (
        <Layout>
            <Galery />

            <Section title="Coleção em destaque" titleAlign="left" link="">
                <ColectionImages>
                    <Link to="#"><img src="/collection-1.png" alt="Coleção em destaque" /></Link>
                    <Link to="#"><img src="/collection-2.png" alt="Coleção em destaque" /></Link>
                    <Link to="#"><img src="/collection-3.png" alt="Coleção em destaque" /></Link>
                </ColectionImages>
            </Section>

            <Section title="Produtos em alta" link="Ver todos ➜" display="flex">
            </Section>

            <ProdutosEmAlta>
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        
                        <Link to="#">
                            <ProductCard
                                imagemSrc={`${produto.src}`}
                                name={`${produto.nome}`}
                                price={`${produto.price}`}
                                priceDiscount={`${produto.priceDiscount}`}
                            />
                        </Link>

                    </div>
                ))}
            </ProdutosEmAlta>




        </Layout >
    );
}

export default HomePage;
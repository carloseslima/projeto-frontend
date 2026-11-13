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
        { id: 1, src: 'produc-image-1.jpeg', nome: 'Produto 1', preco: 3500 },
        { id: 2, src: 'produc-image-2.jpeg', nome: 'Produto 2', preco: 3500 },
        { id: 3, src: 'produc-image-3.jpeg', nome: 'Produto 3', preco: 3500 },
        { id: 4, src: 'produc-image-4.jpeg', nome: 'Produto 4', preco: 3500 },
        { id: 5, src: 'produc-image-5.jpeg', nome: 'Produto 5', preco: 3500 },
        { id: 6, src: 'product-thumb-1.jpeg', nome: 'Produto 6', preco: 3500 },
        { id: 7, src: 'product-thumb-2.jpeg', nome: 'Produto 7', preco: 3500 },
        { id: 8, src: 'product-thumb-3.jpeg', nome: 'Produto 8', preco: 3500 },
    ];

    const ProdutosEmAlta = styled.div`
        background-color: red;
        width: 1440px;
        max-width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: space-between;
        align-items: start;
        
        & div{
            background-color: blue;
            display: flex;
            justify-content: space-between;
            width: 90%;
            flex-direction: column;
            & img{
                width: 100%;
                border-radius: 10px;
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
                        <ProductCard
                            imagem={`${produto.src}`}
                            name={`${produto.nome}`}
                            price={`${produto.preco}`}
                        />
                    </div>
                ))}
            </ProdutosEmAlta>




        </Layout >
    );
}

export default HomePage;
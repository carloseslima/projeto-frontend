
import React from "react";
import { useSearchParams } from "react-router-dom";
import "../ProductListing.css";

const produtos = [
    {
        categoria: "Calçados",
        nome: "Tênis Esportivo Runner Pro",
        preco: 299.90,
        preco_com_desconto: 239.90,
        url: "produc-image-1.jpeg"
    },
    {
        categoria: "Áudio",
        nome: "Headset Gamer RGB Surround 7.1",
        preco: 349.90,
        preco_com_desconto: 279.90,
        url: "produc-image-2.jpeg"
    },
    {
        categoria: "Informática",
        nome: "Mouse Sem Fio Ergonômico",
        preco: 129.90,
        preco_com_desconto: 99.90,
        url: "produc-image-3.jpeg"
    },
    {
        categoria: "Eletrônicos",
        nome: "Smartwatch Sport Fit",
        preco: 499.90,
        preco_com_desconto: 399.90,
        url: "produc-image-4.jpeg"
    },
    {
        categoria: "Áudio",
        nome: "Caixa de Som Bluetooth Waterproof",
        preco: 219.90,
        preco_com_desconto: 189.90,
        url: "produc-image-5.jpeg"
    },
    {
        categoria: "Informática",
        nome: "Teclado Mecânico Compacto ABNT2",
        preco: 259.90,
        preco_com_desconto: 219.90,
        url: "/product-thumb-1.jpeg"
    },
    {
        categoria: "Calçados",
        nome: "Tênis Casual Urban Street",
        preco: 249.90,
        preco_com_desconto: 199.90,
        url: "/product-thumb-1.jpeg"
    },
    {
        categoria: "Acessórios",
        nome: "Mochila Executiva Impermeável com USB",
        preco: 189.90,
        preco_com_desconto: 149.90,
        url: "/product-thumb-1.jpeg"
    }
];

const ProductLinging = () => {

    const [searchParams] = useSearchParams();

    const termoBusca = searchParams.get("busca") || "";

    // Normaliza o texto para facilitar a comparação
    const normalizar = (texto) => {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
    };

    // Filtra os produtos pelo nome ou categoria
    const produtosFiltrados = termoBusca
        ? produtos.filter((produto) =>
            normalizar(produto.nome).includes(normalizar(termoBusca)) ||
            normalizar(produto.categoria).includes(normalizar(termoBusca))
        )
        : produtos;

    return (
        <div className="pagina-produtos">

            <h2>
                {termoBusca
                    ? `Resultados para: "${termoBusca}"`
                    : "Todos os produtos"}
            </h2>

            <p>
                {produtosFiltrados.length} produto(s) encontrado(s)
            </p>

            {produtosFiltrados.length > 0 ? (

                <div className="lista-produtos">

                    {produtosFiltrados.map((produto, index) => (

                        <div className="card-produto" key={index}>

                            <img
                                src={produto.url}
                                alt={produto.nome}
                            />

                            <div className="info-produto">

                                <span className="categoria-produto">
                                    {produto.categoria}
                                </span>

                                <h3>{produto.nome}</h3>

                                <p className="preco-antigo">
                                    {produto.preco.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </p>

                                <p className="preco-atual">
                                    {produto.preco_com_desconto.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    })}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            ) : (

                <div className="nenhum-produto">
                    <h3>Nenhum produto encontrado!</h3>
                    <p>
                        Não encontramos produtos relacionados a
                        "{termoBusca}".
                    </p>
                </div>

            )}

        </div>
    );
};

export default ProductLinging;

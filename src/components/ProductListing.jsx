import React, { useEffect, useState } from 'react';

import { api } from '../services';

const ProductListing = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const buscarProdutos = async () => {
            try {
                const resposta = await api.get('/products');
                setProdutos(resposta.data); // O Axios encapsula os dados nativamente na propriedade .data
            }
            catch (erro) {
                console.error('Erro ao buscar produtos:', erro);
            }
        };

        buscarProdutos();
    }, []);

    return (
        <section className="p-p-4">
            <h1>Lista de Produtos</h1>
            <ul className="p-grid p-nogutter">
                {produtos.map((produto) => (
                    <li key={produto.id} className="p-col-12 p-md-3 p-mb-2 p-p-2">
                        <div className="p-card p-p-3 p-shadow-4">
                            <img src={produto.image} alt={produto.title} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                            <div className="p-card-content mt-2">
                                <h3 className="p-card-title text-base">{produto.title}</h3>
                                <h6 className="p-card-category text-color-secondary uppercase">{produto.category}</h6>
                                <h2 className="p-card-price text-primary">${produto.price}</h2>
                                <div className="p-card-rating p-bg-primary p-py-1 p-px-2 border-round font-bold inline-block"> ⭐ {produto.rating.rate} </div>
                            </div>
                        </div>
                    </li>
                    ))}
            </ul>
        </section>
    );
};

export default ProductListing;
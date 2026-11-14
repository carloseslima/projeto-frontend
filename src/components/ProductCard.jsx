const ProductCard = ({ imagemSrc, name, price, priceDiscount }) => {
    return (
        <>
            <img src={`${imagemSrc}`} alt="" s />
            <h2>{name}</h2>
            <div>
                <span className="price">R$ {price}</span>
                <span className="priceDiscount">R$ {priceDiscount}</span>
            </div>

        </>
    );
}

export default ProductCard;
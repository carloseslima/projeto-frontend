const ProductCard = ({ imagemSrc, name, price, priceDiscount }) => {
    return (
        <>
            <img src={`${imagemSrc}`} alt="" s />
            <h2>{name}</h2>
            <div>
                <h3>{price}</h3>
                <h4>{priceDiscount}</h4>
            </div>

        </>
    );
}

export default ProductCard;
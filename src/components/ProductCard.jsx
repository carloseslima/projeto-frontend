const ProductCard = ({ imagem, name, price, priceDiscount, style}) => {
    return (
        <div>
            <img src={`${imagem}`} alt="" />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <h4>{priceDiscount}</h4>
        </div>
    );
}
 
export default ProductCard;
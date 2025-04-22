// src/components/ProductCard.jsx
import checkmark from '../assets/images/icons/checkmark.png';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img className="product-rating-stars" src={product.getStarsUrl()} alt="rating stars" />
        <div className="product-rating-count link-primary">{product.rating.count}</div>
      </div>

      <div className="product-price">{product.getPrice()}</div>

      <div className="product-quantity-container">
        <select defaultValue="1">
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      <div dangerouslySetInnerHTML={{ __html: product.extraInfoHTML() }} />

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src={checkmark} alt="Added" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={() => onAddToCart(product.id)}
      >
        Add to Cart
      </button>
    </div>
  );
}

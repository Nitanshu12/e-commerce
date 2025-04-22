// src/components/ProductGrid.jsx
import { useEffect, useState } from 'react';
import { cart, addToCart } from '../data/cart';
import { loadProducts } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    loadProducts((loadedProducts) => {
      setProducts(loadedProducts);
    });
  }, []);

  useEffect(() => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(totalQuantity);
  }, [cart]);

  const handleAddToCart = (productId) => {
    addToCart(productId);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartQuantity(totalQuantity);
  };

  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {/* Update cart quantity in header using a global state or context later if needed */}
    </>
  );
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemListContainer.css'; 

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://64af5037c85640541d4e42ea.mockapi.io/products');
        setProducts(response.data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Trippy Ind</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://64af5037c85640541d4e42ea.mockapi.io/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Trippy Ind</h1>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>IP: {product.ip}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
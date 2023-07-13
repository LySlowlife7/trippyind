import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log('Category ID:', id);
    } else {
      console.log('Home page');
    }
  }, [id]);

  return (
    <div>
      <h1>Trippy Ind</h1>
      {/* Mostrar los productos */}
    </div>
  );
};

export default ItemListContainer;
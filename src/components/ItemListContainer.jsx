import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productos } from '../asyncMock';

function ItemListContainer({ greeting }) {
  const { id } = useParams(); // categoryId desde la URL
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (id) {
      setItems(productos.filter((prod) => prod.categoria === id));
    } else {
      setItems(productos);
    }
  }, [id]);

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">{greeting}</h3>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.titulo}</h5>
                <p className="card-text">{item.descripcion}</p>
                <p className="card-text">
                  <small className="text-muted">Stock disponible: {item.stock}</small>
                </p>
                <Link to={`/item/${item.id}`} className="btn btn-outline-primary mt-2">
                  Ver detalle del producto
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;


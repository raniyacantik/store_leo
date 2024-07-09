import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
import './ProductList.css';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap components if necessary

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list container mt-9"> 
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productState.loading ? (
          <div className="col">
            <Card className="h-100 text-center p-4">
              <h2>Loading...</h2>
            </Card>
          </div>
        ) : productState.error ? (
          <div className="col">
            <Card className="h-100 text-center p-4">
              <h2>{productState.error}</h2>
            </Card>
          </div>
        ) : (
          productState.products.map((product) => (
            <div key={product.id} className="col">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="card-img-top img-fluid"
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-primary">${product.price}</Card.Text>
                    <Button variant="primary" onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;

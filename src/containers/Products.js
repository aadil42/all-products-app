import React, {useContext} from 'react';

import { ProductContext } from '../context/product-context';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  // const productList = useSelector(state => state.shop.products);
  const productList = useContext(ProductContext).products;
  console.log(productList);
  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;

// @ts-nocheck
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { ProductItem } from 'components';

import { doInitializeProductList } from 'actions/actionCreator';
import Styled from './index.style';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.reducer);

  const getProducts = useCallback(async () => {
    if (products.length > 0) return;

    const response = await axios.get('/products');

    dispatch(doInitializeProductList({ products: response.data }));
  }, [products, dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Styled.ProductListPage>
      {products.length > 0 ? (
        <Styled.ProductList>
          {products.map(({ id, name, price, image }) => {
            return id && <ProductItem key={id} id={id} name={name} price={price} image={image} />;
          })}
        </Styled.ProductList>
      ) : (
        <Styled.Loading>열심히 로딩중 .. ✨</Styled.Loading>
      )}
    </Styled.ProductListPage>
  );
};

export default ProductListPage;

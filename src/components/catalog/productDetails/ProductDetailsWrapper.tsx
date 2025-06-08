import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { getProductByArticleRouteThunk } from '../../../store/thunks/catalog/catalogThunk';
import { useAppDispatch } from '../../../store/hooks/app';
import { useCatalog } from '../../../store/hooks/catalog/useCatalog';

const ProductDetailsWrapper: React.FC = (): JSX.Element => {
  const { articleRoute } = useParams();
  const dispatch = useAppDispatch();
  const prevArticleRouteRef = useRef<string | undefined>(articleRoute);

  useEffect(() => {
    // Проверяем, изменился ли articleRoute
    if (articleRoute) {
      dispatch(getProductByArticleRouteThunk(articleRoute));
      prevArticleRouteRef.current = articleRoute;
    }
  }, [articleRoute, dispatch]);

  const { productDetails } = useCatalog();

  return <ProductDetails product={productDetails} />;
};

export default ProductDetailsWrapper;

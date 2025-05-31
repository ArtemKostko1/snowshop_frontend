import React, { useState, useMemo, useEffect } from 'react';
import CatalogSort from './CatalogSort';
import CatalogGrid from './CatalogGrid';
import SelectDefault from '../../components/_common/select/SelectDefault';
import styles from './CatalogPage.styles';
import {
  getAllCatalogProductsThunk,
  getProductsByCategoryThunk,
} from '../../store/thunks/catalog/catalogThunk';
import { getAllCategoriesThunk } from '../../store/thunks/categories/categoriesThunk';
import { useCatalog } from '../../store/hooks/catalog/useCatalog';
import { useCategories } from '../../store/hooks/categories/useCategories';
import { SortType } from '../../common/types/sorting/sortTypes';
import { useAppDispatch } from '../../store/hooks/app';
import { Box, SelectChangeEvent, Pagination, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { clearCatalogProducts } from '../../store/slices/catalog/catalogSlice';

const pageSizeOptions = [
  { value: 8, label: '8' },
  { value: 12, label: '32' },
  { value: 16, label: '64' },
  { value: 20, label: '128' },
];

const CatalogPage: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { categoryName } = useParams<{ categoryName?: string }>();
  const { catalogProducts, isCatalogProductsLoading } = useCatalog();
  const { categories } = useCategories();
  const [sort, setSort] = useState<SortType>('default');
  const [pageSize, setPageSize] = useState<number>(12);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearCatalogProducts());

    if (categoryName) {
      dispatch(getProductsByCategoryThunk(categoryName));
    } else {
      dispatch(getAllCatalogProductsThunk());
    }
  }, [dispatch, categoryName]);

  // сортировка
  const sortedProducts = useMemo(() => {
    let arr = [...catalogProducts];
    switch (sort) {
      case 'name-asc':
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        arr.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-asc':
        arr.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-desc':
        arr.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      default:
        break;
    }
    return arr;
  }, [catalogProducts, sort]);

  // пагинация
  const pagedProducts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedProducts.slice(start, start + pageSize);
  }, [sortedProducts, page, pageSize]);

  // сброс страницы при изменении pageSize или сортировки
  useEffect(() => {
    setPage(1);
  }, [pageSize, sort]);

  // получение имени категории
  //  id
  const getCategoryName = (categoryId?: number) => {
    if (!categoryId) return '-';
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.name : '-';
  };

  const totalPages = Math.ceil(sortedProducts.length / pageSize);

  // Компонент для отображения пустого состояния
  const EmptyState = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 0',
        minHeight: '300px',
      }}
    >
      <SearchOffIcon sx={{ fontSize: 80, color: '#aaa', mb: 2 }} />
      <Typography variant="h5" color="text.secondary">
        Ничего не найдено
      </Typography>
    </Box>
  );

  return (
    <Box>
      <Stack spacing={3}>
        <Box sx={styles.sortingPanel}>
          <Box sx={styles.sorting}>
            <Typography>Сортировка</Typography>
            <CatalogSort
              value={sort}
              onChange={setSort}
              isCatalogProductsLoading={isCatalogProductsLoading}
            />
          </Box>

          <Box sx={styles.showSize}>
            <Typography>Показать</Typography>
            <SelectDefault
              label=""
              value={pageSize}
              options={pageSizeOptions}
              onChange={(e: SelectChangeEvent<string | number>) =>
                setPageSize(Number(e.target.value))
              }
              disabled={isCatalogProductsLoading}
              width="75px"
            />
          </Box>
        </Box>

        <Box>
          {!isCatalogProductsLoading && sortedProducts.length === 0 ? (
            <EmptyState />
          ) : (
            <CatalogGrid
              products={pagedProducts.map((p) => ({
                ...p,
                category: getCategoryName(p.categoryId),
              }))}
            />
          )}
        </Box>

        {sortedProducts.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
              siblingCount={1}
              boundaryCount={1}
            />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default CatalogPage;

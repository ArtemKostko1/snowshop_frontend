import React, { useState, useMemo, useEffect } from "react";
import CatalogSort from "./CatalogSort";
import CatalogGrid from "./CatalogGrid";
import SelectDefault from "../../components/_common/select/SelectDefault";
import styles from "./CatalogPage.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getAllProductsThunk } from "../../store/thunks/products/productsThunk";
import { getAllCategoriesThunk } from "../../store/thunks/categories/categoriesThunk";
import { useProducts } from "../../store/hooks/products/useProducts";
import { useCategories } from "../../store/hooks/categories/useCategories";
import { SortType } from "../../common/types/product/sortTypes";
import { Box, SelectChangeEvent, Pagination } from "@mui/material";

const pageSizeOptions = [
  { value: 8, label: "8" },
  { value: 12, label: "12" },
  { value: 16, label: "16" },
  { value: 20, label: "20" },
];

const CatalogPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isProductsLoading } = useProducts();
  const { categories } = useCategories();
  const [sort, setSort] = useState<SortType>("default");
  const [pageSize, setPageSize] = useState<number>(12);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getAllProductsThunk());
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  // сортировка
  const sortedProducts = useMemo(() => {
    let arr = [...products];
    switch (sort) {
      case "name-asc":
        arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        arr.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        arr.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-desc":
        arr.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      default:
        break;
    }
    return arr;
  }, [products, sort]);

  // пагинация
  const pagedProducts = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedProducts.slice(start, start + pageSize);
  }, [sortedProducts, page, pageSize]);

  // сброс страницы при изменении pageSize или сортировки
  useEffect(() => {
    setPage(1);
  }, [pageSize, sort]);

  // получение имени категории по id
  const getCategoryName = (categoryId?: number) => {
    if (!categoryId) return "-";
    const cat = categories.find((c) => c.id === categoryId);
    return cat ? cat.name : "-";
  };

  return (
    <Box>
      <div style={styles.layout}>
        <div style={styles.leftPanel}>
          <CatalogSort value={sort} onChange={setSort} />
        </div>
        <div style={styles.rightPanel}>
          <div style={styles.topBar}>
            <span>Показать</span>
            <div style={{ width: 90 }}>
              <SelectDefault
                label="Кол-во"
                value={pageSize}
                options={pageSizeOptions}
                onChange={(e: SelectChangeEvent<string | number>) =>
                  setPageSize(Number(e.target.value))
                }
                disabled={isProductsLoading}
              />
            </div>
          </div>
        </div>
      </div>
      <Box>
        <CatalogGrid
          products={pagedProducts.map((p) => ({
            ...p,
            category: getCategoryName(p.categoryId),
          }))}
        />
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={Math.ceil(sortedProducts.length / pageSize)}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogPage;

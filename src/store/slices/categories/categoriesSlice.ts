import { createSlice } from "@reduxjs/toolkit";
import { createCategoryThunk, deleteCategoryThunk, getAllCategoriesThunk, updateCategoryThunk } from "../../thunks/categories/categoriesThunk";
import { ICategory } from "../../../common/types/category/categoryTypes";

const initialState = {
  categories: [] as ICategory[],
  isCategoriesLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllCategoriesThunk
    // Событие в момент выполенения запроса
    builder.addCase(getAllCategoriesThunk.pending, (state) => {
      state.isCategoriesLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getAllCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isCategoriesLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getAllCategoriesThunk.rejected, (state) => {
      state.isCategoriesLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // createCategoryThunk
    // Событие в момент выполенения запроса
    builder.addCase(createCategoryThunk.pending, (state) => {
      state.isCategoriesLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(createCategoryThunk.fulfilled, (state, action) => {
      state.categories.push(action.payload);
      state.isCategoriesLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(createCategoryThunk.rejected, (state) => {
      state.isCategoriesLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // updateCategoryThunk
    // Событие в момент выполенения запроса
    builder.addCase(updateCategoryThunk.pending, (state) => {
      state.isCategoriesLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(updateCategoryThunk.fulfilled, (state, action) => {
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );

      if (index !== -1) {
        state.categories[index] = action.payload;
      }

      state.isCategoriesLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(updateCategoryThunk.rejected, (state) => {
      state.isCategoriesLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // deleteCategoryThunk
    // Событие в момент выполенения запроса
    builder.addCase(deleteCategoryThunk.pending, (state) => {
      state.isCategoriesLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(deleteCategoryThunk.fulfilled, (state, action) => {
      state.categories = state.categories.filter((category) => category.id !== action.payload);
      state.isCategoriesLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(deleteCategoryThunk.rejected, (state) => {
      state.isCategoriesLoading = false;
    })
  },
});

export default categoriesSlice.reducer;

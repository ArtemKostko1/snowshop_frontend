import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appErrors from "../../../assets/constants/errors";
import { errorsHandling } from "../_utils/errorsHandling";
import toastMessages from "../../../assets/constants/toastMessages";
import { ErrorResponse } from "../../../common/types/error/errorTypes";
import { ICategory } from "../../../common/types/category/categoryTypes";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../../../api/CategoryService";

const getAllCategories_baseError = appErrors.categoriesErrors.GET_ALL_CATEGORIES;
const getCategoryById_baseError = appErrors.categoriesErrors.GET_CATEGORY_BY_ID;
const createCategory_baseError = appErrors.categoriesErrors.CREATE_CATEGORY;
const updateCategory_baseError = appErrors.categoriesErrors.UPDATE_CATEGORY;
const deleteCategory_baseError = appErrors.categoriesErrors.DELETE_CATEGORY;

export const getAllCategoriesThunk = createAsyncThunk<
  ICategory[],
  void,
  { rejectValue: string }
>("categories/getAllCategories", async (_, { rejectWithValue }) => {
  try {
    return await getAllCategories();
  } catch (error) {
    const errorMessage = errorsHandling(
      getAllCategories_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const getCategoryByIdThunk = createAsyncThunk<
  ICategory,
  number,
  { rejectValue: string }
>("categories/getCategoryById", async (categoryId, { rejectWithValue }) => {
  try {
    return await getCategoryById(categoryId);
  } catch (error) {
    const errorMessage = errorsHandling(
      getCategoryById_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const createCategoryThunk = createAsyncThunk<
  ICategory,
  Omit<ICategory, "id">,
  { rejectValue: string }
>("categories/createCategory", async (categoryData, { rejectWithValue }) => {
  try {
    const createdCategory = await createCategory(categoryData as ICategory);
    toast.success(toastMessages.brandsMessages.BRAND_CREATED);
    return createdCategory;
  } catch (error) {
    const errorMessage = errorsHandling(
      createCategory_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const updateCategoryThunk = createAsyncThunk<
  ICategory,
  ICategory,
  { rejectValue: string }
>("categories/updateCategory", async (categoryData, { rejectWithValue }) => {
  try {
    const updatedCategory = await updateCategory(categoryData.id, categoryData);
    toast.success(toastMessages.categoriesMessages.CATEGORY_UPDATED);
    return updatedCategory;
  } catch (error) {
    const errorMessage = errorsHandling(
      updateCategory_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const deleteCategoryThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("categories/deleteCategory", async (categoryId, { rejectWithValue }) => {
  try {
    await deleteCategory(categoryId);
    toast.success(toastMessages.categoriesMessages.CATEGORY_DELETED);
    return categoryId;
  } catch (error) {
    const errorMessage = errorsHandling(
      deleteCategory_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

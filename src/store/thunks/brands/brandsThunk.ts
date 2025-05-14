import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import appErrors from "../../../assets/constants/errors";
import { errorsHandling } from "../_utils/errorsHandling";
import toastMessages from "../../../assets/constants/toastMessages";
import { ErrorResponse } from "../../../common/types/error/errorTypes";
import { IBrand } from "../../../common/types/brand/brandTypes";
import { createBrand, deleteBrand, getAllBrands, getBrandById, updateBrand } from "../../../api/BrandService";

const getAllBrands_baseError = appErrors.brandsErrors.GET_ALL_BRANDS;
const getBrandById_baseError = appErrors.brandsErrors.GET_BRAND_BY_ID;
const createBrand_baseError = appErrors.brandsErrors.CREATE_BRAND;
const updateBrand_baseError = appErrors.brandsErrors.UPDATE_BRAND;
const deleteBrand_baseError = appErrors.brandsErrors.DELETE_BRAND;

export const getAllBrandsThunk = createAsyncThunk<
  IBrand[],
  void,
  { rejectValue: string }
>("brands/getAllBrands", async (_, { rejectWithValue }) => {
  try {
    return await getAllBrands();
  } catch (error) {
    const errorMessage = errorsHandling(
      getAllBrands_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const getBrandByIdThunk = createAsyncThunk<
  IBrand,
  number,
  { rejectValue: string }
>("brands/getBrandById", async (brandId, { rejectWithValue }) => {
  try {
    return await getBrandById(brandId);
  } catch (error) {
    const errorMessage = errorsHandling(
      getBrandById_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const createBrandThunk = createAsyncThunk<
  IBrand,
  Omit<IBrand, "id">,
  { rejectValue: string }
>("brands/createBrand", async (brandData, { rejectWithValue }) => {
  try {
    const createdBrand = await createBrand(brandData as IBrand);
    toast.success(toastMessages.brandsMessages.BRAND_CREATED);
    return createdBrand;
  } catch (error) {
    const errorMessage = errorsHandling(
      createBrand_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const updateBrandThunk = createAsyncThunk<
  IBrand,
  IBrand,
  { rejectValue: string }
>("brands/updateBrand", async (brandData, { rejectWithValue }) => {
  try {
    const updatedBrand = await updateBrand(brandData.id, brandData);
    toast.success(toastMessages.brandsMessages.BRAND_UPDATED);
    return updatedBrand;
  } catch (error) {
    const errorMessage = errorsHandling(
      updateBrand_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

export const deleteBrandThunk = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("brands/deleteBrand", async (brandId, { rejectWithValue }) => {
  try {
    await deleteBrand(brandId);
    toast.success(toastMessages.brandsMessages.BRAND_DELETED);
    return brandId;
  } catch (error) {
    const errorMessage = errorsHandling(
      deleteBrand_baseError,
      error as ErrorResponse
    );
    return rejectWithValue(errorMessage);
  }
});

import { createSlice } from "@reduxjs/toolkit";
import { createBrandThunk, deleteBrandThunk, getAllBrandsThunk, updateBrandThunk } from "../../thunks/brands/brandsThunk";
import { IBrand } from "../../../common/types/brand/brandTypes";

const initialState = {
  brands: [] as IBrand[],
  isBrandsLoading: false,
};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getAllBrandsThunk
    // Событие в момент выполенения запроса
    builder.addCase(getAllBrandsThunk.pending, (state) => {
      state.isBrandsLoading = true;
    });
    // Событие после успешного выполнения запроса
    builder.addCase(getAllBrandsThunk.fulfilled, (state, action) => {
      state.brands = action.payload;
      state.isBrandsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(getAllBrandsThunk.rejected, (state) => {
      state.isBrandsLoading = false;
    });

    ////////////////////////////////////////////////////////////////////////////

    // createBrandThunk
    // Событие в момент выполенения запроса
    builder.addCase(createBrandThunk.pending, (state) => {
      state.isBrandsLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(createBrandThunk.fulfilled, (state, action) => {
      state.brands.push(action.payload);
      state.isBrandsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(createBrandThunk.rejected, (state) => {
      state.isBrandsLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // updateBrandThunk
    // Событие в момент выполенения запроса
    builder.addCase(updateBrandThunk.pending, (state) => {
      state.isBrandsLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(updateBrandThunk.fulfilled, (state, action) => {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.id
      );

      if (index !== -1) {
        state.brands[index] = action.payload;
      }

      state.isBrandsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(updateBrandThunk.rejected, (state) => {
      state.isBrandsLoading = false;
    })

    ////////////////////////////////////////////////////////////////////////////

    // deleteBrandThunk
    // Событие в момент выполенения запроса
    builder.addCase(deleteBrandThunk.pending, (state) => {
      state.isBrandsLoading = true;
    })
    // Событие после успешного выполнения запроса
    builder.addCase(deleteBrandThunk.fulfilled, (state, action) => {
      state.brands = state.brands.filter((brand) => brand.id !== action.payload);
      state.isBrandsLoading = false;
    });
    // Событие в случае неудачного выполнения запроса
    builder.addCase(deleteBrandThunk.rejected, (state) => {
      state.isBrandsLoading = false;
    })
  },
});

export default brandsSlice.reducer;

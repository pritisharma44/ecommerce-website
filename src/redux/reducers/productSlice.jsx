import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch product list
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}get-products`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  
  return data.data; 
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Use the returned 'data' array from the API
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

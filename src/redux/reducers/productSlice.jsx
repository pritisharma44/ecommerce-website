import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}get-products`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  
  return data.data; 
});

export const viewProduct = createAsyncThunk('products/viewProduct', async (productId) => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}view-product-details/${productId}`);
  
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  
  return data.data; 
});

// 🛒 3️⃣ Add to Cart API
export const addToCart = createAsyncThunk('products/addToCart', async ({ product_variant_id, quantity, size }, { getState }) => {
  // const token = getState().auth.token; // 🔑 Get auth token from Redux state
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzQxMDcxMDkzLCJleHAiOjE3NDEwNzQ2OTMsIm5iZiI6MTc0MTA3MTA5MywianRpIjoiR0R3OGZsdjBVT0R6MllQTiIsInN1YiI6IjIiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.7YMNCgGiXtAnoAmaDAPyAclEtT4XREVbiWtnnEq8ydc";

  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}add-to-cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, // ✅ Send Auth Token
    },
    body: JSON.stringify({ product_variant_id, quantity, size }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  const data = await response.json();
  
  return data; 
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
    cartStatus: 'idle',
    cartError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handling fetchProducts
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

    // Handling viewProduct
    builder
      .addCase(viewProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(viewProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload; // Use the returned product details
      })
      .addCase(viewProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

      builder
      .addCase(addToCart.pending, (state) => {
        state.cartStatus = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.cartStatus = 'succeeded';
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.cartStatus = 'failed';
        state.cartError = action.error.message;
      });
  },
});

export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const api_url = import.meta.env.VITE_API_URL;
// Fetch All Products
export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(api_url);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


const ProductSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        isLoading: false,
        error: null,
        Favorites_list: [],
    },
    reducers: {
        "Add_to_Favorite": (state, action) => {
            let favorite_list = JSON.parse(localStorage.getItem('Favorites_list')) || [];
            let product = action.payload;

            let check_product_if_exist = favorite_list.find(p => p.id == product.id)

            if (check_product_if_exist) {
                toast.info('This product is already in your Favorites list. No need to add it again!')
                return
            }
            state.Favorites_list.push(product)
            localStorage.setItem('Favorites_list', JSON.stringify(state.Favorites_list));
            toast.success('Product successfully added to your Favorites! Check your list anytime.')
            toast.dismiss();
        },
        "fetch_Favorite_list": (state, action) => {
            let favorite_list = JSON.parse(localStorage.getItem('Favorites_list')) || [];
            state.Favorites_list = favorite_list;

        },
        "Remove_from_Favorite_list": (state, action) => {
            state.Favorites_list = state.Favorites_list.filter(product => product.id != action.payload)
            localStorage.setItem('Favorites_list', JSON.stringify(state.Favorites_list))
            toast.info('Product removed from Favorites. You can always add it back later!');
            toast.dismiss();
        }


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { Add_to_Favorite, fetch_Favorite_list, Remove_from_Favorite_list } = ProductSlice.actions
export default ProductSlice.reducer;
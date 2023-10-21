import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../axios/api';
import { ipAddress } from '../../component/SearchBox'; 

const initialState = {
  info: null,
};

export const fetchInfo = createAsyncThunk('info/fetchInfo', async (ipAddress) => {
  const response = await api.get(`/api/v2/country,city?apiKey=at_vvh47PFZZgS7LVUzcXTjBVraYi2JI&ipAddress=${ipAddress}`);
  return response.data;
});


export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(fetchInfo.rejected, (state) => {
        state.info = 'Error';
      });
  },
});

export default infoSlice.reducer;

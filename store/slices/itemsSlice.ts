import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ROLLS } from "@/server/data";

export interface Roll {
  id: number;
  name: string;
  recipe: string;
  price: string;
  weight: string;
  imageUrl: string;
}

interface ExampleState {
  allItems: Roll[];
}

const initialState: ExampleState = {
  allItems: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    fetchItems: (state) => {
      state.allItems = ROLLS;
    },
  },
});

export const { fetchItems } = itemsSlice.actions;
export default itemsSlice.reducer;

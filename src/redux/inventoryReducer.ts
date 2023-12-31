import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewInventory, Slot } from '../types/Inventory';
import { Item } from '../types/Item';

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState: NewInventory(),
    reducers: {
        reset: () => NewInventory(),
        changeItem: (inventory, action: PayloadAction<{slot: Slot, item: Item }>) => {inventory[action.payload.slot] = action.payload.item}
    }
});

export const { 
    reset,
    changeItem
} = inventorySlice.actions;

export default inventorySlice.reducer;

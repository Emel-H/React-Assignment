import { create } from 'zustand';

export const cartStore = create((set) => ({
    count: 0,
    items: [],
    prices:[],
    addOne: (item,price) => set((state) => ({ 
        items: [
            ...state.items,
            {
                item,
            },
        ],
        prices: [
            ...state.prices,
            {
                price,
            },
        ],
        count: state.count + 1
    })),
    clear: () => set({ 
        items: [],
        prices: [],
        count: 0 
    }),
}));

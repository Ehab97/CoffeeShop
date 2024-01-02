import { create } from "zustand";
import { createWithEqualityFn } from "zustand/traditional";
import coffeeDrinks from "../data/CoffeData";
import { format } from 'date-fns';

const store = (set) => ({
   drinks: coffeeDrinks,
   drink: null,
   user: null,
   userLogin: (user) => set({ user }),
   //    getDrink: (id) => set((store) => store.drinks.find(drink.id == id)),
   getDrink: (id) => set((store) => ({ drink: store.drinks.find((drink) => drink.id === id) })),
   addDrink: (drink) => set((store) => ({ drinks: [...store.drinks, drink] })),
   deleteDrink: (id) => set((store) => ({ drinks: store.drinks.filter((drink) => drink.id !== id) })),
   updateDrink: (id, newDrink) =>
      set((store) => ({ drinks: store.drinks.map((drink) => (drink.id === id ? newDrink : drink)) })),
   carts: [],
   addToCart: (cart) => set((store) => ({ carts: [...store.carts, cart] })),
   deleteCart: (id) => set((store) => ({ carts: store.carts.filter((cart) => cart.id !== id) })),
   updateCart: (id, newCart) =>
      set((store) => ({ carts: store.carts.map((cart) => (cart.id === id ? newCart : cart)) })),
   orders: [],
   createOrder: () => {
      // Create an order using the current date from carts and user information
      set((store) => {
         const { carts, user, orders } = store;
         // Calculate total price for the order
         const totalPrice = carts.reduce((acc, cartItem) => {
            const itemPrice = parseFloat(cartItem.drink.price) * cartItem.quantity;
            return acc + itemPrice;
         }, 0);
         console.log({ carts });
         const currentDate = new Date();
         const formattedDate = format(currentDate, "yyyy-MM-dd HH:mm");
         const order = {
            id: Date.now().toString(36),
            date:formattedDate,
            items: [...carts],
            user,
            totalPrice: totalPrice.toFixed(2),
         };
         const newStore = {
            ...store,
            carts: [],
            orders: [...orders, order],
         };
         return newStore;
      });
   },
});

// export const useStore = create(store);
export const useStore = createWithEqualityFn(store);

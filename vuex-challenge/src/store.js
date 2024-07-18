import { createStore } from 'vuex';
import productsModule from './store/products';
import cartModule from './store/cart';
const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {},
  mutations: {},
  actions: {},
  getters: {},
});
export default store;

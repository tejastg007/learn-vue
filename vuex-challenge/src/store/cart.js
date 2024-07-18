const cartModule = {
  namespaced: true,
  state() {
    return {
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  mutations: {
    // payload = {id,image,title,price}
    addProduct(state, payload) {
      console.log('payload', payload);
      const productData = payload;
      const productInCartIndex = state.cart.items.findIndex((ci) => {
        return ci.productId === productData.id;
      });

      if (productInCartIndex > -1) {
        state.cart.items[productInCartIndex].qty++;
      } else {
        state.cart.items.push({
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        });
      }
      state.cart.qty++;
      state.cart.total += productData.price;
    },

    removeProduct(state, payload) {
      const productId = payload.productId;
      const productInCartIndex = state.cart.items.findIndex(
        (cartItem) => cartItem.productId === productId
      );
      if (productInCartIndex >= 0) {
        const productData = state.cart.items[productInCartIndex];
        state.cart.items.splice(productInCartIndex, 1);
        state.cart.qty -= productData.qty;
        state.cart.total -= productData.qty * productData.price;
      } else {
        console.log('no product found');
      }
    },
  },
  actions: {
    addProduct(context, payload) {
      context.commit('addProduct', payload);
    },
    removeProduct(context, payload) {
      context.commit('removeProduct', payload);
    },
  },
  getters: {
    cartItems(state) {
      return state.cart.items;
    },
    cartTotal(state) {
      return state.cart.total;
    },
    cartQuantity(state) {
      return state.cart.qty;
    },
  },
};

export default cartModule;

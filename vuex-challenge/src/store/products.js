const productsModule = {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://images.pexels.com/photos/10297673/pexels-photo-10297673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://images.pexels.com/photos/5589287/pexels-photo-5589287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
    };
  },
  getters: {
    productsList(state) {
      return state.products;
    },
  },
};

export default productsModule;

// store.ts
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isOpen: false,

  },
  mutations: {
    // Your mutations go here
  },
  actions: {
    // Your actions go here
  },
  getters: {
    hiddenClass(state: { isOpen: any; }){
      return !state.isOpen ? "hidden" : "";
    }
  },
});

export default store;

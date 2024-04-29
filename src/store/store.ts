import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    value: 0,
  }),
  actions: {
    increment() {
      this.value++;
    },
  },
});
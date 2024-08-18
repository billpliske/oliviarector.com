import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    isMenuOpen: false,
  }),
  // when you first need to manipulate the state
  getters: {},
  // put async before function name, if needed
  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
})

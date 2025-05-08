Vue.createApp({
  data() {
    return {
      isBoxOpen: false,
      isBoxVisible: true,
      magicPower: 80
    }
  },
  methods: {
    toggleBox() {
      this.isBoxOpen = !this.isBoxOpen
      this.isBoxVisible = !this.isBoxVisible
    }
  }
}).mount('#conditional')

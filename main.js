const { createApp, ref } = Vue

createApp({
  setup(){
    const product = ref('Boots')
    const productDescription = ref('A pair of warm, fuzzy boots')
    return {
      product,
      productDescription
    }
  }

}).mount('#app')
const { createApp, ref } = Vue

createApp({
  setup(){
    const product = ref('Boots')
    const image = ref('./assets/images/socks_green.jpg')
    const productDescription = ref('A pair of warm, fuzzy boots')
    const url = ref('https://www.camt.cmu.ac.th')
    return {
      product,
      image,
      productDescription,
      url
    }
  }

}).mount('#app')
<template>
  <h2 class="text-4xl text-center font-semibold my-4">All products</h2>
  <!-- Render the list of products using the ProductList component -->
  <ProductList :productsArray="products" />
</template>

<script>
import axios from 'axios'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'MainPage',
  components: {
    ProductList
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    // Fetch products from the server
    fetchProducts() {
      axios.get(process.env.VUE_APP_ROOT_API + 'products')
      .then((response) => {
        this.products = response.data
      })
      .catch((error) => {
          console.error('Failed to fetch products:', error)
        })
    },
  }
}
</script>
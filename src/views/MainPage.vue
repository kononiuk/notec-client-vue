<template>
  <div v-show="isLoading" class="absolute top-0 right-0 bottom-0 left-0 z-99 flex items-center justify-center bg-slate-50/75">
    <LoaderSpin />
  </div>
  <h2 class="text-4xl text-center font-semibold my-4">All products</h2>
  <!-- Render the list of products using the ProductList component -->
  <ProductList :productsArray="products" />
</template>

<script>
import axios from 'axios'
import ProductList from '../components/ProductList.vue'
import LoaderSpin from '../components/LoaderSpin.vue'

export default {
  name: 'MainPage',
  components: {
    ProductList,
    LoaderSpin
  },
  data() {
    return {
      products: [],
      isLoading: true
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
      .finally(() => {
        this.isLoading = false
      })
    },
  }
}
</script>
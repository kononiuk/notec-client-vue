<template>
  <h2 class="text-4xl text-center font-semibold my-4">{{ category.name }}</h2>
  <!-- Render the ProductList component and pass productsArray prop -->
  <ProductList :productsArray="products" />
</template>

<script>
import axios from 'axios'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'CategoryPage',
  setup() {
    // Define reactive variables
    const category = ref({})
    const products = ref([])
    const route = useRoute()

    // Function to fetch category data from the server
    function getCategoryData(url) {
      axios.get(process.env.VUE_APP_ROOT_API + 'categories', { params: { url }})
      .then((response) => {
        category.value = response.data[0]

        if (category.value.products.length) {
          fetchProducts()
        } else {
          products.value = []
        }
      })
      .catch((error) => {
          console.error('Error fetching categories:', error);
        })
    }

    // Function to fetch products associated with the category
    function fetchProducts() {
      axios.get(process.env.VUE_APP_ROOT_API + 'products', { params: { productId: category.value.products }})
      .then((response) => {
        products.value = response.data
      })
      .catch((error) => {
          console.error('Error fetching products:', error);
        })
    }

    // Watch for route changes and update category data
    watchEffect(() => {
      getCategoryData(route.params.name)
    })
    
    return { category, products }
  },
  components: {
    ProductList
  }
}
</script>
<template>
  <div v-show="isLoading" class="absolute top-0 right-0 bottom-0 left-0 z-99 flex items-center justify-center bg-slate-50/75">
    <LoaderSpin />
  </div>
  <h2 class="text-4xl text-center font-semibold my-4">{{ category.name }}</h2>
  <!-- Render the ProductList component and pass productsArray prop -->
  <ProductList :productsArray="products" />
</template>

<script>
import axios from 'axios'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductList from '../components/ProductList.vue'
import LoaderSpin from '../components/LoaderSpin.vue'

export default {
  name: 'CategoryPage',
  setup() {
    // Define reactive variables
    const category = ref({})
    const products = ref([])
    const router = useRouter()
    const route = useRoute()
    const isLoading= ref(true)

    // Function to fetch category data from the server
    function getCategoryData(url) {
      isLoading.value = true
      axios.get(process.env.VUE_APP_ROOT_API + 'categories', { params: { url }})
      .then((response) => {
        if (!response.data[0]) {
          return router.push('/not-found')
        }
          
        category.value = response.data[0]

        if (category.value.products.length) {
          fetchProducts()
        } else {
          products.value = []
          isLoading.value = false
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error)
      })
    }

    // Function to fetch products associated with the category
    function fetchProducts() {
      axios.get(process.env.VUE_APP_ROOT_API + 'products', { params: { productId: category.value.products }})
      .then((response) => {
        products.value = response.data
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
      .finally(() => {
        isLoading.value = false
      })
    }

    // Watch for route changes and update category data
    watchEffect(() => {
      getCategoryData(route.params.name)
    })
    
    return { category, products, isLoading }
  },
  components: {
    ProductList,
    LoaderSpin
  }
}
</script>
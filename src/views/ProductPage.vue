<template>
  <div v-show="isLoading" class="absolute top-0 right-0 bottom-0 left-0 z-99 flex items-center justify-center bg-slate-50/75">
    <LoaderSpin />
  </div>
  <div class="flex flex-col items-center">
    <h2 class="text-4xl font-semibold mt-10 mb-6 text-center">{{ product.name }}</h2>
    <span class="text-m italic mb-4">SKU: {{ product.sku }}</span>
    <span class="text-xl text-semibold mb-4">
      <span v-if="product.inStock" class="text-green-600">In stock</span>
      <span v-else class="text-red-600">Out of stock</span>
    </span>
    <span class="text-2xl text-bold mb-4">{{ product.displayPrice }}</span>
    <div class="actions">
      <button v-if="product.inStock" class="mx-auto text-center bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"><span>Add to cart</span></button>
      <span v-else class="font-bold block py-2 px-4">Out of stock</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
import LoaderSpin from '../components/LoaderSpin.vue'

export default {
  data() {
    return {
      product: {},
      isLoading: true
    }
  },
  mounted() {
    // Make an HTTP request to fetch categories
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      const route = useRoute()

      axios.get(process.env.VUE_APP_ROOT_API + 'products', { params: { url: route.params.name }})
      .then((response) => {
        if (response.data[0]) {
          document.title = `${response.data[0].name}`;
          this.product = response.data[0]
        } else {
          this.$router.push('/not-found')
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error)
      })
      .finally(() => {
        this.isLoading = false
      })
    },
  },
  components: {
    LoaderSpin
  }
}
</script>
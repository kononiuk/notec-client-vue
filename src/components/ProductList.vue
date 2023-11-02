<template>
  <!-- Display a list of products -->
  <ul v-if="productsArray.length" class="products-list grid grid-cols-4 gap-8 max-w-7xl px-5 mx-auto">
    <!-- Loop through productsArray and display each product -->
    <li v-for="product in productsArray" :key="product.id" class="mb-2 p-4 bg-neutral-100 rounded">
      <div class="product flex flex-col text-center">
        <router-link :to="'/product/' + product.url">{{ product.name }}</router-link>
        <span class="price">{{product.displayPrice}}</span>
        <div class="actions w-full">
          <!-- Check if the product is in stock -->
          <button v-if="product.inStock" class="mx-auto text-center bg-zinc-700 hover:bg-zinc-500 text-white font-bold py-2 px-4 rounded"><span>Add to cart</span></button>
          <span v-else class="font-bold block py-2 px-4">Out of stock</span>
        </div>
      </div>
    </li>
  </ul>
  <!-- Show a message when no products are found -->
  <p v-else class="text-bold text-xl text-center">No products were found</p>
</template>

<script>
import { ref, watchEffect } from 'vue'

export default {
  props: {
    productsArray: {
      type: Array,
      default: () => ([])
    }
  },
  setup(props) {
    // Define a reactive variable to store products
    const products = ref(props.productsArray)

    // Watch for changes in props.productsArray and update the products variable
    watchEffect(() => {
      products.value = [...props.productsArray]
    })

    return {
      products // Return products variable for template access
    }
  }
}
</script>
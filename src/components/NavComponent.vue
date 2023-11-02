<template>
  <nav class="ml-auto">
    <ul class="flex items-center h-full gap-2">
      <!-- Loop through categories and create links -->
      <li v-for="category in categories" :key="category.categoryId">
        <router-link :to="'/category/' + category.url">{{ category.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    // When the component is mounted, fetch the categories
    this.fetchCategories()
  },
  methods: {
    // Fetch categories from the server
    fetchCategories() {
      axios.get(process.env.VUE_APP_ROOT_API + 'categories')
      .then((response) => {
        this.categories = response.data
      })
      .catch((error) => {
          console.error('Error fetching categories:', error);
        })
    },
  },
}
</script>
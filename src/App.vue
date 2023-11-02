<template>
  <!-- The main application layout -->
  <div class="page-wrapper flex flex-col items-stretch min-h-screen">
    <HeaderComponent />

    <!-- The main content area, where the router view is rendered -->
    <div class="main-content grow">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

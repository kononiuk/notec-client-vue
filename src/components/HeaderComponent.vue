<template>
  <header>
    <div class="bg-zinc-200 flex justify-between items-stretch p-5">
      <!-- Header Logo -->
      <div class="header-logo">
        <router-link to="/">
          <img src="../../public/images/logo.svg" alt="Logo" class="w-28" />
        </router-link>
      </div>
      <!-- Navigation Component -->
      <NavComponent />
      <!-- Customer Link -->
      <div class="customer ml-auto">
        <a href="" class="w-full h-full flex items-center">
          <UserIcon class="h-6 w-6 text-black" />
        </a>
      </div>
      <!-- Mini Cart -->
      <div class="minicart ml-2" id="minicart">
        <a href="" class="w-full h-full flex items-center">
          <ShoppingCartIcon class="h-6 w-6 text-black" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import NavComponent from './NavComponent.vue'
import { UserIcon, ShoppingCartIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'HeaderComponent',
  components: {
    NavComponent,
    UserIcon,
    ShoppingCartIcon
  },
}
</script>
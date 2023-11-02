<template>
  <footer>
    <footer class="bg-gray-200 p-4">
      <div class="copyright text-center"><span>&copy; Copyright {{ currentYear }} Notec</span></div>
    </footer>

  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
}
</script>
<script setup>
definePageMeta({
  title: 'My about page',
})

const route = useRoute()
console.log(route.meta.title)
</script>

<template>
  <div max-w80vw mx-auto>
    <p>about page</p>
    <div class="btn">
      <nuxt-link to="/"> index </nuxt-link>
    </div>
  </div>
</template>

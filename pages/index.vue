<script setup>
definePageMeta({
  title: 'My home page',
})

const route = useRoute()
console.log(route.meta.title)
</script>

<template>
  <div max-w80vw mx-auto>
    <p>index page</p>
    <div class="btn">
      <nuxt-link to="/about"> about </nuxt-link>
    </div>
  </div>
</template>

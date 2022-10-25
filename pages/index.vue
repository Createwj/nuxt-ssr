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
    <div class="btn" mb-4>
      <nuxt-link to="/about"> about </nuxt-link>
    </div>
    <Card
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, illum
      dolor? Aliquid sapiente eligendi debitis minima velit veniam?
      Exercitationem aperiam nam eveniet nostrum dignissimos magni blanditiis
      numquam, eaque mollitia? Adipisci.</Card
    >
  </div>
</template>

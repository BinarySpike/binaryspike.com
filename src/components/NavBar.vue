<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/hunting/">Hunting</router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
div {
  @apply bg-blue-800 p-1
}

a {
  @apply mx-2 text-indigo-400 text-lg font-semibold font-sans
}

a:hover {
  @apply underline
}
</style>

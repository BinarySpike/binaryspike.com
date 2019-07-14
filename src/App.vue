<template>
  <div>
    <NavBar />
    <div class="m-2">
    <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  components: {
    NavBar,
  }
};
</script>
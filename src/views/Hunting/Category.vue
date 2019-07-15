<template>
  <div class="category">
    <h1 class="title">{{ name }}</h1>
    <div class="content flex flex-wrap items-stretch">
      <div class="w-full sm:w-1/3 lg:w-1/4" v-for="item in items" :key="item.name">
        <Listing :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Listing from "./Listing.vue";

export default {
  components: {
    Listing
  },
  props: ["name", "items"],
  data() {
    return {};
  },
  computed: {
    myTag() {
      if (this.items && this.items["Belt"]) return this.items["Belt"].tags[0];
      else return "loading?";
    }
  }
};
</script>

<style scoped>
.category {
  @apply mb-8 shadow rounded-lg overflow-hidden;
}
.title {
  @apply py-1 px-2 bg-gray-900 text-white text-xl;
}
.content {
  @apply px-2 py-2 flex flex-wrap items-stretch;
}
</style>

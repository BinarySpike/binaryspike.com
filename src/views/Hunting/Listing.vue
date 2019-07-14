<template>
  <div class="wrapper">
    <div class="listing">
      <div class="title">{{ item.name }}</div>
      <div class="content"></div>
      <div class="tags" v-if="item.tags && item.tags.length">
        <fa-icon
          v-for="tag in item.tags"
          :key="tag"
          :icon="$store.state.tags[tag].iconClass.split(' fa-')"
        />
      </div>
      <div v-else><fa-icon class="invisible" :icon="['fas','eye-slash']" /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {}
};
</script>

<style scoped>
.wrapper {
    @apply p-2 h-full;
}
.listing {
  @apply flex flex-col shadow rounded-lg overflow-hidden h-full;
}
.title {
  @apply truncate px-2 bg-gray-700 text-white;
}
.content {
    @apply px-2 flex-auto
}
.tags {
  @apply px-2 py-1;
}
svg {
    @apply m-1 text-2xl
}
</style>

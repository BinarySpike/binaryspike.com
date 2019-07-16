<template>
  <div class="wrapper">
    <div class="listing">
      <div class="header">
        <div class="accept" @click="acceptItem">
          <fa-icon :icon="['fas', 'check']" />
        </div>
        <div :class="['title', itemTitleColorClass(item)]" :title="item.name">{{ item.name }}</div>
        <div class="delete" @click="deleteItem">
          <fa-icon :icon="['fas', 'trash']" />
        </div>
      </div>
      <div class="content"></div>
      <div class="tags" v-if="item.tags && item.tags.length">
        <fa-icon
          class="icon"
          v-for="tag in item.tags"
          :key="tag"
          :icon="$store.state.tags[tag].iconClass.split(' fa-')"
        />
      </div>
      <div v-else>
        <fa-icon class="invisible" :icon="['fas','eye-slash']" />
      </div>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
  props: ["item"],
  computed: {
    itemTitleColorClass() {
      return item => {
        switch (item.status) {
          case "accepted":
            return "bg-green-500";
          case "deleted":
            return "bg-red-500";
          default:
            return "bg-indigo-700";
        }
      };
    }
  },
  methods: {
    deleteItem() {
      let status = this.item.status != 'deleted' ? 'deleted' : 'pending';
      this.$store.dispatch('modifyItem', {...this.item, status: status})
    },
    acceptItem() {
      let status = this.item.status != 'accepted' ? 'accepted' : 'pending';
      this.$store.dispatch('modifyItem', {...this.item, status: status})
    }
  }
};
</script>

<style scoped>
.wrapper {
  @apply p-2 h-full;
}
.listing {
  @apply text-lg flex flex-col shadow rounded-lg overflow-hidden h-full;
}
.header {
  @apply flex flex-row;
}
.accept {
  @apply bg-green-500 p-1 cursor-pointer;
}
.delete {
  @apply bg-red-500 p-1 cursor-pointer;
}
.title {
  @apply pt-2 flex-auto truncate px-2 text-white font-semibold;
}
.content {
  @apply px-2 flex-auto;
}
.tags {
  @apply px-2 py-1 flex items-center justify-center;
}
svg {
  @apply m-1 text-2xl;
}
</style>

<template>
  <div>
    <div v-if="loading">
      <h1>
        <fa-icon icon="spinner" spin />Loading...
      </h1>
    </div>
    <div v-else>
      <h1>Hunting List</h1>
      <Category name="Wearing-Carrying" :items="ItemsWearingOrCarrying" />
      <Category name="Packing" :items="ItemsPacking" />
      <Category name="Basecamp" :items="ItemsBasecamp" />
      <Category name="Vehicle" :items="ItemsVehicle" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Category from "./Category.vue";

export default {
  components: {
    Category
  },
  data() {
    return {};
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.$store.dispatch("loadHuntingData"));
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    ...mapGetters([
      "ItemsWearingOrCarrying",
      "ItemsPacking",
      "ItemsBasecamp",
      "ItemsVehicle"
    ])
  }
};
</script>

<style scoped>
h1 {
  @apply text-2xl font-semibold;
}
</style>

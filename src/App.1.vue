<template>
  <div>
    <alternate-vue />
    <h1>Hunt List</h1>
    <div class="flex flex-wrap" v-for="category in categories" :key="category">
      <h2 class="w-full">{{ category }}</h2>
      <div
        class="w-full md:w-1/4 p-1"
        v-for="(item, itemName) in itemsByCategory(category)"
        :key="itemName"
      >
        <div class="text-center text-lg font-medium border rounded-lg min-h-full">
          <div>{{ itemName }}</div>
          <div>
            <fa-icon
              class="mx-1"
              v-for="tag in item.tags"
              v-if="tags[tag]"
              :key="tag"
              :icon="iconFromTag(tag)"
            ></fa-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas, far, fab);

import _ from "lodash";

import firebasedb from "./database"

export default {
  data: function() {
    return {
      db: firebasedb,
      items: {},
      tags: {},
      initialized: 0
    };
  },
  created: function() {
    // this.items
    this.db
      .collection("items")
      .get()
      .then(snapshot => {
        snapshot.forEach(item => {
          this.$set(this.items, item.id, item.data());
          this.initialized++;
        });
      });
    // this.tag
    this.db
      .collection("tags")
      .get()
      .then(snapshot => {
        snapshot.forEach(tag => {
          this.$set(this.tags, tag.id, tag.data());
          this.initialized++;
        });
      });
  },
  computed: {
    categories: function() {
      return _.chain(this.items)
        .transform((result, item) => {
          result.push(item.categories);
        }, [])
        .flatten()
        .uniq()
        .value();
    }
  },
  methods: {
    itemsByCategory(category) {
      return _.pickBy(this.items, item => {
        if (item.categories && item.categories.length) {
          return item.categories.includes(category);
        } else {
          return false;
        }
      });
    },
    iconFromTag(tag) {
      return this.tags[tag].iconClass.split(" fa-");
    }
  }
};
</script>

<style>
body {
  @apply m-2;
}
h1 {
  @apply text-3xl font-bold;
}
h2 {
  @apply text-2xl font-medium;
}
.min-h-full {
  min-height: 3.375em;
}
</style>
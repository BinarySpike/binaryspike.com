<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"

import _ from "lodash";

import db from "./database"

export default {
  components: {
    NavBar,
  }
  data: function() {
    return {
      db: db,
      items: [],
      tags: [],
    };
  },
  created: function() {
    // this.items
    this.db
      .collection("items")
      .get()
      .then(snapshot => {
        snapshot.forEach(item => {
          this.items.push(item);
        });
      });
    // this.tag
    this.db
      .collection("tags")
      .get()
      .then(snapshot => {
        snapshot.forEach(tag => {
          this.tags.push(tag);
        });
      });
  },
  methods: {

  }
};
</script>

<style>

</style>
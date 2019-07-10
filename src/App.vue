<template>
  <div>
    <div v-for="category in categories" :key="category">
      <h1>{{ category }}</h1>
      <div class="ml-4" v-for="(item, itemName) in itemsByCategory(category)" :key="itemName">{{ itemName }}</div>
    </div>
  </div>
</template>

<script>
const firebase = require("firebase/app");
require("firebase/firestore");
const _ = require("lodash");

const firebaseConfig = {
  apiKey: "AIzaSyAnUJiHtfTdpVXSIYFmJBXYcpcEbjXiIIg",
  authDomain: "bin-listing.firebaseapp.com",
  databaseURL: "https://bin-listing.firebaseio.com",
  projectId: "bin-listing",
  storageBucket: "bin-listing.appspot.com",
  messagingSenderId: "565166920201",
  appId: "1:565166920201:web:736c913d96a436f6"
};

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);
var firebasedb = firebase.firestore();

export default {
  data: function() {
    return {
      db: firebasedb,
      items: {},
      tagIcons: {}
    };
  },
  mounted: function() {
    // this.items
    this.db
      .collection("items")
      .get()
      .then(snapshot => {
        snapshot.forEach(item => {
          this.$set(this.items, item.id, item.data());
        });
      });

    // this.tagIcons
    this.db
      .collection("tags")
      .get()
      .then(snapshot => {
        snapshot.forEach(tag => {
          this.$set(this.tagIcons, tag.id, tag.data());
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
        }
        else {
          return false
        }
      })
    }
  }
};
</script>

<style>
</style>
<template>
  <div>
    <NavBar />
    <div class="m-2">
    <router-view />
    </div>
    <Modal />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import Modal from "./components/Modal.vue"

export default {
  components: {
    NavBar,
    Modal,
  }
};
</script>
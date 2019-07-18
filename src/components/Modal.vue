<template>
  <div class="overlay">
    <section>
        <header>
          <span>Header</span>
          <span>X</span>
        </header>
        <p>Content</p>
        <footer>Footer</footer>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.8);
  @apply fixed w-full h-full inset-0 flex items-center justify-center;
}
section {
  @apply h-256 w-128;
  @apply max-h-85v max-w-85v;
  @apply border rounded shadow;
  @apply flex flex-col;
  @apply bg-white;
}
header {
  @apply p-1 text-xl font-semibold flex justify-between items-center;
}
p {
  @apply break-all border-t border-b flex-1;
}
footer {
  @apply p-1 text-lg font-medium;
}
</style>

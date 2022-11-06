<template>
  <div>
    <button @click="increment">Click</button>
    <p>{{ count }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
let count = ref(0);
function increment() {
  count.value++;
}
</script>

<style lang="sass" scoped>
button
  background-color: antiquewhite
  border-radius: 20%
  border-color: black
  border: solid
  padding: 10px
  font-size: medium
</style>

<script setup>
import olivias from '@/assets/olivias.jpg';
</script>

<template>
  <div class="wrapper-home">
    <img class="olivias"
         :src="olivias"
         alt="Two Olivias" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper-home {
  height: 100vh;
  background-color: #464073;
}

.olivias {
  position: fixed;
  top: 0;
  right: -85px;
  width: calc(100% + 85px);
  height: 100%;
  object-fit: cover;
  object-position: top right;
}

/******** Large screens ************/

@media (min-width: 821px) {
  .olivias {
    position: fixed;
    top: 0;
    right: -85px;
    width: calc(100% + 85px);
    height: 100%;
    object-fit: contain;
    object-position: top right;
  }
}
</style>
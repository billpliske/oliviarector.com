<script setup>
import olivias from '@/assets/olivias.jpg';
</script>

<template>
  <div class="wrapper-home">
    <h1>Olivia is 10! <span>❤️</span></h1>
    <img class="olivias"
         :src="olivias"
         alt="Two Olivias" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper-home {
  height: 100vh;
  background-color: #464073;
  display: grid;
  justify-content: center;
  align-content: end;
}

.olivias {
  position: fixed;
  top: 0;
  right: -85px;
  width: calc(100% + 85px);
  height: 100%;
  object-fit: cover;
  object-position: top;
}

h1 {
  position: relative;
  z-index: 10;
  margin: 0;
  bottom: 80px;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, .7);
}

/******** Large screens ************/

@media (min-width: 821px) {
  .olivias {
    position: fixed;
    top: 0;
    right: -85px;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top right;
  }
}
</style>
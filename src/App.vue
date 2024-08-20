<script setup>
import { RouterView, useRoute } from 'vue-router';
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue';

const route = useRoute();
const isHomeRoute = computed(() => route.name === 'home');

document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
}

window.addEventListener('resize', function () {
  setDocHeight();
});
window.addEventListener('orientationchange', function () {
  setDocHeight();
});

setDocHeight();

const scrollTop = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <div id="outerwrapper"
       class="outer-wrapper container">
    <Nav />
    <Header v-if="!isHomeRoute" />
    <router-view v-slot="{ Component }">
      <transition @before-enter="scrollTop"
                  mode="out-in"
                  appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


<style lang="scss">
@import '@/assets/base.scss';

#app {
  font-weight: normal;
  position: relative;
  background-color: transparent;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a {
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    text-decoration: underline;
  }
}

button:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>



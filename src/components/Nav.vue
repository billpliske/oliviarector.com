<script setup>
import { Icon } from '@iconify/vue';
import { useStore } from '@/stores/store';

const store = useStore();

</script>

<template>
  <Icon @click="store.toggleMenu()"
        class="menu-bars"
        icon="mdi:menu"
        :inline="true" />
  <div class="menu-wrapper"
       :class="{ 'menu-open': store.isMenuOpen }">
    <div class="menu">
      <Icon @click="store.toggleMenu()"
            icon="ci:off-close"
            class="close-wrapper" />
      <div class="itemwrapper">
        <RouterLink to="/"
                    @click="store.toggleMenu()">Home</RouterLink>
        <RouterLink to="/scramble"
                    @click="store.toggleMenu()">Scramble</RouterLink>
        <RouterLink to="/quiz"
                    @click="store.toggleMenu()">Quiz</RouterLink>
        <RouterLink to="/sour"
                    @click="store.toggleMenu()">Sour</RouterLink>
        <RouterLink to="/videos"
                    @click="store.toggleMenu()">Videos</RouterLink>
        <RouterLink to="/top10"
                    @click="store.toggleMenu()">Top 10</RouterLink>
        <RouterLink to="/birthday"
                    @click="store.toggleMenu()">Birthday</RouterLink>

        <div class="others">
          <a href="https://www.facebook.com/groups/299884429195291/"
             target="new">
            <Icon icon="ic:baseline-facebook"
                  class="fb-icon" />1
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-wrapper {
  background: rgb(65 149 86 / 90%);
  bottom: 0px;
  position: fixed;
  overflow: hidden;
  padding: 15px;
  left: -100%;
  z-index: 12;
  top: 0;
  transition: 0.3s;
  width: 100%;
}

.menu-open {
  top: 0;
  left: 0;
  transition: 0.3s;
}


.menu {
  color: white;
  height: 100%;
  margin: 0;
  overflow-y: auto;
  padding: 0;
  margin: 20px auto;
  max-width: 900px;

  .itemwrapper {
    list-style-type: none;
    padding: 100px 0px 20px 0px;
    margin: 0;
  }

  li {
    background-color: var(--purple);
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    margin-bottom: 20px;
    padding: 0px;

    &:first-of-type {
      border-top: none;
    }
  }

  a {
    color: white;
    font-family: 'Metropolis', sans-serif;
    font-size: 40px;
    width: 100%;
    height: 100%;
    display: block;
    padding: 10px 30px 20px 30px;
    font-weight: 600;
  }
}


.menu-bars {
  color: var(--icon-off);
  position: fixed;
  z-index: 4;
  height: 28px;
  left: 20px;
  top: 21px;
  width: 28px;
}

.close-wrapper {
  right: 50px;
  height: 40px;
  position: absolute;
  width: 40px;
  z-index: 4;
}

.home {
  float: left;
  height: 40px;
  width: 40px;
}

.fb-icon {
  margin-right: 5px;
  position: relative;
  top: 5px;
}

.others {
  margin-top: 40px;

  a {
    font-size: 30px;
  }
}
</style>





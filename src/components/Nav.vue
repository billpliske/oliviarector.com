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

        <ul class="other">
          <p>Previous birthdays</p>
          <li>
            <a href="https://1.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">1</a>
          </li>
          <li>
            <a href="https://2.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">2</a>
          </li>
          <li>
            <a href="https://3.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">3</a>
          </li>
          <li>
            <a href="https://4.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">4</a>
          </li>
          <li>
            <a href="https://5.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">5</a>
          </li>
          <li>
            <a href="https://6.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">6</a>
          </li>
          <li>
            <a href="https://7.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">7</a>
          </li>
          <li>
            <a href="https://8.oliviarector.com"
               target="_blank"
               @click="store.toggleMenu()">8</a>
          </li>
        </ul>

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
    padding: 55px 0px 20px 0px;
    margin: 0;
  }


  a {
    color: white;
    font-family: 'Open Sans Variable', sans-serif;
    font-size: 30px;
    width: 100%;
    height: 100%;
    display: block;
    padding: 10px 30px 5px 30px;
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

.other {
  margin-top: 40px;
  padding: 10px 30px 5px 30px;


  p {
    font-size: 20px;
    font-variation-settings: "wdth" 100, "wght" 700;
    font-style: italic;
  }

  a {
    font-size: 30px;
  }

  li {
    background-color: var(--purple);
    margin: 10px 20px 20px 0;
    padding: 0px;
    list-style-type: none;
    display: inline-block;
    background-color: black;
    border-radius: 50%;


    &:first-of-type {
      border-top: none;
    }
  }

}</style>





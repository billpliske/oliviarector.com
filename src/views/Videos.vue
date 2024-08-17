<script setup>
import { ref } from 'vue';

const videoLinks = ref([
  'https://www.youtube.com/embed/Udte0tu7IZw?si=-R3_cD5EwBoTn3tf',
  'https://www.youtube.com/embed/WkLqgkW9h_w?si=4aRbd7ZeYTanXg7r',
  'https://www.youtube.com/embed/wtzOKLD_b_A?si=o5f7RauPi6OJq6No',
  'https://www.youtube.com/embed/DizGi6Q1MNE?si=gbWVYTd',
  'https://www.youtube.com/embed/x6Fvg5ANYGM?si=qz7klh9n9PX5xB3w',
  'https://www.youtube.com/embed/r63BsEuCyRE?si=D_lZtBe0j9wrEvt9',
  'https://www.youtube.com/embed/sPmDv2obvjA?si=vplmdAySuIqmalH_',
  'https://www.youtube.com/embed/QXcjPySjdJU?si=YiXLN2cqVu0doLy_',
  'https://www.youtube.com/embed/xr_j3sT-bc8?si=GrGRCazGjkswU_4h',
  'https://www.youtube.com/embed/t_ygEJu4SHs?si=1tThKq-_N2lM7CbD',
  'https://www.youtube.com/embed/YB0qc0-Bzgs?si=gua8GiFu1WUJckHx',
  'https://www.youtube.com/embed/bR-pos12iTA?si=SY3hqvfH7KoGFdKw',
  'https://www.youtube.com/embed/r5AjFq4JQFQ?si=sqpyqM5T_qEttDvC',
  'https://www.youtube.com/embed/GlM6lcFbLSg?si=DlEn38TpQf2Fhnr-',
  'https://www.youtube.com/embed/OofRYPBwalI?si=FcEO1KJPGEH0Rfq9'
]);
</script>

<template>
  <div class="wrapper">
    <h1>Videos</h1>
    <div class="video-grid">
      <div v-for="(link, index) in videoLinks"
           :key="index"
           class="video-item">
        <iframe :src="link"
                frameborder="0"
                allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}

h1 {
  color: #514B88;
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 52px;
  margin-bottom: 10px;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
}

.video-item {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
  height: 0;
}

.video-item iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
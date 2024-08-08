<script setup>
import { Icon } from '@iconify/vue';
import Nav from '@/components/Nav.vue';
import { useStore } from '@/stores/store';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';


const router = useRouter();
const store = useStore();
const props = defineProps(['isLoggedIn'])


const handleLogout = () => {
	store.toggleLogoutSlider();
  signOut(getAuth())
  router.push('/')
}

onMounted(() => {
  if (store.isLogoutSliderOpen) {
		store.toggleLogoutSlider();
	}

});

</script>

<template>

  <footer>
  <div class="inner-footer">
    <div class="search-btn">
        </div>
        <div>
        </div>
        <div class="user-btn">
            <Icon
              v-if="isLoggedIn"
              @click="store.toggleLogoutSlider()"
              class="icon right"
              icon="mingcute:user-4-fill"
              :inline="true" />
        </div>
  </div>
  <div class="logout-wrapper" :class="{ 'logout-open': store.isLogoutSliderOpen }">
						<div>
							<Icon @click="store.toggleLogoutSlider()"
										icon="ci:off-close"
										class="close-logout-wrapper" />
							<form>
											<h3 class="logout-title">
													Do you want to log out?
											</h3>
									<div  class="logout-btn-wrapper">
										<button
											@click="handleLogout()">
											Yes
										</button>
									</div>
								</form>
    					</div>
  				</div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: var(--footer-color);
  bottom: 0;
  height: 75px;
  left: 0;
  position: fixed;
  right: 0;
}

.inner-footer {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: start;
  justify-items: center;
  padding-top: 15px;
}

.icon {
  height: 25px;
  width: 25px;
  color: var(--icon-off);
}

.user-btn .icon {
  width: 28px;
  height: 28px;
  position: relative;
  right: 2px;
}


</style>
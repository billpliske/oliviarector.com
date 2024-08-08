import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import router from './router'
import '@fontsource-variable/open-sans';


Amplify.configure(outputs);

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(router)
app.use(pinia)
// app.use(VueGtag, {
//   config: {
//     id: 'UA-34676164-1',
//   },
// }, router);

app.mount('#app')

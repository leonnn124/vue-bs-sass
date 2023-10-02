import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import bootstrap from 'bootstrap/dist/js/bootstrap';

createApp(App).use(router).provide(bootstrap).mount('#app');

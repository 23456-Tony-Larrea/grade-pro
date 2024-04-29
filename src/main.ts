import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia'; // Importa Pinia
import './style.css'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'     
import 'primevue/resources/primevue.min.css';                
import 'primeicons/primeicons.css';   
import router from './router/router'
const app = createApp(App);

app.use(PrimeVue);
app.use(createPinia()); // Usa Pinia en tu aplicación
app.use(router); // Usa el router en tu aplicación
app.mount('#app');
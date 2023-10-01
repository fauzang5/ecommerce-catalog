import { createRouter, createWebHistory } from 'vue-router';
import WomenSection from './pages/WomenSection/index.vue';
import MenSection from './pages/MenSection/index.vue';
// import Unavaible from './pages/UnavaibleProdauct/index.vue';


const routes = [
    { path: '/', component: WomenSection },
    { path: '/MenSection', component: MenSection },
    // { path: '/Unavaible ', component: Unavaible  }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });

  export default router;
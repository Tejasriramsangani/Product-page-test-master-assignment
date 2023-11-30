import Vue, { createApp } from 'vue';

import { BootstrapVue } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// Make BootstrapVue available throughout your project
createApp(Product).use(bootstrap).mount('#Product')
  
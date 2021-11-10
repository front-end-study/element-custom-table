import Vue from 'vue'
import App from './App.vue'
import { Table, TableColumn } from "element-ui";
import CustomTable from './index.js';

Vue.use(Table).use(TableColumn).use(CustomTable);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import Ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(Ant);

new Vue({
  render: h => h(App),
}).$mount('#app')

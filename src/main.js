import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
 
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://63.32.119.241:10000/flobot_control',
    options: {
      useConnectionNamespace: true
    }
}))

new Vue({
  render: h => h(App),
}).$mount('#app')

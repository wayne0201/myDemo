import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import 'common/scss/index.scss'


Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

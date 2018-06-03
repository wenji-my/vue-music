import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

/* eslint-disable no-new */
// document.addEventListener('deviceready', function() {
//   new Vue({
//     el: '#app',
//     render: h => h(App),
//     router
//   })
//   window.navigator.splashscreen.hide()
// },false);

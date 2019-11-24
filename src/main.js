import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

// firebase 設定
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh-1t3y_TgvEJYDYgobb6azarvuRKxoOg",
  authDomain: "vueaddress-bb92a.firebaseapp.com",
  databaseURL: "https://vueaddress-bb92a.firebaseio.com",
  projectId: "vueaddress-bb92a",
  storageBucket: "vueaddress-bb92a.appspot.com",
  messagingSenderId: "683195636009",
  appId: "1:683195636009:web:04456c250a434d1a61bf38",
  measurementId: "G-X4MGW8ST6Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

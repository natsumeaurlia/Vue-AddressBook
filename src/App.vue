<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>アドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
      <v-toolbar-items items v-else>
        <v-btn @click="login">ログイン</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <SideNav />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    SideNav
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user);
        this.fetchAddresses();
        if (this.$router.currentRoute.name === "home") {
          this.$router.push({ name: "addresses" });
        }
      } else {
        this.setLoginUser(null);
        this.$router.push({ name: "home" });
      }
    });
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapActions([
      "toggleSideMenu",
      "setLoginUser",
      "logout",
      "login",
      "fetchAddresses"
    ])
  }
};
</script>

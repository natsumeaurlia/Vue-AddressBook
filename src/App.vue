<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleSideMenu"></v-app-bar-nav-icon>

      <v-toolbar-title class="headline text-uppercase">
        <span>アドレス帳</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["toggleSideMenu"])
  }
};
</script>

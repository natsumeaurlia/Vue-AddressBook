<template>
  <v-container>
    <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-item-title avatar>
          <v-list-item-avatar>
            <img v-if="photoUrl" :src="photoUrl" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{userName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item-title>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<style lang="scss">
.h-200px  {
  height: 200px;
}
</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          title: "ホーム",
          icon: "home",
          link: { name: "home" }
        },
        {
          title: "連絡先一覧",
          icon: "mdi-format-list-bulleted",
          link: { name: "addresses" }
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userName", "photoUrl"])
  }
};
</script>

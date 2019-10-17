<template>
  <v-layout wrap class="h-200px">
    <v-container>
      <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
        <v-list class="pa-1">
          <v-list-item-title avatar>
            <v-list-item-avatar>
              <img src="../assets/FWiqRi2J_400x400.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>natsume</v-list-item-title>
            </v-list-item-content>
          </v-list-item-title>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-icon>mdi-list</v-icon>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </v-layout>
</template>
<style lang="scss">
.h-200px  {
  height: 200px;
}
</style>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "連絡先一覧",
          icon: "mdi-format-list-bulleted"
        }
      ]
    };
  }
};
</script>

<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>連絡先一覧</h1>
      </v-flex>
      <v-data-table :headers="headers" :items="addresses" class="elevation-1">
        <template v-slot:items="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.tel }}</td>
          <td class="text-xs-left">{{ props.item.email }}</td>
          <td class="text-xs-left">{{ props.item.address }}</td>
        </template>
      </v-data-table>
    </v-layout>
  </v-container>
</template>
 
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "名前",
          value: "name"
        },
        { text: "メールアドレス", value: "email" },
        { text: "電話番号", value: "tel" },
        { text: "住所", value: "address" }
      ],
      addresses: [
        {
          name: "太郎1",
          email: "hoge@hoge.com",
          tel: "110-110-110",
          address: "杉並区文京区港区1-2-3-4"
        },
        {
          name: "太郎1",
          email: "hoge@hoge.com",
          tel: "110-110-110",
          address: "杉並区文京区港区1-2-3-4"
        },
        {
          name: "太郎1",
          email: "hoge@hoge.com",
          tel: "110-110-110",
          address: "杉並区文京区港区1-2-3-4"
        }
      ]
    };
  }
};
</script>
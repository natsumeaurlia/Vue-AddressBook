module.exports = {
  "devServer": {
    "disableHostCheck": true
  },
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      }
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
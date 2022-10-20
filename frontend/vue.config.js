const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/graphql': {
        target: process.env.VUE_APP_BACKEND_TARGET,
        ws: true,
        changeOrigin: true
      },
    }
  }
})

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/graphql': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true
      },
    }
  }
})

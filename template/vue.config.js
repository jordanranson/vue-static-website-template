const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const routes = require('./src/router/routes.js')
const websiteConfig = require('./src/website.config.js')

const breakpoints = Object
  .keys(websiteConfig.breakpoints)
  .map(key => {
    return `${key}: ${websiteConfig.breakpoints[key]}px`
  })
  .join()

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `$breakpoints: (${breakpoints})
@import "@/styles/_global.sass"`
      }
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: true
  },

  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: routes.map(route => route.path)
      })
    ]
  }
}

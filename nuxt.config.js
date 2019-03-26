const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/flexibleView.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // 判断是否是 开发
      if (ctx.isClient) {
        config.module.rules.push({
          test: /\.(css)$/,
          loader: 'px2rem-loader',
          exclude: /(node_modules)/,
          options: {
            remUni: 75,
            remPrecision: 8
          }
        })
      }
    }
  }
}

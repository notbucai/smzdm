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
    '@/assets/css/global.scss',
    '@/assets/css/iconfont.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/flexibleView.js",
    "@/plugins/axios.js",
    "@/plugins/scrollEvent.js",
    "@/plugins/toast.js",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    //你的设置 
    sass: ['@/assets/css/g_style.scss'],//替代:scss 
    // less: [],
    // stylus: []
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // isDev 判断是否是 开发  isClient 是否客户端
      if (ctx.isClient) {
        //
        // config.module.rules.push({
        //   test: /\.(css)$/,
        //   loader: 'px2rem-loader',
        //   exclude: /(node_modules)/,
        //   options: {
        //     remUni: 75,
        //     remPrecision: 8
        //   }
        // })
      }
    },
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      
      return { x: 0, y: 0 }
    }
  },
  /**
   * 服务
   */
  server: {
    port: 1314, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

}

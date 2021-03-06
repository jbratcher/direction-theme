import colors from 'vuetify/es5/util/colors'
import * as strUtil from './utils/str-utils.js'

// format package name for title display
const title = strUtil.titleCase(process.env.npm_package_name.replace(/-/g, " "));

export default {
  env: {
    title: title || '',
    description: process.env.npm_package_description || '',
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    // capitialize package name for title display
    title: title || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1',
      },
    ]
  },
  generate: {
    routes: function () {
      const fs = require('fs')
      return fs.readdirSync('./assets/content/blog').map(file => {
        return {
          route: `/blog/${file.slice(2, -5)}`,
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/breakpoint"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/vuetify',
  ],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   **
   ** define additional themes
   ** colors object https://vuetifyjs.com/en/styles/colors
   */
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.accent4,
          accent: colors.blue.base,
          secondary: colors.orange.accent4,
          info: colors.blueGrey.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          background: colors.blue.base,
        }
      }
    }
  },
}
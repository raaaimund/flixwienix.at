import Mode from 'frontmatter-markdown-loader/mode'
import glob from 'glob'

export default {
  srcDir: 'src/',
  head: {
    title: 'FLIXwienix nach Paris',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' }
    ]
  },
  modules: [
    '@nuxtjs/pwa',
  ],
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  plugins: [
    { src: '~/plugins/vue2-leaflet', ssr: false },
    { src: '~/plugins/frontmatter-markdown-loader' }
  ],
  build: {
    transpile: [/^vuetify/],
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT]
        }
      })
    }
  },
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#73d700',
          secondary: '#5cac00',
          accent: '#ffad00',
          error: '#FF5252',
        },
      },
    },
    icons: {
      iconfont: 'mdiSvg',
    }
  },
  generate: {
    routes() {
      return glob
        .sync("**/*.md", { cwd: 'src/articles' })
        .map(filepath => `/${filepath.replace(".md", "")}`);
    }
  },
  pwa: {
    manifest: {
      name: "FLIXwienix",
      description: "Ein kleiner Blog über eine kleine Reise mit dem FlixBus.",
      lang: "de",
      start_url: "/",
      theme_color: "#73d700",
      background_color: "#73d700"
    }
  }
}

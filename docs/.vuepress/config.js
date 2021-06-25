const {
  description
} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cheatsheet',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: 'icon',
      href: '/images/half.png'
    }],
    // ['link', { rel: 'stylesheet', href: 'https://use.typekit.net/ejo4rwy.css' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    logo: 'images/half.png',
    lastUpdatedText: 'Last Update (UTC)',
    searchPlaceholder: 'Search...',

    navbar: require('./components/navbar/en-EN.js'),

    sidebar: {
      '/python/': require('./components/sidebar/python/en-EN.js'),
      '/sql/': require('./components/sidebar/sql/en-EN.js'),
      '/git/': require('./components/sidebar/git/en-EN.js'),
      '/spss/': require('./components/sidebar/spss/en-EN.js'),
      // '/swift/': require('./components/sidebar/swift/en-EN.js'),
    },
  },
  /**
   * Apply plugins，
   * ref：https://v2.vuepress.vuejs.org/reference/plugin
   */
  plugins: [
    // ['@vuepress/plugin-search',
    //   {
    //     locales: {
    //       '/': {
    //         placeholder: 'Search',
    //       },
    //     }
    //   }
    // ],
    ['@vuepress/plugin-google-analytics',
      {
        id: 'G-5FW65F8J63',
      },
    ],
  ]
}

// function getSideBar(root, folder) {
//   return fs
//     .readdirSync(process.cwd() + '/docs/' + root + '/' + folder)
//     .map(sidebar => folder + '/' + sidebar + '/')
//     .map(sidebar => sidebar.replace('/README.md', '')
//       .replace(root, '')
//       .replace('.md/', '.md')
//     )
// }

import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    title: 'Cheatsheet',
    description: 'Cheatsheet shared for developers',

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

    // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
    theme: '@vuepress/theme-default',
    themeConfig: {
        home: '/',

        // logo: 'https://img.icons8.com/fluency/64/000000/layers.png',

        navbar: navbar.en,
        sidebar: sidebar.en,

        lastUpdated: true,
        lastUpdatedText: 'Last Update (UTC)',

        editLink: true,
        editLinkText: 'Report an Issue',

        contributors: true,
        contributorsText: 'Contributor(s)',

        docsRepo: 'sagelga/cheatsheet',
        docsDir: 'docs',
        docsBranch: 'main',
    },

    plugins: [
        ['@vuepress/plugin-google-analytics', {
            id: 'G-5FW65F8J63'
        }
        ],
        // ['@vuepress/plugin-search', {
        //   locales: {
        //     '/': {
        //       placeholder: 'Search',
        //     },
        //   },
        // },
        // ],
    ],
})

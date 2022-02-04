import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
    {
        text: 'Python',
        link: '/python/intro/install/'
    },
    {
        text: 'SQL',
        link: '/sql/intro/command/'
    },
    // {
    //     text: 'Swift',
    //     link: '/swift/'
    // },
    {
        text: 'Git',
        link: '/git/initiate/'
    },
    {
        text: 'SPSS',
        link: '/spss/data/clean/'
    },
    {
        text: 'Contribute',
        children: [
            {
                text: 'Contribute',
                link: 'https://github.com/sagelga/cheatsheet/'
            },
            // {
            //     text: 'Code License',
            //     link: 'https://github.com/sagelga/cheatsheet/blob/master/LICENSE.md'
            // },
            {
                text: 'Changelog',
                link: 'https://github.com/sagelga/cheatsheet/releases'
            },
            {
                text: 'List of Contributor',
                link: 'https://github.com/sagelga/cheatsheet/pulse'
            },
        ]
    }
]

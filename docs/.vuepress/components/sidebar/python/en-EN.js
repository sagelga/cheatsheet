module.exports = [
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        text: 'Introduction',
        collapsable: false,
        children: [
            '/python/install/',
            '/python/io/',
            '/python/variable/',
            '/python/data-type/',
            '/python/lint/'
        ]
    },
    {
        text: 'Basic Data Type',
        collapsable: false,
        children: [
            '/python/function/',
            '/python/data-type/',
            {
                text: 'String',
                link: '/python/data-type/string/',
                children: [
                    '/python/data-type/string/concat/',
                    '/python/data-type/string/format/',
                    '/python/data-type/string/array/',
                ]
            },
            '/python/data-type/number/',
            '/python/data-type/boolean/',
        ]
    },
    {
        text: 'Flow Control',
        collapsable: false,
        children: [
            '/python/condition/',
            {
                text: 'Loop',
                link: '/python/loop/',
                children: [
                    '/python/loop/for/',
                    '/python/loop/while/',
                ]
            }
        ]
    },
    {
        text: 'Function, Method, and Module',
        collapsable: false,
        children: [
            '/python/condition/',
            {
                text: 'Loop',
                link: '/python/loop/',
                children: [
                    '/python/loop/for/',
                    '/python/loop/while/',
                ]
            }
        ]
    },
    {
        text: 'More Data Type',
        collapsable: false,
        children: [
            '/python/data-type/list/',
            '/python/data-type/tuple/',
            '/python/data-type/dictionary/',
            '/python/io/file/',
            '/python/class/'
            // '/python/MathLibrary/',
            // '/python/ErrorHandling/',
            // '/python/Keyword/',
        ]
    },
    {
        text: 'Troubleshooting',
        collapsable: false,
        children: [
            '/python/error/',
        ]
    }
]

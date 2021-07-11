module.exports = [
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        isGroup: true,
        text: 'Getting Started',
        children: [
            '/python/intro/install/',
            '/python/intro/run/',
            '/python/io/',
            '/python/variable/',
            '/python/lint/'
        ]
    },
    {
        isGroup: true,
        text: 'Basic Data Type',
        children: [
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
            {
                text: 'Integer & Float',
                link: '/python/data-type/number/',
                children: []
            },
            {
                text: 'Boolean',
                link: '/python/data-type/boolean/',
                children: []
            },
        ]
    },
    {
        isGroup: true,
        text: 'Conditions & Iterations',
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
        isGroup: true,
        text: 'Function, Method, and Module',
        children: [{
                text: 'Function',
                link: '/python/function/',
                children: [
                    '/python/function/built-in/',
                ]
            },
            {
                text: 'Method',
                link: '/python/method/',
                children: [
                    '/python/method/string/',
                    '/python/method/list/',
                ]
            },
            {
                text: 'Module',
                link: '/python/module/',
                children: [
                    '/python/module/math/',
                ],
            },
        ]
    },
    {
        isGroup: true,
        text: 'More Data Type',
        children: [
            '/python/data-type/list/',
            '/python/data-type/tuple/',
            '/python/data-type/dictionary/',
        ]
    },
    {
        isGroup: true,
        text: 'Others',
        children: [
            '/python/io/file/',
            '/python/class/'
        ]
    },
    {
        isGroup: true,
        text: 'Troubleshooting',
        children: [
            '/python/lint/docs/',
            '/python/lint/docstring/',
            '/python/error/debug/',
            '/python/error/handle/',
            {
                text: 'Error Type',
                link: '/python/error/error-type/',
                children: [
                    '/python/error/error-type/compile/',
                    '/python/error/error-type/runtime/',
                ]
            },
            '/python/error/custom/',
        ]
    }
]

module.exports = [
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        text: 'Getting Started',
        link: '/git/initiate/',
        children: [
            '/git/initiate/install/',
            '/git/initiate/repository/',
            '/git/initiate/origin-setup/',
        ]
    },
    {
        text: 'Commit',
        link: '/git/commit/',
        children: [{
                text: 'Unstaged',
                children: [
                    '/git/commit/unstage/add/',
                    '/git/commit/unstage/reset/',
                ]
            },
            {
                text: 'Staged',
                children: [
                    '/git/commit/stage/commit/',
                    '/git/commit/stage/remove/',
                ]
            },
        ]
    },
    {
        text: 'Branching',
        children: [
            '/git/branch/',
            '/git/branch/workflow/',
            '/git/branch/create/',
            '/git/branch/diff/',
        ]
    },
    {
        text: 'Local / Remote',
        children: [
            '/git/origin/pull/',
            '/git/origin/push/',
        ]
    },
    {
        text: 'Merge Strategies',
        link: '/git/merge/',
        children: [
            '/git/merge/recursive/',
            '/git/merge/rebase/',
            '/git/merge/squash/',
            '/git/merge/conflict/',
        ]
    },
]

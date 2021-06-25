module.exports = [{
        isGroup: true,
        text: 'Getting Started',
        link: '/git/initiate/',
        children: [
            '/git/initiate/install/',
            '/git/initiate/repository/',
            '/git/initiate/origin-setup/',
        ]
    },
    {
        isGroup: true,
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
        isGroup: true,
        text: 'Branching',
        children: [
            '/git/branch/',
            '/git/branch/workflow/',
            '/git/branch/create/',
            '/git/branch/diff/',
        ]
    },
    {
        isGroup: true,
        text: 'Local / Remote',
        children: [
            '/git/origin/pull/',
            '/git/origin/push/',
        ]
    },
    {
        isGroup: true,
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

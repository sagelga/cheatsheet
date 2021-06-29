module.exports = [
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        isGroup: true,
        text: 'Getting Started',
        children: [
            '/sql/intro/command/',
            '/sql/table/data-type/',
        ]
    },
    {
        isGroup: true,
        text: 'Querying data',
        children: [
            '/sql/view/select/',
            '/sql/view/where/',
        ]
    },
    {
        isGroup: true,
        text: 'Database Tables',
        children: [
            '/sql/table/constraint/',
            '/sql/table/create/',
            '/sql/table/describe/',
            '/sql/table/rename/',
            '/sql/table/drop/',
        ]
    },
    {
        isGroup: true,
        text: 'Update Data',
        children: [
            '/sql/data/insert/',
            '/sql/data/delete/',
            '/sql/data/update/',
        ]
    },
    {
        isGroup: true,
        text: 'Edit Tables',
        children: [
            '/sql/table/alter/add/',
            '/sql/table/alter/modify/',
            '/sql/table/alter/drop/',
        ]
    },
    {
        isGroup: true,
        text: 'Grouping',
        children: [
            '/sql/view/group/',
            '/sql/view/group/function/',
        ]
    },
    {
        isGroup: true,
        text: 'Joining Tables',
        children: [
            '/sql/table/relationship/',
            '/sql/view/join/inner/',
            '/sql/view/join/inner/CartesianProduct/',
            '/sql/view/join/inner/Cross/',
            '/sql/view/join/inner/Equijoin/',
            '/sql/view/join/inner/Natural/',
            '/sql/view/join/outer/left/',
            '/sql/view/join/outer/right/',
            '/sql/view/join/outer/full/',
        ]
    },
    {
        isGroup: true,
        text: 'Transaction control',
        children: [
            '/sql/table/commit/',
            '/sql/table/rollback/',
            '/sql/table/savepoint/',
        ]
    },
    {
        isGroup: true,
        text: 'Normalization',
        children: [
            '/sql/table/normalize/1NF.html',
            '/sql/table/normalize/2NF.html',
            '/sql/table/normalize/3NF.html',
            '/sql/table/normalize/4NF.html',
            '/sql/table/normalize/Boyce-CoddNF.html',
            '/sql/table/normalize/5NF.html',
        ]
    },
]

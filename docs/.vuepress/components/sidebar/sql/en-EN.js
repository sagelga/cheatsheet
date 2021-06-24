module.exports = [
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        text: 'Getting Started',
        children: [
            '/sql/intro/command/',
            '/sql/table/data-type/',
            '/sql/table/constraint/',
            '/sql/table/relationship/',
        ]
    },
    {
        text: 'Querying data',
        children: [
            '/sql/view/select/',
            '/sql/view/where/',
        ]
    },
    {
        text: 'Database Tables',
        children: [
            '/sql/table/create/',
            '/sql/table/describe/',
            '/sql/table/rename/',
            '/sql/table/drop/',
        ]
    },
    {
        text: 'Update Data',
        children: [
            '/sql/data/insert/',
            '/sql/data/delete/',
            '/sql/data/update/',
        ]
    },
    {
        text: 'Edit Tables',
        children: [
            '/sql/table/alter/add/',
            '/sql/table/alter/modify/',
            '/sql/table/alter/drop/',
        ]
    },
    {
        text: 'Grouping',
        children: [
            '/sql/view/group/',
            '/sql/view/group/function/',
        ]
    },
    {
        text: 'Joining Tables',
        children: [
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
        text: 'Transaction control',
        children: [
            '/sql/table/commit/',
            '/sql/table/rollback/',
            '/sql/table/savepoint/',
        ]
    },
    {
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
    // {
    //     text: 'Sample Database',
    //     children: [
    //         'Sample-Database/',
    //         'Sample-Database/Countries.md',
    //         'Sample-Database/Departments.md',
    //         'Sample-Database/Employees.md',
    //         'Sample-Database/Job_History.md',
    //         'Sample-Database/Jobs.md',
    //         'Sample-Database/Locations.md',
    //         'Sample-Database/Regions.md'
    //     ]
    // }
]

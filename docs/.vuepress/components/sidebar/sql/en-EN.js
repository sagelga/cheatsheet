
module.exports = [
    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        title: 'Overall',
        collapsable: false,
        children: [
            'Overall/Command/',
            'Overall/DataType/',
            'Overall/Table/',
            'Overall/Relationship/',
        ]
    },
    {
        title: 'Querying data',
        collapsable: false,
        children: [
            'Select/',
            'Where/',
        ]
    },
    {
        title: 'Managing tables',
        collapsable: false,
        children: [
            'Create/',
            'Rename/',
            'Drop/',
            'Describe/',
        ]
    },
    {
        title: 'Manipulating records',
        collapsable: false,
        children: [
            'Insert/',
            'Update/',
            'Delete/',
        ]
    },
    {
        title: 'Modifying columns',
        collapsable: false,
        children: [
            'Alter/Add/',
            'Alter/Modify/',
            'Alter/Drop/',
        ]
    },
    {
        title: 'Data grouping',
        collapsable: false,
        children: [
            'Group/',
            'GroupFunction/',
        ]
    },
    {
        title: 'Merging tables',
        collapsable: false,
        children: [
            'Join/Inner/CartesianProduct/',
            'Join/Inner/Cross/',
            'Join/Inner/Equijoin/',
            'Join/Inner/Natural/',
            'Join/Inner/Inner/',
            'Join/Outer/Left/',
            'Join/Outer/Right/',
            'Join/Outer/Full/',
        ]
    },
    {
        title: 'Transaction control',
        collapsable: false,
        children: [
            'Commit/',
            'Rollback/',
            'Savepoint/',
        ]
    },
    {
        title: 'Normalization',
        collapsable: false,
        children: [
            'Normalization/'
        ]
    },
    {
        title: 'Sample Database',
        collapsable: false,
        children: [
            'Sample-Database/',
            'Sample-Database/Countries.md',
            'Sample-Database/Departments.md',
            'Sample-Database/Employees.md',
            'Sample-Database/Job_History.md',
            'Sample-Database/Jobs.md',
            'Sample-Database/Locations.md',
            'Sample-Database/Regions.md'
        ]
    }
]

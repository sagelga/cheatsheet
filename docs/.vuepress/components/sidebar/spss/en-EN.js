module.exports = [

    // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    {
        title: 'Data Preparation',
        collapsable: false,
        children: [
            '/Data/DataCleansing/',
            '/Data/DataTransformation/'
        ]
    },
    {
        title: 'Test Assumption',
        collapsable: false,
        children: [
            '/AssumptionTest/'
        ]
    },
    {
        title: 'Create Model',
        collapsable: false,
        children: [
            '/Model/TwoWayANOVA/',
            '/Model/LinearRegression/',
            '/Model/MultipleLinearRegression/',
            '/Model/LogisticsRegression/',
            '/Model/TimeSeries/'
        ]
    },
]

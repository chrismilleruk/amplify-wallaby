module.exports = {
    projects: [
        {
            rootDir: '<rootDir>',
            ...require('react-scripts/scripts/utils/createJestConfig.js')(p => require('path').resolve('./node_modules/react-scripts', p))
        },
        '<rootDir>/amplify/backend/function/*'
    ]
};
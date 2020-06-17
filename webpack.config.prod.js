const path = require('path');

const settings = {
    mode: 'production',
    entry: {
        basic: './src/index.js',
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname,'/build'),
    }
}

module.exports = settings;
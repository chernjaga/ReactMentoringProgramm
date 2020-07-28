const { merge } = require('webpack-merge');
const devMode = require('./webpack.config.dev.js');
const prodModeMode = require('./webpack.config.prod.js');
const commonConfig = require('./webpack.config.common.js');

module.exports = (env) => {
    let currentMode = env && env.production ? prodModeMode : devMode;
    return merge(currentMode, commonConfig);
};
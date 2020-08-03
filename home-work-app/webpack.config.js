const { merge } = require('webpack-merge');
const devMode = require('./webpack.config.dev.js');
const prodModeMode = require('./webpack.config.prod.js');
const commonConfig = require('./webpack.config.common.js');

module.exports = (env) => {
    if (!env || env.development) {
        return merge(devMode, commonConfig);
    }

    if (env.production) {
        return merge(prodModeMode, commonConfig);
    }
};
const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')


module.exports =  async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv)
    // Customize the config before returning it.
    config.module.rules.push({
        test: /\.js$/,
        include: [path.join(__dirname, 'node_modules/react-router-native')]
        
    })
    return config
    }
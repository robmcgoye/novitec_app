const { environment } = require('@rails/webpacker')
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']  // Not a typo, we're still using popper.js here
}));

const aliasConfig = {
    'jquery': 'jquery/src/jquery',
    'jquery-ui': 'jquery-ui-dist/jquery-ui.js',
    'fotorama': 'fotorama/fotorama.js'
  };
  
environment.config.set('resolve.alias', aliasConfig);

module.exports = environment

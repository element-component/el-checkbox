var cooking = require('cooking');
var webpack = require('webpack');

cooking.set({
  use: 'vue',
  entry: {
    'index': './src/index.js',
    'index.min': './src/index.js'
  },
  template: false,
  format: 'umd',
  moduleName: 'ElCheckbox',
  extends: ['vue', 'lint']
});

cooking.add('plugin.UglifyJs', new webpack.optimize.UglifyJsPlugin({
  include: /\.min\.js$/,
  minimize: true,
  compress: {
    warnings: false
  }
}));

ooking.add('externals', {
  vue: 'vue',
  'vue-clickoutside': 'vue-clickoutside'
});

module.exports = cooking.resolve();

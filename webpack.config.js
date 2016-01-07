/**
 * Created by danielxiao on 15/12/31.
 */

var path = require('path');

var webpackConfig = {
  context: path.join(__dirname, 'src'),
  entry: {
    GoodsItem: './goods-item/index',
    GoodsItemDetails: ['./goods-item/details/index'],
    GoodsItemPhotos: ['./goods-item/photos/index'],
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      }
    ]
  }
};

module.exports = webpackConfig;



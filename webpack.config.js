/**
 * Created by danielxiao on 15/12/31.
 */

var path = require('path');
var webpack = require('webpack');

var webpackConfig = {
  context: path.join(__dirname, 'src'),
  entry: {
    GoodsItem: './goods-item/index',
    GoodsItemDetails: ['./goods-item/item-details/index'],
    GoodsItemPhotos: ['./goods-item/item-photos/index'],
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'Gm[name].js',
    sourceMapFilename: '[file].map',
    library: 'Gm[name]',
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
      },
    ]
  }
};

module.exports = webpackConfig;



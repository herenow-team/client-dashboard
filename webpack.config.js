const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackChunkHash = require('webpack-chunk-hash')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const easyImport = require('postcss-easy-import')
const notifier = require('node-notifier')

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production'

  const config = {
    entry: {
      app: path.resolve(__dirname, 'src/index.js'),
      vendor: ['react', 'react-dom']
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'public/static'),
      publicPath: '/static/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  localIdentName: '[local]--[hash:base64]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => {
                    return [
                      easyImport(),
                      cssnext({
                        warnForDuplicates: false
                      }),
                      cssnano({
                        discardUnused: {
                          fontFace: false,
                          keyframes: false
                        },
                        zindex: false,
                        reduceIdents: false
                      })
                    ]
                  }
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{loader: 'url-loader', options: {limit: 8192}}]
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader',
            options: {limit: 4096, noquotes: true}
          }
        }
      ]
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new CleanWebpackPlugin([
        'public/static/*.js',
        'public/static/*.css',
        'public/*.html'
      ]),
      new ExtractTextPlugin({
        filename: 'style.[contenthash].css',
        disable: !isProd
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: path.resolve(__dirname, 'public/index.html')
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': isProd ?
          JSON.stringify('production') :
          JSON.stringify('development')
      })
    ]
  }

  if (isProd) {
    config.output.filename = '[name].[chunkhash].js'
    config.plugins = [
      ...config.plugins,
      new LodashModuleReplacementPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new WebpackChunkHash()
    ]
  } else {
    config.plugins = [
      ...config.plugins,
      new FriendlyErrorsWebpackPlugin({
        onErrors(severity, errors) {
          if (severity !== 'error') {
            return
          }
          const error = errors[0]

          notifier.notify({
            title: 'Webpack error',
            message: severity + ': ' + error.name,
            subtitle: error.file || ''
          })
        }
      })
    ]
  }

  return config
}

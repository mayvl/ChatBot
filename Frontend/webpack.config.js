const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js',
      publicPath: '/'
   },
   devServer: {
      inline: true,
      host: '0.0.0.0',
      port: 8001,
      historyApiFallback: true
   },
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
         },
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            loader: "file-loader"
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
          }
      ],
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}
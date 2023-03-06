const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
   plugins: [
          new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};
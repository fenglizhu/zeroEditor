const path = require('path');  // node自带包
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '..', 'src/zeroEditor.ts'),   // 打包对入口文件，期望打包对文件入口
  output:{
    filename:'zeroEditor.js',
    path: path.join(__dirname, '..', 'dist'),
    library: 'zeroEditor',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  devtool: 'eval-source-map',
  module:{
  rules: [
    {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        include: /src/,
    },
  ]
  },
  resolve: {
    extensions: ['.ts', '.js']      // 解析对文件格式
  },
}

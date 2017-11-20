const webpack = require('webpack');
c
onst webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3000;

new webpackDevServer(webpack(config), {
  hot: true,	
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}).listen(port, host, (err) => {
    if(err)
      console.log(err);

    console.log(`Listening at host: ${host}  port: ${port}`);
});
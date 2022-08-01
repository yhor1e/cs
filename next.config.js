///** @type {import('next').NextConfig} */
//const nextConfig = {
//  reactStrictMode: true,
//  swcMinify: true,
//}
//
//module.exports = nextConfig
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
//ref: https://github.com/microsoft/monaco-editor/issues/3054
const config = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          filename: 'static/[name].worker.bundle.js',
        })
      );
    }
    return config;
  },
};

const withTM = require('next-transpile-modules')(['monaco-editor']);

module.exports = withTM(config);

import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import riot from 'rollup-plugin-riot';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import gzip from "rollup-plugin-gzip";

let config = {
  entry: 'src/js/main.js',
  dest: 'dist/js/bundled.js',
  plugins: [
    riot({
      style: 'scss'
    }),
    scss({
      output: './dist/css/bundle.css'
    }),
    commonJs({
      exclude: ['node_modules/lodash-es/**']
    }),
    nodeResolve({
      browser: true
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  format: 'iife'
};

if (process.env.NODE_ENV == 'prod') {
  let zipper = gzip({
    options: {
      level: 9
    },
    additional: [
      'dist/css/bundle.css'
    ],
    minSize: 1000
  });

  config.plugins.push(zipper);
}
export default config;
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import riot from 'rollup-plugin-riot';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js-harmony';

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
    }),
	uglify({}, minify)
  ],
  format: 'iife'
};

export default config;
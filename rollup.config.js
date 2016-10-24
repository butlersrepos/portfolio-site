import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import riot from 'rollup-plugin-riot';

export default {
  entry: 'src/js/main.js',
  dest: 'dist/js/bundled.js',
  plugins: [
    riot({
      template: 'jade',
      style: 'scss'
    }),
    commonJs(),
    nodeResolve({
      browser: true
    })
  ],
  format: 'iife'
};
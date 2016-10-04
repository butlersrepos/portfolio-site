import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/js/main.js',
  dest: 'dist/js/bundled.js',
  plugins: [
    commonJs(),
    nodeResolve()
  ],
  format: 'iife'
};
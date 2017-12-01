import resolve from 'rollup-plugin-node-resolve';

// rollup.config.js
export default {
  input: 'scripts/index.js',
  output: {
    file: 'bundle.js',
    format: 'umd'
  },
  plugins: [ resolve() ]
};

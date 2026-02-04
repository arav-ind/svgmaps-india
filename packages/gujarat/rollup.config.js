import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2';

export default [
  {
    input: './src/index.ts',
    output: [
      { file: 'dist/index.js', format: 'cjs', exports: 'named' },
      { file: 'dist/index.mjs', format: 'es', exports: 'named' },
    ],
    plugins: [
      babel({ 
        exclude: 'node_modules/**', 
        presets: ['@babel/preset-react'], 
        babelHelpers: 'bundled' 
      }),
      external(),
      resolve(),
      typescript(),
      terser(),
    ],
  },
]

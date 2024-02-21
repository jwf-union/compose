import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

import pkg from './package.json' assert { type: 'json' }

export default [
    {
        input: './src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: pkg.module,
                format: 'es',
                sourcemap: true
            }
        ],
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    },
    {
        input: './src/index.ts',
        output: [
            {
                file: pkg.umd,
                name: "useCallbackState",
                format: 'umd',
                sourcemap: true
            },
            {
                file: pkg['umd:min'],
                name: "useCallbackState",
                format: 'umd',
                sourcemap: true,
                plugins: [terser()]
            }
        ],
        plugins: [
            typescript(),
            resolve(),
            commonjs(),
            babel({
                exclude: 'node_modules/**'
            })
        ]
    }
]
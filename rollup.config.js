import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss'
import { string } from 'rollup-plugin-string'

export default {
    input : 'index.js',
    output : {
        dir : 'dist',
        format : 'es'
    },
    plugins: [
        del({ targets : 'dist/*'}),
        babel({ babelHelpers: 'bundled' }),
        copy({
            targets : [
                { src : 'index.html', dest : 'dist' },
                { src : 'favicon.ico', dest :'dist' },
                { src : [
                    'app/**/*.css',
                    'app/**/**/*.css',
                    'app/**/**/**/*.css'
                ], dest : 'dist/css' }
            ]
        }),
        string({
            include : [
                '**/*.html',
                '**/*.md'
            ],
            exclude : '**/index.html'
        }),
        postcss({
            plugins: []
        }),
        resolve(),
        serve({ 
            contentBase : 'dist',
            port : 10001,
            open : true
        })
    ],
    preserveEntrySignatures : false
        
}

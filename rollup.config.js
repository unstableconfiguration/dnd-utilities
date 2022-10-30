import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import html from 'rollup-plugin-html'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss'

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
        html({
			include: '**/*.html'
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

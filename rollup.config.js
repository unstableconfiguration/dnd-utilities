import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete'
import html from 'rollup-plugin-html'
import resolve from 'rollup-plugin-node-resolve'
import serve from 'rollup-plugin-serve'

export default {
    input : 'index.js',
    output : {
        dir : 'dist',
        format : 'es'
    },
    plugins: [
        del({ targets : 'dist/*'}),
        copy({
            targets : [
                { src : 'index.html', dest : 'dist' },
                { src : 'favicon.ico', dest :'dist' }
            ]
        }),
        resolve(),
        html({
			include: '**/*.html'
		}),
        serve({ 
            contentBase : 'dist',
            port : 10001,
            open : true
        })
    ],
    preserveEntrySignatures : false
        
}

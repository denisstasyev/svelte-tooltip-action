import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import sveltePreprocess from 'svelte-preprocess'

import pkg from './package.json'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase())

const preprocess = sveltePreprocess({
	// typescript: true,
	scss: true,
})

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, format: 'es' },
		{ file: pkg.main, format: 'umd', name },
	],
	plugins: [
		svelte({
			compilerOptions: {
				css: true,
			},
			emitCss: false,
			preprocess,
		}),
		resolve(),
	],
}

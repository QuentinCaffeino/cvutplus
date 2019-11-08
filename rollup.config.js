import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import { default as license } from 'rollup-plugin-license'

export default {
	input: 'src/main.js',
	output: {
		name: pkg.name,
		file: pkg.browser,
		format: 'umd'
	},
	plugins: [
		resolve(), // so Rollup can find `ms`
		commonjs(), // so Rollup can convert `ms` to an ES module

		license({
			banner: {
				commentStyle: 'none',
				content: {
					file: path.join(__dirname, 'src/tapermonkeyheader.txt'),
				},
			},
		})
	],
	watch: {
		clearScreen: false,
	}
}

const { resolve } = require('path')
const { merge } = require('webpack-merge')

const withResolve = (obj) => {
	Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, resolve(v)]))
}

const customResolves = withResolve({
	'~/css': './styles/globals.css',
	'~/constants': './constants',
	'~/hooks': './hooks',
	'~/seo': './seo',
	'~/api': './pages/api',
	'~/types': './types',
	'~/ui': './ui',
	'~/prelude': './src/prelude.ts'
})

module.exports = {
	webpack: (config) =>
		merge(config, {
			resolve: {
				alias: {
					...customResolves
				}
			}
		})
}

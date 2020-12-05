const { resolve } = require('path')
const { merge } = require('webpack-merge')

const customResolves = {
	resolve: {
		alias: {
			'~/css': resolve('./styles/globals.css'),
			'~/constants': resolve('./constants'),
			'~/hooks': resolve('./hooks'),
			'~/seo': resolve('./seo'),
			'~/api': resolve('./pages/api'),
			'~/types': resolve('./types'),
			'~/ui': resolve('./ui'),
			'~/prelude': resolve('./src/prelude.ts')
		}
	}
}

module.exports = {
	webpack: (config) => {
		return merge(config, customResolves)
	}
}

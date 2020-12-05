const { resolve } = require('path')
const { merge } = require('webpack-merge')

const customResolves = {
	resolve: {
		alias: {
			'~/css': resolve('./styles/globals.css'),
			'~/constants': resolve('./src/constants'),
			'~/hooks': resolve('./src/hooks'),
			'~/lib': resolve('./src/lib'),
			'~/seo': resolve('./src/seo'),
			'~/types': resolve('./src/types'),
			'~/ui': resolve('./src/ui'),
			'~/prelude': resolve('./src/prelude.ts')
		}
	}
}

module.exports = {
	webpack: (config) => {
		return merge(config, customResolves)
	}
}

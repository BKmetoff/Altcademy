const { environment } = require('@rails/webpacker')

const path = require('path')

/* 
  the custom path below
  will only be used to import
  .JSX files into .JS files in javascript/packs,
  i.e. large components
*/

const customConfig = {
	resolve: {
		alias: {
			'@src': path.resolve(
				__dirname,
				'..',
				'..',
				'app/javascript/src/components'
			),
		},
	},
}

environment.config.merge(customConfig)

environment.splitChunks()
module.exports = environment

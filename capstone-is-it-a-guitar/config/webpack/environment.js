const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
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

environment.plugins.prepend(
	'Environment',
	new webpack.EnvironmentPlugin(
		JSON.parse(
			JSON.stringify({
				CLOUD_NAME: process.env.CLOUD_NAME,
				CLOUDINARY: process.env.CLOUDINARY,
			})
		)
	)
)

environment.config.merge(customConfig)

environment.splitChunks()

module.exports = environment

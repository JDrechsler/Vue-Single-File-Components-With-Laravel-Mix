let mix = require('laravel-mix').mix

mix.js('./src/js/app.js', 'public/js')
	.disableNotifications()
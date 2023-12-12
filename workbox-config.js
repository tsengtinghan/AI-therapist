module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,html,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
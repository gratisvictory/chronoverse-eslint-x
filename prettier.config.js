/**
 * @type {import('prettier').Config}
 */
export default {
	plugins: [
		'prettier-plugin-packagejson',
		'prettier-plugin-sort-json',
		'prettier-plugin-multiline-arrays',
	],
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'avoid',
	jsxSingleQuote: true,
	experimentalTernaries: true,
	experimentalOperatorPosition: 'start',
	multilineArraysWrapThreshold: 3,
	proseWrap: 'always',
	endOfLine: 'lf',
	objectWrap: 'preserve',
	overrides: [
		{
			files: ['*.json'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

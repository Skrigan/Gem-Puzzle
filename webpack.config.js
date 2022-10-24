const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// devServer: {
	// 	port: 4200,
	// 	hot: isDev
	// }


	//НЕ РАБОТАЕТ ДЛЯ BUILD
	devtool: isDev ? 'source-map' : '',
	// devtool: 'source-map',
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						// не работает в прицнипе..
						// options: {
						// 	hmr: true,
						// 	reloadAll: true
						// },
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				loader: 'file-loader',
			}
		]
	}
}

//npm init                                 - создаём package.json
//npm install -D webpack webpack-cli       - устанавливаем webpack и webpack-cli
//npx webpack                              - собираем проект в output {filename: bundle.js}
//npm install -D html-webpack-plugin       - плагин для создания копии index.html в dist
//npm install -D clean-webpack-plugin      - плагин для билда только ауктуальных файлов
/*
Это закидываем в package.json. Нужно для удобства в webpack cli
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack --mode development",
    "build": "cross-env NODE_ENV=production webpack --mode production",
    "watch": "cross-env NODE_ENV=development webpack --mode development --watch",
    "server": "cross-env NODE_ENV=development webpack --mode development --open"
  },
  npm run dev                              - собирает проект в режиме development
  npm run build                            - собирает проект в режиме production
  npm run watch                            - собирает проект в режиме watch (при билде в таком режиме и открытии проекта через лайв-сервер, проекта будет обновляться при изменении исходных файлов)
*/
//npm i -D css-loader                      - работа с css
//npm i -D node-sass sass-loader           - работа с sass
//npm i -D mini-css-extract-plugin         - для создания отдельного css файла
//npm i -D cross-env                       - для работы isDev
//npm install normalize.css                - загрузка normilize.css (доступен как ~normalize.css)
// npm install -D file-loader              - для загрузки всяких файлов (аудио, картинки и тд)

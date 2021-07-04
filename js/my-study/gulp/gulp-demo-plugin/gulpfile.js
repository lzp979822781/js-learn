const {src, dest, parallel, series} = require('gulp');

const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
const sass = require('gulp-sass')(require('sass'));

const del = require('del');

const clean = () => {
	return del(['dist']);
};


const data = {
	menus: [
		{
			name: 'Home',
			icon: 'aperture',
			link: 'index.html'
		},
		{
			name: 'Features',
			link: 'features.html'
		},
		{
			name: 'About',
			link: 'about.html'
		},
		{
			name: 'Contact',
			link: '#',
			children: [
				{
					name: 'Twitter',
					link: 'https://twitter.com/w_zce'
				},
				{
					name: 'About',
					link: 'https://weibo.com/zceme'
				},
				{
					name: 'divider'
				},
				{
					name: 'About',
					link: 'https://github.com/zce'
				}
			]
		}
	],
	pkg: require('./package.json'),
	date: new Date()
};

const style = () => {
	return src('src/assets/styles/*.scss', {base: 'src'})
		.pipe(plugins.sass(require('sass'))().on('error', plugins.sass(require('sass')).logError))
		.pipe(dest('dist'));
};

const script = () => {
	return src('src/assets/scripts/*.js', {base: 'src'})
		.pipe(plugins.babel({ presets: ['@babel/preset-env']}))
		.pipe(dest('dist'));
};

const page = () => {
	return src('src/*.html', {base: 'src'})
		.pipe(plugins.swig({data}))
		.pipe(dest('dist'));
};

const image = () => {
	return src('src/assets/images/**', {base: 'src'})
		.pipe(plugins.imagemin())
		.pipe(dest('dist'));
};

const font = () => {
	return src('src/assets/fonts/**', {base: 'src'})
		.pipe(plugins.imagemin())
		.pipe(dest('dist'));
};

// 处理public目录
const extra = () => {
	return src('public/**', { base: 'public' })
		.pipe(dest('dist'));
};

const compile = parallel(style, script, page, image, font);

const build = series(clean, parallel(compile, extra));

module.exports = {
	build,
	image,
	font
}
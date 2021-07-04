const {src, dest, parallel, series, watch} = require('gulp');

const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();
// const sass = require('gulp-sass')(require('sass'));

const browserSync = require('browser-sync');
const browserServer = browserSync.create();

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
		.pipe(dest('dist'))
		.pipe(browserServer.reload({stream: true}));
};

const script = () => {
	return src('src/assets/scripts/*.js', {base: 'src'})
		.pipe(plugins.babel({ presets: ['@babel/preset-env']}))
		.pipe(dest('dist'))
		.pipe(browserServer.reload({stream: true}));
};

const page = () => {
	return src('src/*.html', {base: 'src'})
		.pipe(plugins.swig({data, defaults: {cache: false}}))
		.pipe(dest('dist'))
		.pipe(browserServer.reload({stream: true}));
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

const serve = () => {
	watch('src/assets/styles/**', style);
	watch('src/assets/scripts/**', script);
	watch('src/*.html', page);

	watch([
		'src/assets/images/**',
		'src/assets/fonts/**',
		'public/**'
	], browserServer.reload);
	browserServer.init({
		notify: false,
		// files: 'dist/**', // 监听文件变化
		server: {
			baseDir: ['dist/', 'src', 'public'],
			routes: {
				'/node_modules': 'node_modules'
			}
		}
	})
};

const compile = parallel(style, script, page);

const build = series(clean, parallel(compile, image, font, extra));

const dev = series(compile, serve);

module.exports = {
	build,
	image,
	font,
	serve,
	dev,
	page
}
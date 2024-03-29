const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/components/install_app.js', 'public/js/install_app.min.js')
   .sass('resources/sass/scss/slider.scss', 'public/css/slider.min.css')
   .sass('resources/sass/scss/install_app.scss', 'public/css/install_app.min.css')
   .sass('resources/sass/app.scss', 'public/css');

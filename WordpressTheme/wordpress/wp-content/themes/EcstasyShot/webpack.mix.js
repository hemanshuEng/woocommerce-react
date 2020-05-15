const mix = require('laravel-mix');
mix.js( 'src/js/app.js', 'public/js/app.js')
    .sass( 'src/scss/app.scss', 'public/css/app.css')
    .copyDirectory('src/img', 'public/img')
    .browserSync({
        proxy: 'http://nginx',
        open:false
    })
    .options({
        processCssUrls: false,
    });
<?php

if(file_exists( dirname(__FILE__) . '/vendor/autoload.php')) :
    require_once dirname(__FILE__) . '/vendor/autoload.php';
endif;

if( class_exists('App\\Init')) :
    new App\Init();
endif;

function add_theme_scripts(){
//     if(!file_exists('http://localhost:8081/main.js'))
//     {
//    $string = file_get_contents(get_template_directory() . '/dist/manifest.json' );
//    $json_a = json_decode($string,true);
    wp_enqueue_script( 'app', get_template_directory_uri() . '/public/js/app.js' , [], null, true);
    wp_enqueue_style('app',get_template_directory_uri() . '/public/css/app.css');
    //wp_enqueue_script( 'main', '/var/www/wp-content/themes/HemanshuWord/dist/main.js', [], null, true);
//     }
    // wp_enqueue_script( 'main','http://localhost/main.js', [], null, true);
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );
<?php
function add_theme_scripts(){
//     if(!file_exists('http://localhost:8081/main.js'))
//     {
     $string = file_get_contents(get_template_directory() . '/dist/manifest.json' );
     $json_a = json_decode($string,true);
      wp_enqueue_script( 'main', get_template_directory_uri() . '/dist/' . $json_a['main.js'], [], null, true);
    //wp_enqueue_script( 'main', '/var/www/wp-content/themes/HemanshuWord/dist/main.js', [], null, true);
//     }
    // wp_enqueue_script( 'main','http://localhost/main.js', [], null, true);
 }
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );

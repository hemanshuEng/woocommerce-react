<?php
/**
 * The base configuration for WordPress
 *
 * The wp-app.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-app.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'homestead' );

/** MySQL database username */
define( 'DB_USER', 'homestead' );

/** MySQL database password */
define( 'DB_PASSWORD', 'secret' );

/** MySQL hostname */
define( 'DB_HOST', 'db' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'WVRZt#C&Mn8(Y078+Vq`R;|?7%%VBu}0_g?{lUrPlk>t$fv3r66?jk748>U_Slj1');
define('SECURE_AUTH_KEY',  '^!}Kq`3{!3sf=9#n7GR0x0UAE9eTH#@x8!3x)i)p;xZI`y]26i1E0L7I~^;lKsl<');
define('LOGGED_IN_KEY',    'e|_(u%%}$%6RY!+faxW>Kg3-P1Q>?A^/ A&JkXa{M{){ld.5jpy.Iwu*/Rpg{43e');
define('NONCE_KEY',        'rc0(nE?g!Af?AVqD9xF,|m~iIH>6e#sH[6Cyf[%hvNhDD2%n|P|mmVO|tV87--zB');
define('AUTH_SALT',        'NxfqS&oD04|Gz{c67D. ^sA|>8SLa`47p`bR*<neR,u-Cv7nnk-7{5p-V$UY6e1-');
define('SECURE_AUTH_SALT', 'aUWX F&t^8K|B#BckJf+#*J8R{U$yp;YTML(`xDjNb_,t{5Sw9-;|H_A?PRnL47s');
define('LOGGED_IN_SALT',   '@CSv50KA>)A&C+nN!/L@iH,DbA`!S 9(}-V>IxtVl7>k,SaQdPvZ47|%kT q_HAC');
define('NONCE_SALT',       '.GNd_o `48><W$1w]|hG2tktyK9pweZc_yQTiAx8Cn;CnQcXo+-}uOg6X{.fVMXm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

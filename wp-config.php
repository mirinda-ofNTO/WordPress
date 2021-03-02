<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
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
define( 'DB_NAME', 'builoi' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         '4q=},)7_Q?dM!hnVAn(u9fJFeg{J#_=^:_eMK:y5:=;|7C~6H&ftG-#,8#m`%LHb' );
define( 'SECURE_AUTH_KEY',  '`1pQD6*pVuM8M#wfqZ]79IWK0PB+9o+]j7.b:@QL;%e*VdFK23|sJr{?vl$/-t$4' );
define( 'LOGGED_IN_KEY',    'UG[^z*WYKhiu.t@Z{q-`m>)9~2t.N~#1E kb6<D<Q~:>G`#O:eVq.Hw5Pr:pa5&F' );
define( 'NONCE_KEY',        'vx;|0Dz3*=;MlT&xj@]%8VjyV Bx;o]ygxFjUH&8o|]=:,EAB@$c_J;aZe$+`OTC' );
define( 'AUTH_SALT',        'N3>9Zj*JSp$jE)7Z[S7Opfm#aYd>aUD`0!z^zN>DXN`M YT`G,}w`IJ4<D|Z(>||' );
define( 'SECURE_AUTH_SALT', '?[3TjRZ<n^ZQWY<:#%,Z&EPzTt-*+0v,>GyuwjT,glC!52l9o-]x]l@;UTm2i%%h' );
define( 'LOGGED_IN_SALT',   'kn_6bRRT`)ZYhd?]O+6$/]v`1>c=>zu&S,p@^hv?ORp7k#wZg%8(gNJWLWs#e_gL' );
define( 'NONCE_SALT',       '`A6[w/6rz_&@lNW`?YE-Bs>h.UnLm~r)X{BgqrVqeB:w5Cd~/]fd91tPL~@M-<!@' );

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
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

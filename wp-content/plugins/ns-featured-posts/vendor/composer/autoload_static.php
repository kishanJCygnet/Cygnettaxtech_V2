<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4c1a6864f819fbf9117c5efa65da9f23
{
    public static $prefixLengthsPsr4 = array (
        'N' => 
        array (
            'Nilambar\\AdminNotice\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Nilambar\\AdminNotice\\' => 
        array (
            0 => __DIR__ . '/..' . '/ernilambar/wp-admin-notice/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Nilambar\\AdminNotice\\Notice' => __DIR__ . '/..' . '/ernilambar/wp-admin-notice/src/Notice.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4c1a6864f819fbf9117c5efa65da9f23::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4c1a6864f819fbf9117c5efa65da9f23::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4c1a6864f819fbf9117c5efa65da9f23::$classMap;

        }, null, ClassLoader::class);
    }
}

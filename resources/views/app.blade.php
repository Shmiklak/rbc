<!DOCTYPE html>
<html lang="RU">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#1e100f">

        <meta name="description" content="Добро пожаловать на сайт Russian Community Beatmapping Contest. На данном сайте вы сможете проголосовать за вашу любимую карту, а также узнать подробности о русскоязычном мапперском комьюнити."/>
        <meta name="keywords" content="osu, rbc, russian community beatmapping contest, shmiklak, осу, рбц, osu contest"/>
        <meta property="og:title" content="Russian Community Beatmapping Contest" />
        <meta property="og:site_name" content="Russian Community Beatmapping Contest" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ request()->url() }}" />
        <meta property="og:image" content="{{ asset('static/images/banner.jpg') }}" />
        <meta property="og:image:alt" content="{{ asset('static/images/banner.jpg') }}" />
        <meta property="og:description" content="Добро пожаловать на сайт Russian Community Beatmapping Contest. На данном сайте вы сможете проголосовать за вашу любимую карту, а также узнать подробности о русскоязычном мапперском комьюнити." />
        <meta http-equiv="content-language" content="RU">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Blog</title>
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
</head>
<body>
    <div id="app"></div>
</body>
<script
  src="{{ asset('js/jquery-3.4.1.min.js') }}" crossorigin="anonymous"></script>
<script src="{{ asset('js/app.js') }}"></script>
<script src="{{ asset('service-worker.js') }}"></script>
<script>
    window.baseUrl = "{!! url('/') !!}";
    window.disqusName = "{{ config('constants.disqus_short_name') }}";
</script>
</html>
<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Форма для заявок</title>
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
</head>
<body>
<h2 style="text-align: center"> Оформить завку на кредит или вклад. </h2>
<div id="root"></div>
<script src="{{mix('js/app.js')}}" ></script>
<script>
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            let forms = document.getElementsByClassName('needs-validation');
            let validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
</script>
</body>
</html>

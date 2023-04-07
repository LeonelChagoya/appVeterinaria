<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $title ?? ''}}</title>
        <meta name="description" content="{{$metaDescription ?? 'default descripcion'}}"/>
        
    </head>
    <body>

       <x-Layouts.navbar/>
      {{--
        sirve para imprimir variables pasadas por los componentes 
         <pre>{{$sum}}</pre>
         
         --}}
        {{ $slot}}
    </body>
    </html>
    
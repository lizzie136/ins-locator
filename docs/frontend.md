# Technical Test Front-end Developer

## Objetivo 

La prueba consistirá en consumir un API REST la prueba se dividirá en 2 funcionalidades basicas y 1 opcional 


## Instrucciones y recomendaciones

Algunas instrucciones y recomendaciones a tener en cuenta:

- Tomarse el tiempo en leer bien las instrucciones
- Elegir el framework de javascript de su preferencia
- Elegir los servicios adicionales de su preferencia.
- **Tiempo máximo:** 1.5 horas 

## 1. Funcionalidades basicas

**Consumir API REST de ISS**

ISS (International Space Station) maneja un API donde muestra la posicion actual del ISS lo que se quiere es mostrar la posición actual en un mapa refrescando su posicion cada 3 segundos.

Link de API doc: http://open-notify.org/Open-Notify-API/ISS-Location-Now/


**Notificacion cuando el ISS este en tu ubicacíon**

Mandar una notificación local cuando el ISS pase por el triángulo de las Bermudaz 
```
triangleCoords = [
            {lat: 25.774, lng: -80.190},
            {lat: 18.466, lng: -66.118},
            {lat: 32.321, lng: -64.757}
        ];
```


## 2. Funcionalidades opcionales


**Listar las personas en el ISS**

Mostrar cuantas personas estan en el espacio y cuales son sus nombres.

Link API doc: 
http://open-notify.org/Open-Notify-API/People-In-Space/
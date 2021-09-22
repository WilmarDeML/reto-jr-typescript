# reto-jr-typescript

## Respondiendo a la parte teórica

1. Inyectar dependencias a mi proyecto es reutilizar código, librerías, frameworks, 
  que fueron creadas previamente para hacer uso de sus funcionalidades e integrarlas en
  un proyecto de desarrollo IT, puedo decir que existen muchos estándares y están a mi 
  disposición en la web.
  
2. Asíncrono no bloquéa la ejecución de las líneas siguientes en el código, mientras que
  síncrono en el código se ejecuta en orden de arriba hacia abajo, la ejecución de una línea
  bloquea la ejecución del código en adelante hasta que no termine su propia ejecución.
  Desde otro punto de vista y a modo de ejemplo, en la comunicación sincrónica por medio de
  video tanta el emisor como el receptor independientemente de su ubicación geográfica
  están presentes en tiempo real para comunicarse; mientras que asincrónamente se puede grabar
  y luego ver el comunicado reproduciendo la grabación en momentos diferentes.
  
3. Es importante las promesas para mi, porque me permite manejar los errores de una manera controlada
  en una comunicación asíncrona, además puedo encadenarlas y la ejecución está en simetría
  con el código síncrono.
  
4. Es importante usar ORM dentro de mi proyecto para interactuar con mi base de datos por
  medio del lenguaje de programación con el que esté trabajando y no interactuar con la 
  base de datos manualmente.
  Una ventaja que resalto es poder hacer uso de las funcionalidades ya listas con las que
  están diseñadas y poderlas usar con el lenguaje elegido.
  La desventaja que veo son los gastos generales a invertir para implementar la ORM específica.
  
5. La diferencia más notable es que SQL permite combinar tablas y relacionarlas entre sí, 
  y cuando la cantidad de datos es amplia se torna menos eficiente que una base de datos NoSQL 
  y a su vez esta última es no relacional.
  
6. En un documento se puede almacenar un json con estructurado con múltiples pares key: value
  y digo que es equivalente a una fila en una tabla y una colección es un conjunto de documentos
  y digo que es equivalente a una tabla.
  
7. Un error de Cors se refiere a que la solicitud de ingreso al sevidor se está haciendo desde un
  dominio no autorizado.
  
  # Para probar el código:
  
  ## Aclaraciones
  
  1. Sólo hay código en el servidor back-end
  2. Se requiere de postman u otro similar para enviar las solicitudes o desde el navegador
  3. Todos los parámetros son enviados como query parameters con la estructura ?{nameParam1}={valueParam1}&{nameParam2}={valueParam2}...
  4. No front-end
  5. Todas las rutas tendrán este router principal http://localhost:3000/challenge/{nombreDelEjercicio}
  6. Continúa leyendo y más abajo están los nombres de las URIs o {nombreDelEjercicio}
  
  ## Iniciando
  
  1. forkea el repositorio y lo guardas en tu equipo
  2. Sugiero abrirlo con visual estudio code
  3. Abrir la teminal

  ### Comandos
  * npm install
  * npm run dev

  ### Verificaciones
  * verifica en consola el siguiente mensaje "Servidor escuchando en el puerto 3000"
  * probar en el navegador o desde postman la ruta http://localhost:3000/ 
  * verifica en pantalla este mensage 'Cannot GET /' así debe ir todo
  * si pruebas ir a http://localhost:3000/challenge/ te compartiré algo

# Enviando las solicitudes para ver las respuestas del reto URIs, nombres de los ejercicios

## /average

* Requiere query parameters /average?a={numero1}&b={numero2}, sino pasas parámetros tambier recibirás respuesta
* Regresará el promedio entre dos números, la manera correcta y la incorrecta de hallarlo y escribirlo en código

## /strManipulation

* Requiere un query parameter /strManipulation?str={cualquierPalabra}
* Verifica que el último caracter de la cadena sea "!" el aterior signo de admiración, si lo es, devuelve la cadena sin él

## /sumArray

* Require un arreglo como query así: /sumArray?array={cadenaDeCaracteres}, la cadenaDeCaracteres deben ser caracteres numéricos, separados por coma y pueden ser negativos también.
* Este retornará un objeto con:
  1. Suma total de la matriz
  2. Suma sus enteros positivos
  3. Suma sus pares
  4. Suma sus impares
* Si la matriz no tiene nada regresa valores en cero

## /transformArray

* Requiere dos parámetros un arreglo bidimensional pasado por query así: 
  - /transformArray?array={cadena1}:{cadena2}
  - cadena1 y cadena2 puede ser alfanumerico
  - cadena1 y cadena2 simulan un arreglo separando sus posiciones con comas
  - cadena1 y cadena2 son separados por ":"
  - ejemplo: array=1,2,3,miNombre,otraCosa:211, 33, unString &
* El segundo parámetro es un string con nombre "order" que dirá el ordenamiento de la respuesta
  - después del caracter especia "&" en la query escribes asc o desc combinando mayúsculas si quieres
  - ejemplo: array={cadena1}:{cadena2}&order={asc ó desc}

* El programa separa sólo los números y los retorna en otro arreglo ordenados según el segundo parámetro asc => ordena ascendente y desc => ordena descendente

## /myCows

* Requiere un parámtro query así /myCows?n={unNumero}
* responde a las siguientes necesidades o requerimientos
  - El parámetro n hace referencia a cierta cantidad de vacas de una finca
  - Sólo funciona si la cantidad de vacas está entre 3 y 50
  - El programa se le ingresa la cantidad de leche producida por una vaca cada día de manera aleatoria con valores entre 0 y 11.9 en este caso
  - Calcula y retorna un objeto que muestra:
    * Cantidad de vacas ingresada (number)
    * Producción total del hato en cada uno de los 7 días (Object)
    * El día con mayor producción (Object)
    * El día con menor producción (Object)
    * El número de vaca con mayor producción de leche por cada día (Array)

## /tracking

  * Requiere parámetro params así /tracking/{codigo}, codigo puede hacer referencia a una guía o a una etiqueta y dependiendo y dependiendo del codigo resuelve un mensaje u otro
  * Consumo los siguientes servicios para lograr el objetivo:
    - https://api.coordinadora.com/cm-model-testing/api/v1/talentos/ Para Guías
    - https://api.coordinadora.com/cm-model-testing/api/v1/talentos/checkpoint Para Checkpoint (Tracking)
  * Pueden probar con los siguientes guías y etiquetas
    ### Guías
    - 34380016861
    - 34380067912

    ### Etiquetas
    - 734380016861003
    - 734380067912002

## /ArrayScore

  * Require un arreglo como query así: /arrayScore?array={cadenaDeCaracteres}, la cadenaDeCaracteres deben ser caracteres numéricos separados por coma
  * Retorna una puntuación así:
    1. Agrega 1 punto por cada número par en el arreglo.
    2. Agrega 3 puntos por cada número impar en el arreglo, exceptuando el número 5
    3. Agrega 5 puntos a cada número 5 que aparezca en el arreglo.

  * Regresa un objeto con el arreglo ingresado y la respectiva puntuación.



  
  

**Sergio Martínez Calvo B84621**

**Análisis de Grandes Volúmenes de Datos**

**Reporte 05**

## Resumen 
En estas semanas se hablo de dos temas: el análisis de asosiación y las series de tiempo.

El análisis de asociación es la tarea de encontrar relaciones relevantes en grandes conjuntos de datos. Puede tener múltiples usos en diferentes áreas como en las compras, ventas y análisis de mercadeo o en análisis de trafico web, entre otros.Dos términos importantes para este tema son el de item sets, que es el conjunto de los eventos que pueden pasar y las reglas, que es una implicacion de dos elementos.(A->B)

Vimos la generacion de reglas con el algoritmo Aprioiri, las cuales siguen dos pasos:
1. Encontrar todos los itemsets que son frecuentes
2. A partir deestioss, generar reglas de asociación que satisfagan las condiciones requeridas de support y confidence (valores que ayudan a definir si no es un evento que ocurre por azar y saber la probiliidad de que la ocurrencia de dos eventos este relacionada)

El algoritmo Apriori dice que luego de creear estas reglas hay que eliminar todos los item sets que tengan un support menor que el umbral definido, para asi poder dejar los datos que si pueden tener asociaciones relevantes y no tener tanto ruido.Esto se utiliza para arreglar una de las principales problematicas del análisis de asosiación que es que el tamaño de los datos, al ser combinaciones, puede crecer hasta llegar a ser intratable.

Luego vimos sobre las series de tiempo que es cuando en el analisis de una variable, el tiempo cuenta un papel importante que llega a afectar a dicha variable. Con esto lo que se hace es analizar que tanto depende la variable del tiempo para así poder identificar patrones en periodos de tiempo y hacer predicciones informadas sobre el futuro.

Las series de tiempo por lo general son continuas pero tambien se pueden presentar discretas.Se puede utiliza para hacer predicciones en múltiples áreas como en el mercado, en temas de ambiente y clima o de patrones en comportamientos de poblaciób,

Entre los componentes principales se encuentran:

- Tendencia: es el comportamiento promedio que tiene la serie durante el tiempo.
- Temporalidad:son los periodos de tiempo que se pueden definir en la serie.
- Ruido: variaciones irregulares del tiempo en la serie.

Se busca descomponer estos componentes para analizar la estructura de la serie y pronosticar algún evento del futuro.Se utiliza el moving average, para quitar el componente de ruido y de temporalidad e identificar el el componente de tendencia a largo plazo.


## Comentario sobre algo aprendido

La verdad ambos temas fueron totalmente nuevos para mí y han sido de los que más me han interesado del curso ya que uno de mis usos favoritos de big data es el de la predicción de cosas a fúturo y estos métodos lo hacen de una manera bastante curiosa. Nunca me había proyectado el problema que sería  el crecimiento exponencial de todas la combinaciones entre factores de un modelos como se habló en el análisis de asocición y me gusta la manera tan simple de eliminar este problema.
## Dudas

- Me gustaría saber que tan confiables son los análisis de las series de tiempo, supongo que depende demasiado del área en el que se utilice, pero me gustaría saber una aproximación.

A decir verdad creo que no tengo más dudas hasta ahora de los temas, me ha quedado bastante claro la ejecución de ambos.


## Posible uso que usted le dará a esta materia como profesional
 
Es muy común que en analisis de datos en una empresa se busque hacer predicciones sobre los clientes o usuarios o sobre tendencias del mercado, ambos temas vistos durante las últimas semanas se podrían utilzar para este fin. Creo que en el trabajo que estoy realizando en este momento me serviría más el de tiempo ya que trabajamos con compras de servicios y he notado una fuerte relación entre los meses y el tipo de servicio requrido, me gustaría propones esta técnica para la predicción a futuro.

## Ideas sobre problemas que podría resolver con las técnicas estudiadas

Cuando estabamos viendo el tema de análisis de asosiación se me ocurrió que un uso muy interesante que tal vez se le podría dar es el de acomodar las tiendas en un centro comercial para hacer más fácil el desplazamiento a los clientes. Así se podrían colocar juntas las tiendas que tienen mas clientes en común, se podría hacer viendo entre que tiendas se mueven principalmente los clientes luego de ir a una y así crear el espacio más comodo posible.

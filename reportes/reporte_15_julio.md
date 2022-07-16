**Sergio Martínez Calvo B84621**

**Análisis de Grandes Volúmenes de Datos**

**Reporte 06**

## Resumen 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estas semanas se habló del tema de análisis de flujos de datos, donde vimos que hasta el momento hemos trabajado con datos estáticos, para los que se cuenta con mucho tiempo para procesamiento y análisis.Pero por otro lado existen los datos en streaming, que son los que necesitan ser procesados inmediatamente, para dar una respuesta en ese instante sin necesidad de ser almacenados previamente. Para esto se utiliza el stream processing que trabaja con set de datos infinitos, el cual hace el proceso de recoleccion, integración y análisis en rafagas pequeñas que permiten trabajar de manera más rápida.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Luego se habló de los tipos de procesamiento, se mencionó el de Bounded data que es el más popular, donde los datos se pasan por un procesador que los ordena rapidamente y los de unbounded con batch y streaming, este último cuenta con 4 enfoques: time-agnostic, approximation, windowing by processing time y windowing by event time.

- Time-agnostic: El tiempo no importa para el análisis.
- Approximation:se toma un dato del stream y se convierte en algo parecido.
- Windowing by processing time: se parten en pedazos basándose en un tiempo t y se procesa en estos pedazos
- Windowing by event time: se usa cuando se toma en cuenta el evento del tiempo.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Luego vimos sobre los filtros que seleccionan datos basándose en un criterio específico, se utiliza cuando se requiere eliminar una cantidad grande de datos ya que el total es muy grande.Y por último vimos los análisis para streaming que se dividen en Filtering, enriching, aggregation y event detectation.

## Comentario sobre algo aprendido
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; El trabajo con streamings me parece interesante porque el profesor dió muchos ejemplos de el día a día donde se utilizan, y al tener que dar una respuesta inmediata me llama la atención que hay que pensar de manera más dinámica. Todo el tema fue nuevo para mí y levantó una curiosidad bastante grande, espero poder llegar a aplicarlo en algún momento.

## Dudas

- Me gustaría saber la confiabilidad de los anáisis de streaming, ya que siento que algo que pase tan rápido no debe ser tan preciso como uno estático.



## Posible uso que usted le dará a esta materia como profesional


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Siento que en cualquier momento como futuro analista de datos puedo trabajar con datos de streaming, más que cada vez aparecen más sistemas que producen datos en tiempo real, por lo que me alegra bastante haber aprendido por lo menos una parte de este tema para así estar preparado en caso de ser necesario.
## Ideas sobre problemas que podría resolver con las técnicas estudiadas


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pienso que un caso en el que podría utilizar el analisis de streaming es el procesamiento de imágenes obtenidas por una cámara de vigilancia, para asi alertar a las personas si algo peligroso o sospechoso esta sucediendo; por medio de un programa que analice rapidamente las imágenes obtenidas y avise de manera inmediata.

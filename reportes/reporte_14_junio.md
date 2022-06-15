**Sergio Martínez Calvo B84621**

**Análisis de Grandes Volúmenes de Datos**

**Reporte 04**

## Resumen 

En estas últimas semanas se hablo sobre el tema de clustering, vimos desde su descripción general y categorías hasta los requisitos para implementarlo, limitantes y ejemplos especificos. Esta es la primer técnica de aprendizaje no supervisado que cubrimos en el curso, en general consiste en generar grupos de datos basado en su parentesco entre sí, las 4 categorías principales son: Algoritmos de particionamiento, Algoritmos jerárquicos, Algoritmos basados en densidad y Algoritmos basados en malla.

La más famosa de estas categorias es la de particionamiento por su gran variedad de aplicaciones, principalmente del famoso algoritmo k-means.  Los algoritmos de esta categoria se definen por crear _clusters_ esféricos al estar basado en distancia mínima entre puntos, y que el centro de estos clusters no necesariamente es una observacion real. Un dato que me pareció curioso sobre este tema es el hecho de que la k sea totalmente arbitraria.

Los algoritmos jerárquicos se caracterizan por su enfoque "aglomerativo" donde empiezan con _clusters_ muy pequeños y van combinandose para generar _clusters_ producto de la combinacion de estos, por lo que sus resultados se pueden ver como un grupo de clusters anidados, o multinivel. Ejemplos famosos son los algoritmos BIRCH o Chameleon.

Los basados en densidad son muy interesantes ya que pueden encontrar clusters de cualquier forma, lo que es muy atractivo en situaciones donde un _cluster_ esférico no sea útil, se basa únicamente en que cada punto de datos tenga suficientes vecinos cerca, sin importar su dirección. Ejemplos famosos son DBSCAN y OPTICS.

Los algoritmos basados en malla son los más atípicos ya que no se interesan en los puntos de información por si mismo sino en las regiones del espacio muestral, por lo que no importa si dos puntos se encuentran cerca en el espacio, si no pertenecen a la misma región no serán agrupados por estos algoritmos. Estos algoritmos son buscados por su rapido tiempo de procesamiento. Ejemplos famosos son STING y CLIQUE.

En este último tema se profundizo más con el tema SOM o mapas autorganizados,  que busca un grupo de centroides que se puedea asociar a los puntos del conjunto de datos. Vimos multiples usos como en medicina o en agrupamiento de noticias.

## Comentario sobre algo aprendido

En el tema de Clustering aprendí bastante, principalmente de los diferentes tipos que existen pues antes del curso mi conocimiento del área se limitaba al algoritmo de K-means y muy levemente. Me llamó bastante la atención la familia de algoritmos jerárquicos y de densidad dado que siento que pueden tener aplicaciones bastante diferentes al de un algoritmo de particionamiento

## Dudas

- Los algoritmos de _clustering_, o no supervisados en general tienen usos aparte del análisis exploratorio para el área de big data?
-   Qué aplicaciones comunes tiene un algoritmo de _clustering_ jerárquico para análisis de big data?


 ## Posible uso que usted le dará a esta materia como profesional
 
 El clustering lo puedo llegar a utilizar si en mi trabajo me piden trabajar con recomendaciones para los usuarios ya que es un método al que se le puede sacar bastante provecho a la hora de agrupar usuarios y la verdad me gustari mucho ver si puedo llegar a aplicarlo en esto porque me gusto bastante.

## Ideas sobre problemas que podría resolver con las técnicas estudiadas

Los temas que tengo mas presente para resolverlos utilizando clustering son referente a recomendaciones de usuarios, como mencione anteriormente, me parece muy curiosa la manera en la que pueden literalmente agrupar a personas con gustos similares y asi tratar de predecir que pueden querer comprar o consumir y por lo general estar en lo correcto. 







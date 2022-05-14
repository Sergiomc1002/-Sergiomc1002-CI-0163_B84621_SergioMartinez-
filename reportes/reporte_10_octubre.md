Sergio Martínez Calvo B84621
Análisis de Grandes Volúmenes de Datos
Reporte 02

En estas últimas semanas de curso vimos principalmente los temas de algoritmos para machine learning basados en árboles de decisión y también entrenamiento y validación de modelos, con énfasis en los métodos de _cross validation_.

Para iniciar con el tema de algoritmos basados en árboles de decisión vimos los 2 ejemplos más simples, _decision trees_ y _random forest_.
Vimos como funciona un árbol de decisiones, sus hiperparámetros y cómo pueden afectar el desempeño del árbol, sus pros y sus contras, cómo se toman decisiones con atributos categóricos, nominales y numéricos. Basado en lo aprendido de los árboles de decisión vemos el primer _ensemble_ basado en árboles de decisión, el _random forest_.

El _random forest_ es un _ensemble_ de árboles de decisión entrenados ligeramente diferente, de modo que se aumente la variabilidad, ya que cada árbol puede especializarse en la parte del dataset que conoce, por lo que algunos árboles del bosque pueden hacer _overfit_. Para llegar a un resultado final, en casos de regresión se toman los valores de cada árbol y se promedian, en casos de clasificación se hace un voto y se elige la moda. Vimos también sus hiperparámetros y cómo afectan, y sus pros y contras.

Siguiendo con el tema de algoritmos basados en árboles de decisión vimos _Gradient Boosting_, un algoritmo donde se ensamblan secuencialmente árboles con el objetivo de minimizar un error. Este tipo de algoritmos es bastante sensible a sus parámetros, tiende a tener poca profundidad en sus árboles para evitar _overfiting_. Ofrecen resultados similares a un _random forest_ pero requieren más tiempo en ajuste de parámetros y entrenamiento.

Del lado de entrenamiento y validación de modelos vimos la importancia de hacer validación cruzada a la hora de evaluar el desempeño de un modelo.
Un modelo evaluado sin validación cruzada no es realmente robusto ni confiable pues es el equivalente a tomar resultados de un experimento que no ha replicado sus resultados. Puede que haya tenido un set de entrenamiento muy representativo con respecto al set de prueba y desempeñe mejor de lo previsto, entonces estaríamos evaluando de modo muy optimista este modelo. 

Para evitar esto se hace validacion cruzada, un método de validación donde se divide el dataset en K partes iguales, y se entrenan varios modelos donde cada uno tendrá un set de prueba diferente, de este modo todos conoceran distintas partes del dataset, lo que ofrece resultados mucho mas robustos.

Sin embargo no es perfecto. _Cross-Validation_ simple mantiene los siguientes problemas:
- Puede generar _subsets_ poco significativos, especialmente en _datasets_ donde las clases estan posicionalmente cerca.
- Se puede "filtrar" información de entrenamiento en la validación en casos donde hay observaciones muy relacionadas.
- Requiere bastantes observaciones, por lo que no funciona bien en datasets pequeños.

Para solucionar estos problemas se pueden implementar versiones mejoradas de _cross validation_ como _stratified CV_ ó _shuffle-split CV_, _CV with groups_ y _Leave one out CV_ respectivamente.

Para finalizar vimos métodos para afinar parámetros como grid search que consta en probar las combinaciones de hiperparámetros viendolo como una matriz donde cada entrada tiene un valor para los hiperparámetros X y Y, lo cual se presenta muy beneficioso dada la cantidad de hiperparámetros que analizamos en estas semanas del curso.  


## Comentario sobre algo aprendido
Me parece bastante práctico el uso de grid search para encontrar las combinaciones de hiperparámetros ideales para un algoritmo, dado que este proceso siempre incluye una parte de prueba y error para llegar a valores óptimos, lo cual puede consumir mucho tiempo especialmente si el modelo tarda un tiempo considerable re-entrenandose.

## Dudas
- Qué tipo de métodos o heurísticas usan los algoritmos para construir los modelos? Usan técnicas probabilísticas supongo? 

- En los algoritmos de _gradient boosting_ qué datos o _output_ entrega cada árbol al siguiente? Se menciona que cada árbol corrige el error del anterior, este error se pasa explicitamente con el resto de datos?

## Posible uso que usted le dará a esta materia como profesional
Como profesional en análisis de datos el uso de algoritmos basados en árboles de decisión es fundamental pues es uno de los métodos más prominentes actualmente en el area de algoritmos para _machine learning_. Por su parte el _tuning_ de hiperparámetros con métodos como grid search es una de las habilidades necesarias para realizar un modelo exitoso, especialmente en casos donde se tenga gran variabilidad y represente un problema probar combinaciones manualmente.


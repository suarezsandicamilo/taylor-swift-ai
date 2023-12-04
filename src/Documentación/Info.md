**P�rdida de entrenamiento a lo largo de las �pocas:**
- *Eje Y (Vertical):* Representa el valor de la funci�n de p�rdida. La funci�n de p�rdida mide qu� tan bien est� desempe��ndose el modelo. Durante el entrenamiento, el objetivo es minimizar este valor.
- *Eje X (Horizontal):* Representa el n�mero de �pocas de entrenamiento. Una �poca es un pase completo a trav�s de todo el conjunto de datos de entrenamiento.
- *Significado:* Una tendencia decreciente en la p�rdida de entrenamiento a lo largo de las �pocas indica que el modelo est� aprendiendo y mejorando su rendimiento en los datos de entrenamiento. La p�rdida representa la discrepancia entre las predicciones del modelo y los valores reales objetivo. Osea, valores m�s bajos son mejores, pero es importante vigilar signos de sobreajuste (overfitting).

**Precisi�n de entrenamiento a lo largo de las �pocas:**
- *Eje Y (Vertical):* Representa la precisi�n de entrenamiento, que es una medida de cu�ntas predicciones acert� el modelo durante el entrenamiento.
- *Eje X (Horizontal):* Representa el n�mero de �pocas de entrenamiento.
- *Significado:* Una tendencia creciente en la precisi�n de entrenamiento indica que el modelo se est� volviendo m�s preciso en la predicci�n de los datos de entrenamiento. Sin embargo, una alta precisi�n de entrenamiento no garantiza un buen rendimiento en datos nuevos y no vistos (podr�a estar sobreajust�ndose/overfitting). Es crucial monitorear tanto la p�rdida como la precisi�n para evaluar el rendimiento general del modelo.

_________________________________________________________________

**RESUMEN DEL MODELO:** 

Model: "sequential_1"

 Layer (type)                Output Shape              Param #   
=================================================================
 embedding_1 (Embedding)     (1, None, 256)            18688     
                                                                 
 gru_1 (GRU)                 (1, None, 1024)           3938304   
                                                                 
 dense_1 (Dense)             (1, None, 73)             74825     
                                                                 
=================================================================
Total params: 4031817 (15.38 MB)
Trainable params: 4031817 (15.38 MB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________


*Tipo:* Este modelo es [secuencial](https://www.themachinelearners.com/modelos-secuencia/#%C2%BFA_que_nos_referimos_con_secuencia) (Significa que consiste en una pila lineal de capas, donde la salida de una capa se convierte en la entrada de la siguiente.)


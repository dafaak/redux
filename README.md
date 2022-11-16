# REDUX

Es un patrón par el manejo de la información permite saber:

- el estado de la app
- cómo cambió la información
- quién cambió alguna variable
- cómo se encuentra determinada variable

### Ideas principales

- Toda la data de la app, se encuentra en una estructura previamente definida
- Toda la información se encuentra almacenada en un lugar llamado **STORE**
- El store **JAMAS**  se modifica de manera directa
- Las interacciones de usuario y/o código, disparan acciones que describen qué sucedió
- El valor actual de la información de la app se llama estado **STATE**
- Un nuevo estado es creado, en base a la combinación del viejo estado y una acción por una función llamada **REDUCER**

[](./img/flujo.png)

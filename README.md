# **REDUX**

Es un patrón par el manejo de la información permite saber:

- el estado de la app
- cómo cambió la información
- quién cambió alguna variable
- cómo se encuentra determinada variable

### **Ideas principales**

- Toda la data de la app, se encuentra en una estructura previamente definida
- Toda la información se encuentra almacenada en un lugar llamado **STORE**
- El store **JAMAS**  se modifica de manera directa
- Las interacciones de usuario y/o código, disparan acciones que describen qué sucedió
- El valor actual de la información de la app se llama estado **STATE**
- Un nuevo estado es creado, en base a la combinación del viejo estado y una acción por una función llamada **REDUCER**

![](https://github.com/dafaak/redux/blob/main/img/flujo.png)

### **ACTION - REDUCER - STATE - STORE**

#### **ACTION**

Es la única fuente de información que se envía por interacciones de usuario o programa.

Por lo general se busca que las acciones sean lo más simples posibles.

Las acciones tienen únicamente 2 propiedades:

- **type** describe la acción a realizar.
- **payload** (opcional)  no siempre se debe enviar información para realizar una acción.

#### **REDUCER**

Es una función que recibe dos argumentos

- **oldState** es el estado actual de la app
- **action** es un objeto plano que indica que hay que hacer

```json
{
  "type": "COMPLETAR_TAREA",
  "index": 1
}
```

las acciones deben ser lo más simples posible.


#### **STATE**

**Reglas**
- El state es solo de lectura.
- No se muta el state de forma directa.
- Hay funciones prohibidas (PUSH, manipulación directa del oldState).


#### **STORE**
- Contiene el estado actual de la app
- Permite la lectura del estado via: **getState()**
- Permite crear un nuevo estado usando **dispatch(ACTION)**
- Permite notificar cambios de estado via **subscribe()**


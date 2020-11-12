# EjercicioTecnico

En el presente proyecto se muestra una solución al ejercicio técnico, donde los principales retos son el registro de usuarios y la conexion a una API externa.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación 🔧

_Para arrancar todos los procesos, funcionalidades y testeos, necesitaremos algunas librerias las cuales deben ser previamente instaladas, por esa razon comenzaremos usando los siguientes comandos para la instalacion de dichas librerias._

```
npm i
```

    o

```
npm install
```

Esto intalara las librerias que tenemos establecidad en el package.json de las cuales se detallan mas adelante.

## Despliegue 📦⚙️

_Aqui se tenemos el codigo que debemos ejecutar en la terminal para que la app arranque_

```
npm run dev
```

o

```
npm start
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- [MONGODB](https://www.mongodb.com/) - La base de datos no relacional con la cual esta armada el proyecto.
- [EXPRESS](https://expressjs.com/es/) - El servidor con el cual trabajaremos, con el cual esta armado las rutas y la aplicacion en si.
- [MONGOOSE](https://mongoosejs.com/) - Es el drive con el cual la aplicacion o mejor dicho el servidor se conectara con la base de datos (Nota importante este solo es un modulo de conexion mas no es la base de datos)
- [JSONWEBTOKEN](https://www.npmjs.com/package/jsonwebtoken) - Es la herramienta solicitada y aplicada para la creacion de los tokens.
- [BCRYPTJS](https://www.npmjs.com/package/bcryptjs) - Este modulo sirve para darle mas seguridad a los datos cifrandolos y manteniendo una seguridad un poco mas apropiada para el sistema de registro
- [MORGAN](https://www.npmjs.com/package/morgan) - Este es un modulo que nos permite hacerle un seguimientos a las acciones realizadas por ejemplo: GET, POST, PUT o DELETE, ademas de que esta asistencia solo se utilizara en el puerto deseado en esta oportunidad es usado en backend en el puerto "dev".
- [AXIOS](https://www.npmjs.com/package/axios) - Este modulo se utiliza para tener un elemente intermedio entre front y backend, aqui podemos llamar a rutas y ademas facilita algunos procesos que se pueden implementar con la misma.
- [NODEMON](https://www.npmjs.com/package/nodemon) - Es para monitorear cualquier cambio y reiniciar automaticamente el servidor.
- [DOTENV](https://www.npmjs.com/package/dotenv) - Es para mantener informacion segura la cual actualmente no podrar visualizar ya que fue limitada antes de subirla a github
- [NODEJS](https://nodejs.org/api/path.html) - Es un entorno en tiempo de ejecución multiplataforma, implementado y solicitado como requisito principal para este proyecto.
- [REACT](https://es.reactjs.org/) - Es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario, en esta oportunidad se veran la implementacion de hooks y manejo de estados segun lo que sea necesario.

## Autores ✒️

- **Carlos Azpurua** - _Trabajo Completo_ - [CarlosAzpurua](https://github.com/CarlosAzpurua)

## Expresiones de Gratitud 🎁

- Gracias por la oportunidad para poder desarrollar un proyecto como este el cual mas que un reto, es una oportunidad para aprender y crecer como profesional.

# webpack-babel-react
Repositorio base para proyectos con Webpack, Babel y React.

## Instalación
Basta con ejecutar la siguiente línea para instalar las dependencias.
```bash
npm install
```

## Ambiente de desarrollo
Para levantar el servidor de desarrollo tenemos que ejecutar:
```bash
npm start
``` 
Esto creará un servidor que escucha en el puerto 8080, para ver la aplicación deben abrir el explorador en la ruta http://localhost:8080/app.

## Ambiente de producción
Para crear los archivos de producción ejecutamos el siguiente comando:
```bash
npm run build
```
Lo cual genera 2 archivos en la ruta `app/`, `bundle.js` y `bundle.js.map`, los cuales se encuentran listos para subirlos a producción.
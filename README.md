# Consulta BD Asesoría Energética

Este repositorio contiene archivos HTML, JavaScript y CSS para una aplicación web de consulta de asesoría energética.

## Archivos

### consultas.html

Este archivo HTML contiene el código de la interfaz de usuario de la aplicación de consulta de asesoría energética. Utiliza Bootstrap para estilos y un formulario para ingresar criterios de búsqueda. Los resultados se muestran en forma de tarjetas y se visualizan gráficamente utilizando Chart.js.

### script.js

El archivo JavaScript maneja la lógica de búsqueda y visualización de resultados. Utiliza Fetch API para obtener datos del servidor y Chart.js para generar gráficos de polarArea que muestran el número de contratos por comercializadora.

### styles.css

Este archivo CSS define los estilos de la aplicación, incluido el diseño del contenedor, el color de fondo y la apariencia de los botones y los resultados.

## Funcionamiento

La aplicación permite buscar registros de asesoría energética por CIF, nombre, comercializadora y estado. Los resultados se muestran en tarjetas y se representan gráficamente en un gráfico de polarArea.

## Instrucciones de Uso

1. Clona este repositorio.
2. Abre el archivo `consultas.html` en un navegador web.
3. Ingresa los criterios de búsqueda en los campos proporcionados y haz clic en "Buscar".
4. Los resultados se mostrarán debajo del formulario y se visualizarán gráficamente en el gráfico.

## Dependencias

- [Bootstrap](https://getbootstrap.com/) v5.3.0
- [Chart.js](https://www.chartjs.org/) v3.7.0

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, crea una solicitud de extracción describiendo tus cambios.

## Licencia

El código se distribuye bajo una licencia de software libre que permite a cualquier persona utilizar, modificar y disfrutar del código de forma gratuita. Todos son bienvenidos a utilizarlo para sus proyectos, adaptarlo a sus necesidades y compartirlo con otros.


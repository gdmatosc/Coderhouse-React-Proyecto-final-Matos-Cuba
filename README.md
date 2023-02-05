# Proyecto compuwork
Proyecto final del curso de React de Coderhouse
## Descripción de diseño de negocio
El proyecto consiste en una tienda de productos tencológicos para computadoras denominado Compuwork.
Se tienen actualmente 6 productos clasificados en 3 categorías:
1. Periféricos: dispositivos que se conectan directamente a la PC o laptop
2. Comunicaciones: dispositivos para comunicaciones de red por cable o wifi
3. Eléctricos: dispositivos que permiten conexiones electricas, luz así como la estabilización de la corriente elétrica

## Flujo de compras
1. Al inicio se muestran directamente todos los productos
2. Se da click en el botón de "ver más" para ir a la pantalla de detalle del producto
3. Se puede aumentar o disminuir la cantidad de productos y se agrega al carrito con el botón agregar
4. Se puede acceder al carrito de compras por el botón que aparece en la parte inferior del card de la página de detalles de cada producto o mediante el ícono de carrito de compras
5. Para realizar la orden de compra se debe llenar los datos de compras que se encuentra debajo del resumen de producto del carrito
6. Luego se da click en el botón generar compra y aparecerá un mensaje que le mostrará su cpodigo de compra

Opcionalmente
- Si el usuario lo desea puede dar click en el botón registro en cualquier momento para que su nombre de usuario de la web pase de anónimo a su nombre, considerar que este registro no tiene relación con los datos de compra.

## Limitaciones técnicas
1. No se ha implementado el control de stock, solo se encuentra como atributo de bd para cada producto con un valor de 5 
2. No se ha implementado la eliminación por producto, solo se muestra el ícono X
3. No se ha implementado el resumen de la creación de orden de compra, solo se ha generado la página thank-you conteniendo el id del orden en la url con el mensaje gracias por su compra
4. No se ha implementado la lógica de repetir el email 2 veces, solo se ha desarrollado el control de ingreso de dígitos en todos los input
5. Netlify está mostrando su propio mensaje de page not found para rutas inexistentes, a pesar que la configuración local funciona con PageNotFound.jsx

## Librerias usadas
Se ha usado:
1. tailwind: reduce la cantidad de archivos de css y facilita su uso
2. vite: optimiza la ejecución de React y reduce sus vulnerabilidades
3. sweetalert
4. react-router
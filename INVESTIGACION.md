1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: CustomElements, Shadow DOM y HTMLTemplates?

RTA: permite tener la creacion en HTML pero con la particularidad de que funcione en todos los navegadores y framework

CustomElements: son APIs nativas de javascript 
ShadowDOM: es la creacion de unas capsulas ocultas en las cuales se genera el contenido en HTML pero sin afectar la pagina 
HTMLTemplates: es la utilizacion de codigo reutilizable con la etiqueta <template>

2. ¿En qué se diferencia un <template> de un <div> oculto con display: none ?
Piensa en qué se muestra, qué se ejecuta y qué encuentra document.querySelector .

RTA: una de las diferencias es que <template> son fragmentos de codigo y los <div> son del la pagina en si y solo se oculta visualmente

3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed" ?

RTA: en open se puede aceder desde fuera del componente y en close no

4. ¿Qué es un <slot> y para qué sirve en un componente reutilizable?

RTA: es un marcador de posicion en la plantilla HTML

5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de
consulta.

RTA: todos los navegadores actuales y webs y moviles

2 parte
Diferencias: 

RTA:  
Web Components: Reglas nativas que ya trae el navegador sin instalar nada. Ejemplo: La cocina básica que ya incluye el local como crear una etiqueta <tarjeta-plato> con JavaScript puro.

Librería React: Herramienta externa que llamas para resolver una parte específica de la interfaz visual. Ejemplo: Comprar solo una batidora industrial para agilizar las salsas, pero tú eliges el resto de utensilios.

Framework Angular: Estructura completa que impone las reglas, el orden y todas las herramientas desde el inicio. Ejemplo: Adquirir una franquicia con menú, uniformes y sistema de cobro ya estandarizados.

Entorno de ejecución Node.js: Programa que permite correr JavaScript fuera del navegador, directamente en el servidor. Ejemplo: El sistema eléctrico y administrativo del restaurante que procesa pedidos y bases de datos en la oficina, lejos de las mesas.

Cuadro comparativo:
| Criterio | Web Components nativos | React | Vue | Angular |
| :--- | :--- | :--- | :--- | :--- |
| **Tipo (estándar, librería o framework)** | Estándar nativo del navegador. | Librería de interfaz de usuario. | Framework progresivo. | Framework completo todo en uno. |
| **Cómo se crea un componente** | Clase `HTMLElement` + Shadow DOM + `customElements.define()`. | Funciones JS que retornan JSX. | Archivos `.vue` (`<template>`, `<script>`, `<style>`). | Clases TypeScript con decorador `@Component`. |
| **Necesita instalar herramientas (npm)** | No, corre nativo sin instalar nada. | Sí, requiere `npm` y compilador. | Opcional (CDN o `npm` para compilar). | Sí, obligatorio (`npm` y Angular CLI). |
| **Ventajas principales** | Portables entre frameworks y estilos encapsulados. | Gran ecosistema y alta flexibilidad. | Curva de aprendizaje suave y sintaxis clara. | Todo integrado (rutas, HTTP) y código estandarizado. |
| **Desventajas principales** | Más código repetitivo sin reactividad nativa. | Obliga a instalar librerías externas para rutas o estado. | Menor demanda empresarial frente a React/Angular. | Curva de aprendizaje alta y estructura rígida. |

¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue yAngular?
Si una tienda en línea usa React y Node.js, ¿qué hace cada uno?

RTA:

Node.js: Es un entorno de ejecución no un framework que permite correr JavaScript fuera del navegador, directamente en el servidor. Se usa para crear APIs, servidores y manejar múltiples peticiones sin bloquearse. 
Relación con npm: npm es el gestor de paquetes de Node.js que descarga e instala las dependencias y compiladores que React, Vue y Angular necesitan para funcionar.
Tienda en línea React + Node.js: React frontend dibuja la interfaz visual en el navegador catálogo, carrito y botones, mientras Node.js backend procesa los datos en el servidor inventario, pagos y registro de pedidos.

Caso de uso: 

RTA:
a. Un botón de chat que varias empresas pegan en sus propias páginas:
Usaría Web Components nativos. Al ser un estándar del navegador, cualquier empresa puede incrustar la etiqueta en su sitio sin importar si usa React, Angular o HTML puro, y el Shadow DOM garantiza que los estilos del botón no choquen con el diseño de la página anfitriona. Además, evita obligar a los clientes a descargar librerías pesadas externas.

b. Una aplicación web grande para un banco, con muchos equipos de desarrollo:
Usaría Angular. Al ser un framework completo y opinionado con TypeScript, impone una estructura de carpetas, reglas de arquitectura y herramientas integradas rutas, formularios, seguridad HTTP iguales para todos los equipos. Esto facilita el mantenimiento a largo plazo y evita que cada grupo programe de forma desordenada.
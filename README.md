# Actividad Evaluativa: Web Components, HTML Templates y Frameworks

## Integrantes
- **Integrante 1:** [Jesus Alberto Perez Uribe]'''''''
- **Integrante 2:** [Valentina Rojas Moratto]

## Caso Elegido (Parte 3 - Práctica)
**Plato del menú de un restaurante:** Se desarrolló un Web Component nativo llamado `<plato-menu>` que permite renderizar tarjetas reutilizables con el nombre del plato, su precio, su estado de disponibilidad (aplicando estilos dinámicos según esté disponible o agotado) y una descripción libre proyectada mediante un `<slot>`.

## Estructura del Repositorio
- `README.md`: Información general del equipo, arquitectura del componente, instrucciones de ejecución y declaración de uso de IA.
- `INVESTIGACION.md`: Respuestas a las Partes 1 y 2 sobre estándares nativos, frameworks, librerías y entorno de ejecución Node.js, incluyendo la tabla comparativa y las fuentes consultadas.
- `index.html`: Contiene la definición del `<template>` con sus estilos encapsulados y 3 instancias reutilizadas del componente `<plato-menu>` con datos distintos.
- `js/main.js`: Lógica del Custom Element (`class PlatoMenu extends HTMLElement`), creación del Shadow DOM en el `constructor()`, y clonación del template junto con la lectura de atributos en `connectedCallback()`.

## Cómo probar el componente
Al estar construido exclusivamente con estándares web nativos (HTML, CSS y JavaScript puro) sin dependencias ni servidores requeridos:
1. Clona o descarga este repositorio en tu equipo.
2. Abre el archivo `index.html` directamente en cualquier navegador web moderno (Chrome, Firefox, Edge o Safari) o utilizando la extensión **Live Server** en Visual Studio Code.
3. Abre las herramientas de desarrollador del navegador (`F12` > pestaña **Console**) para comprobar que no hay errores en ejecución y explora el árbol encapsulado `#shadow-root (open)` en la pestaña **Elements**.

## Declaración de uso de IA
En cumplimiento con las normas de la actividad, declaramos que se utilizó **Gemini** (IA de Google) como herramienta de apoyo para:
- Estructurar y comentar el código del Web Component en `index.html` y `js/main.js` siguiendo los requisitos técnicos (R1 a R5).
- Depurar el ciclo de vida del componente moviendo la lectura de atributos al método `connectedCallback()` para asegurar que el DOM estuviera listo antes de clonar el `<template>`.
- Redactar y actualizar la documentación del proyecto en este `README.md`.

**Comprensión y autoría:** Todo el código fue implementado, probado en el navegador y comprendido por ambos integrantes del equipo, verificando cómo el `<template>` permanece inerte hasta ser clonado dentro del Shadow DOM, cómo `connectedCallback()` garantiza la lectura correcta de los atributos mediante `getAttribute()` y cómo el `<slot>` proyecta contenido dinámico desde el DOM ligero.
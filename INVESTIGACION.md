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

RTA: 

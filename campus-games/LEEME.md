# Oxford Games — juegos originales de Campus

Entrega del 21/11/2026. Adaptación ligera a Oxford Games de Natalia.

## Qué contiene

Los cuatro juegos originales: Grammar Derby, Maletas locas, El detective Owen y Phrasal Regatta. Las tarjetas usan capturas de las ilustraciones originales. Solo se adapta el marco, los colores de controles y la preparación de partida; no se rediseñan ni se reimplementan los juegos.

Maletas conserva exactamente su pantalla de juego, maletas CSS 3D, arrastre, clic, vocabulario y corrección. También se conservan las mecánicas, imágenes, preguntas, selección de libro/unidad y multijugador de los otros juegos.

## Incorporación a la web de Natalia

1. Guarda Oxford_Juegos_Natalia.json e incorporar-juegos.mjs juntos, fuera de la carpeta pública del sitio.
2. Con Node.js 18 o posterior, ejecuta:

    node incorporar-juegos.mjs Oxford_Juegos_Natalia.json "RUTA_A_OXFORD_GAMES" --catalogue

3. Revisa los archivos creados en campus-games/ y la sección añadida al final del index.html. El importador guarda index.html.before-campus-games.bak antes de cambiar el catálogo. Omite --catalogue para añadir tú los enlaces.
4. Publica la carpeta campus-games/ y el index.html con el procedimiento habitual de GitHub Pages. No publiques el JSON o la copia .bak salvo que expresamente lo quieras.

No instala paquetes, no hace peticiones de red y no modifica ni elimina juegos existentes. Valida todas las huellas SHA-256 antes de escribir; repetir la misma importación es seguro. Rechaza sustituir archivos diferentes ya existentes.

## Arquitectura y requisitos

El JSON es un paquete de integración, no un motor independiente sin conexión. Incluye páginas HTML, CSS, JavaScript y portadas; carga los juegos originales desde https://oxford-revision.jairollarena.chatgpt.site en un iframe de pantalla completa. Necesita internet y la disponibilidad del servidor de Campus para las partidas y sus funciones actuales. Los futuros cambios del juego original se reflejan en esta integración.

El modo visual se activa con ?vista=oxford-games. No cambia la vista habitual de Campus. Solo esas cuatro rutas públicas permiten el iframe desde https://natalaplk.github.io. Las páginas de cuentas, cursos, exámenes y gestión conservan su protección. No se transfieren contraseñas, datos de alumnos ni resultados a Natalia mediante mensajes entre páginas.

Al abrir archivos localmente o desde otro dominio aparece una portada con el botón Open original game. La integración dentro de la página solo se activa en el origen autorizado de GitHub Pages. Si Natalia cambia de dominio, se debe actualizar de forma explícita tanto el origen permitido en Campus como shared/host.js.

El iframe delega fullscreen y conserva el botón del juego. Inicio y Juegos vuelven al catálogo de Natalia. Los accesos a perfiles abren Campus fuera del iframe. La integración ofrece los juegos DEMO y no crea un inicio de sesión compartido entre ambas webs. Los parámetros libro, unidad, nivel, repetir, sala, room y codigo se trasladan al juego, que sigue validándolos. También acepta los alias book y unit, que convierte a libro y unidad. No hay que copiar claves ni configurar cuentas.

## Conservación y comprobaciones

Se verificaron sin cambios 59 archivos protegidos de las mecánicas, ilustraciones y bancos originales. Consulta el informe de validación entregado para las pruebas de integración, móvil, escritorio, acciones reales y seguridad del importador. La publicación de estas páginas en la cuenta de Natalia queda a su cargo; esta entrega no escribe en su repositorio.

Los nombres de libros se utilizan para seleccionar contenido original de Oxford; esta integración no añade reproducciones de páginas o ilustraciones de las editoriales. Conserva las condiciones y procedencia de los recursos originales de Campus.

# Audita · práctica de Auditoría de Sistemas

Página en español, adaptable a PC y celular, construida a partir de los dos Markdown de esta carpeta. No necesita cuentas, dependencias ni servicios externos para funcionar.

## Abrir la página

En una PC, abre **index.html** con tu navegador. Para usar una dirección local estable o acceder desde tu celular, ejecuta desde esta carpeta:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

- PC: <http://localhost:8000>
- Celular: conecta ambos dispositivos a la misma red Wi-Fi y abre `http://IP_LOCAL_DE_TU_PC:8000`. Puedes consultar esa IP con `hostname -I` en Linux; normalmente comienza por `192.168.` o `10.`. Si la conexión está bloqueada, comprueba que el firewall permita el puerto 8000 en tu red local.
- Para detener el servidor, presiona `Ctrl+C` en la terminal donde lo iniciaste.

El servidor comparte el contenido de esta carpeta con los equipos que puedan acceder a ese puerto. La aplicación también funciona abriendo los archivos localmente, sin conexión. El guardado local al abrir con `file://` puede variar según el navegador; usar el servidor da un origen estable.

## Contenido

| Banco | Cantidad | Criterio |
| --- | ---: | --- |
| EP1 original | 30 | Enunciados, opciones, claves y sustentos del archivo proporcionado |
| Nuevas por dominio | 50 | 10 por cada uno de los cinco dominios, inspiradas en sus autoevaluaciones |
| Casos prácticos | 40 | 8 preguntas nuevas por cada uno de los cinco escenarios del manual |
| **Total** | **120** | Todas con seis opciones y entre dos y cinco respuestas correctas |

Los ejercicios nuevos son material de estudio original, no preguntas oficiales. El manual utiliza también preguntas de respuesta única y preguntas abiertas; las nuevas se adaptan al formato de selección múltiple del EP1. Cada pregunta indica su fuente temática y página impresa de referencia. Los casos originales contienen 8, 8, 4, 4 y 5 preguntas respectivamente; se amplían a ocho ejercicios nuevos por caso.

La pregunta 2 del EP1 no contiene una línea explícita de clave: se deduce A/B/C de su sustento. Se normalizaron el orden del enunciado de la pregunta 25 y las opciones de la 26. Se mantienen las claves del parcial, señalando matices en afirmaciones discutibles (p. ej., clasificación de datos, controles compensatorios y calidad).

## Formas de estudiar

- **Aprendizaje:** comprueba una combinación y consulta explicación, opciones omitidas y selecciones incorrectas. Una pregunta ya corregida queda bloqueada en esa sesión.
- **Simulacro:** configura contenido, cantidad y tiempo. Puedes cambiar selecciones hasta entregar; la corrección aparece al final. El reloj continúa al salir. Si vence con la página cerrada, se entrega al volver a abrirla.
- **Repaso de errores:** reúne preguntas cuyo último intento corregido fue incorrecto. Un nuevo acierto las retira del repaso.
- **Guardadas:** marca conceptos para volver después; disponibles desde el menú de PC y desde el banco en móvil.
- **Progreso:** intentos, aciertos, preguntas distintas practicadas y sesiones. Una pregunta se considera afianzada tras dos aciertos consecutivos.
- **Respaldo:** el botón «TÚ» permite exportar e importar un archivo JSON entre dispositivos. La importación y el borrado solicitan confirmación.

Un acierto exige la **combinación exacta**, sin puntuación parcial. En simulacros, las preguntas sin responder cuentan como incorrectas. En una práctica terminada anticipadamente, las preguntas no corregidas figuran como pendientes y no se añaden a los errores; el porcentaje de la sesión usa su total de preguntas. Los ejercicios nuevos mezclan las opciones; el EP1 conserva sus letras originales.

Los datos permanecen en el almacenamiento local del navegador; no hay sincronización automática entre dispositivos ni envío a servidores. Borrar los datos del navegador elimina el progreso salvo que tengas un respaldo. Distintos puertos, navegadores y direcciones pueden tener almacenamientos separados.

## Archivos

- `index.html`, `styles.css`, `app.js`: interfaz y comportamiento, sin frameworks.
- `data.js`: banco generado y listo para abrir sin `fetch` ni servidor obligatorio.
- `scripts/questions.txt`: 90 ejercicios originales editables. Campos separados por `~`; opciones por `|`; clave con letras A–F.
- `scripts/build_bank.py`: extrae el EP1, incorpora las preguntas nuevas y valida cantidades y estructura.
- `scripts/smoke.cjs`: pruebas de interacción en navegador (requieren Playwright).
- Los dos Markdown originales permanecen como material de referencia.

Para reconstruir el banco:

```bash
python3 scripts/build_bank.py
node --check app.js
node --check data.js
```

Para las pruebas de navegador, con el servidor en ejecución:

```bash
npm install --prefix /tmp/audita-test playwright --ignore-scripts
PLAYWRIGHT_BROWSERS_PATH=/tmp/audita-browsers /tmp/audita-test/node_modules/.bin/playwright install chromium
PLAYWRIGHT_BROWSERS_PATH=/tmp/audita-browsers NODE_PATH=/tmp/audita-test/node_modules node scripts/smoke.cjs
```

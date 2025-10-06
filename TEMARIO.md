## Que es el control de calidad✅
+ Que tan bien cumple con las necesidades y expectativas del cliente
+ Funcionalidad : hace lo que se espera que haga
+ Diseño: Intuitivo estetico facil de usar
+ Fiabilidad:Funciona de manera correcta en distintos contextos
+ Durabilidad: 
+ Precio: 
## Assurance✅
+ Nos da la confianza que el producto funciona correctamente
+ garantia -> Funciona correctamente
            -> No presenta problemas
## Software testing✅
+ Garantizar la calidad de un producto antes de que llegue a los usuarios finales
+ se centra en el proceso del desarrollo del sofware SDLC
+ Lograr eficiencia y efectividad segun las estandares del producto de sofware 
## How to do Quality Assurance: Complete Process(PDCA)
+ Plan: La organización debe planificar y establecer los objetivos relacionados con el proceso.
+ Do: desarrollar y testear los procesos y hacer cambios en el proceso
+ Check: Monitorizar los procesos, modificarlos y verificar si cumplen los objetivos predeterminados
+ Act: un QA debe implementar acciones que sean necesarias para lograr mejoras en los procesos.

## Quality Control
+ No aborda los procesos empleados para crear un producto, sino que examina la calidad de los productos finales y el resultado final.

## QA vs QC
+ QC consiste en examinar el producto o servicio y comprobar el resultado.
+ QA  para examinar los procesos y realizar cambios en los procesos que condujeron al producto final.
## QA funciones
+ Technology transfer: Esta función implica obtener un documento de diseño del producto, así como datos de prueba y error, y su evaluación. Los documentos se distribuyen, verifican y aprueban.
+ Validation: Aquí se elabora el plan maestro de validación para todo el sistema. Se aprueban los criterios de prueba para validar el producto y el proceso. Se planifican los recursos para la ejecución del plan de validación.
+ Documentation: Esta función controla la distribución y el archivo de documentos. Cualquier cambio en un documento se realiza mediante el procedimiento de control de cambios adecuado. Aprobación de todo tipo de documentos.
+ Asegurar la calidad de los productos
+ Planes de mejora de la calidad
## QA Mindset (Mentalidad de garantia de Calidad)✅
+ Los desarrolladores tienden a tener una mente orientada a las soluciones, mientras que los tester deben estar orientados a los problemas.
+ Necesitan ponerse el sombrero del usuario final y pensar en los posibles escenarios desde el punto de vista del usuario.
## Como desarrollar esta mentalidad? ✅
+ Comprender el negocio y al usaurio final
+ Adoptar estandares de calidad
+ Debemos hacer preguntas 
+ Ser proactivo 
+ Usar herramientas y metricas 
## White box testing - Pruebas de caja blanca✅
+ Enfoque de pruebas donde se prueba el codigo fuente

## Black Box testing - pruebas de caja negra ✅
+ Funcionalidad sin conocer el codigo fuente

## Gray Box Testing - Pruebas de caja gris✅
+ Acceso parcial al sistema
+ centradas en las entradas y salidas en algunos aspectos internos del sistema
Ejemplos. 
Inicio de sesion -> despues de 3 intentos se bloquea
Revisar la base de datos: Usuario Bloqueado hora de bloqueo: 12:00:12
## Test Oracles✅
+ Son fuentes de verdad que nos permiten determinar si los resultados son correctos o no. 
+ El oracle define cual debe ser el comportamiento. 

Ejemplo. 
Busqueda de OpenAI en google, el primer resultado debe ser un enlace que lleve a openai.com 
## ¿Qué es Test Prioritization?✅
+ Es una estrategia en la que asignas un orden a las pruebas
+ Un orden en funcion de su importancia, impacto, urgencia
+ Te ayuda  que los casos mas valiosos se ejecuten primero
## Objetivos principales de Test Prioritization✅
+ Ejecutar pruebas con mayor impacto
+ Detectar errores criticos 
+ Maximisar el valor de las pruebas

## Criterios para priorizar pruebas✅
+ Frecuencia de uso
+ Impacto del error
+ Probabilidad de fallo
+ Requisitos del cliente
+ Dependencias
Ejemplo: 
Probando la funcionalidad de google buscar
+ una barra de busqueda
+ resultados con enlaces y titulos
+ filtros como imagenes, videos, etc. 

Listar casos de prueba
+ probar buscar texto simple
+ probar filtro
+ probar resultados patrocinados
+ probar sugerencia de busqueda
+ probar casos de limite (textolargo)
## Functional Testing
+ La prueba funcional es un enfoque que se utiliza para verificar cada funcionalidad del software y que cada función cumpla con el requisito dado.
## UAT
+ Objetivos: 
1. Validar los requisitos
2. Simular un entorno real
3. Detectar los problemas 
4. Obtener aprobacion 

Caracteristicas
1. Centrado en el usaurio final
2. Basado en escenarios reales
3. Entornos separado

Ejemplo practico: 
Escenrio: Nueva funcionalidad de busqueda avanzada, te permite filtrar resultados por fecha tipo de contenido y ubicaion. 

Fase 1: Preparacion
Identificar usuarios: Estudiantes, investigadores, periodistas
Definir requisitos: 
- filtro de fecha 
- todo tipo de contenido
- ubicacion geografica 

Diseñar los casos de prueba: 
caso1: Realizar una busqeuda sin filtros -> Verficiar los resultados mas relevantes PASSED
caso2: aplicar filtro "ultima semana" -> Verificar que los resultados esten dentro rango PASSED
caso3: Combinar tipo: imagenes ubicacion: españa -> Verfiicar que los resultados esten dentro del rango de ubicacion y de tipo PASSED
caso4: Intentar busquedas invalidas Ej. caracteres especiales -> Verfiicar si maneja estos caracteres con un mensaje claro. FAILED

Fase2: Ejecucion de las pruebas
1. Preparar el entorno de prueabs
2. Ejecutar 
3. Recopilar el feedback 

Fase 3:  Resultados de UAT
resultado esperado: toda slas funciones cumplen con los requisitos 
el sistema responde rapidamente 

Errores encontrados: 
- Eel filtro de ubicacion no funciona correctamene
- Los resultados de la ultima seman incluyen articulos mas antiguos
- caso4: Intentar busquedas invalidas Ej. caracteres especiales -> Verfiicar si maneja estos caracteres con un mensaje claro. FAILED

Fase 4: Aprobacion
Una vez corregidos los errores y confirmada funcionalidad -> Luz verde al despliegue a produccion 
## Exploratory Testing
No conoces bien el sistema 
+ Sin guion No requiere casos de prueba 
+ Creatividad y analisis critico 
+ Adaptacion 
+ Documentacion posterior

demo:
- Explorar el funcionamiento de la barra de busqueda de google
Pruebas iniciales.

Prueba 1: Consulta valida en le buscador
resultado actual: el buscador devuelve resultados correctos al realizar consultas validas
resultado esperado: el buscador debe devolver los resultados correctos en el cuadro de busqueda
bug: 

prueba 2: prueba con entradas no validas
Resultado actual: el buscado devuelve resultados correctos al ingresar caracteres especiales

prueba 3: Interacciones con la interfaz
Resultado actual: las opciones de la interfaz estan funcionando correctamente

prueba 4: Problemas de conexion de internet
Resultado actual: responde bien cuando no tenemos conexion a internet

## Sanity Testing
El Sanity Testing es un tipo de prueba de software que se realiza después de una corrección de errores o cambios menores  en el codigo.

Características del Sanity Testing
+ Enfocado en funcionalidades específicas:
+ Rápido y no exhaustivo: 
+ Se realiza manualmente: 
+ Complemento del Regression Testing: 

Demo pruebas:

Pruebas básicas del autocompletado:
Paso 1: Escribe la palabra "clima" en la barra de búsqueda.
Resultado esperado: Se deben mostrar sugerencias relacionadas como "clima hoy", "clima en Madrid", etc.
Resultado obtenido: ✅ Las sugerencias aparecen correctamente.

Paso 2: Escribe un término incompleto como "tecnolog".
Resultado esperado: Se deben mostrar sugerencias como "tecnología", "tecnologías modernas", etc.
Resultado obtenido: ✅ Las sugerencias se generan adecuadamente.
## ¿Qué es Regression Testing?
verifica si los cambios recientes en el código (como correcciones de errores, actualizaciones o nuevas funcionalidades) no han afectado negativamente las partes ya existentes del sistema. 

Características del Regression Testing
+ Cobertura amplia: 
+ Reutilización de casos de prueba: 
+ Frecuente y automatizable: 
+ Foco en integridad: 

Funcionalidad: Realizar una búsqueda básica
Paso 1: Abre Google y escribe "noticias".
Resultado esperado: Aparecen resultados relevantes relacionados con "noticias".
Resultado obtenido: ✅ Los resultados aparecen correctamente.

Funcionalidad: Verificar el autocompletado
Paso 1: Escribe "clima" en la barra de búsqueda.
Resultado esperado: Aparecen sugerencias relacionadas con el término "clima".
Resultado obtenido: ✅ El autocompletado funciona como se espera.

Funcionalidad: Cambiar configuración de idioma
Paso 1: Cambia el idioma de la página a francés.
Paso 2: Escribe "météo" (clima en francés).
Resultado esperado: Aparecen sugerencias y resultados relevantes en francés.
Resultado obtenido: ✅ Los resultados y sugerencias aparecen correctamente en el idioma seleccionado.
## Smoke Testing 
una aplicación funcionan correctamente después de una nueva compilación o actualización.

Prueba 1: Verificar que la página se carga correctamente (el logo de Google y el cuadro de búsqueda están visibles).
Prueba 2: Verificar que se permite buscar por imagenes 
## Unit Testing
Los unit testing (pruebas unitarias) son un tipo de prueba de software que verifica de forma aislada si una unidad funcional específica de tu código 

Características principales:
Aisladas: 
Rápidas: 
Automatizadas: 

Ventajas:
Detectan errores 
Facilitan el mantenimiento y la refactorización.
Documentan el comportamiento esperado de las funciones.
## Non-functional Testing
+ Los atributos no funcionales del software, como el rendimiento, la usabilidad, la seguridad, la fiabilidad y la calidad, se evalúan mediante pruebas no funcionales. La calidad y el rendimiento del software pueden mejorarse con pruebas no funcionales.

## Load Testing 
Es un tipo de prueba de rendimiento que se realiza para determinar cómo una aplicación maneja una cantidad específica de usuarios

¿Por qué es importante el Load Testing?
Verificar el rendimiento bajo cargas esperadas.
Identificar cuellos de botella en la infraestructura.
Prevenir fallas durante picos de tráfico.
Asegurar la experiencia del usuario incluso con alta demanda.

Como realizar Load Testing
+ Identifica los escenarios www.wikipedia.org 
+ Define la carga esperada  | 20 


## Security Testing
El Security Testing o prueba de seguridad es un tipo de prueba de software diseñada para identificar vulnerabilidades, amenazas o riesgos en una aplicación o sistema.

Objetivo del Security Testing
+ Identificar vulnerabilidades:
+ Prevenir accesos no autorizados:
+ Proteger datos sensibles:
+ Asegurar la continuidad del sistema:
+ Cumplir con regulaciones:

Áreas clave del Security Testing
+ Confidencialidad:
+ Integridad:
+ Autenticación:
+ Autorización:
+ Disponibilidad:
+ No repudio:

Tipos de Security Testing
+ Vulnerability Scanning:
+ Penetration Testing (Pruebas de Penetración):
+ Ethical Hacking:
+ Risk Assessment:
+ Security Auditing:
+ Postura de Seguridad:

Herramientas comunes para Security Testing
+ OWASP ZAP (Zed Attack Proxy):
+ Burp Suite:
+ Nmap:
+ Metasploit:
+ Nikto:
+ Wireshark:

Cómo realizar Security Testing
1. Identificar objetivos
2. Analizar posibles amenazas
3. Configurar herramientas
4. Realizar pruebas manuales
5. Evaluar y mitigar riesgos

Demo OWASP ZAP


## ¿Qué es Accessibility Testing?
El Accessibility Testing o prueba de accesibilidad es un tipo de prueba de software diseñada para garantizar que una aplicación, sitio web o sistema sea accesible para todos los usuarios, incluidos aquellos con discapacidades físicas, visuales, auditivas, cognitivas o de otro tipo. Su objetivo es asegurar que las personas con diferentes capacidades puedan interactuar con el sistema sin barreras.

Cómo realizar Accessibility Testing
1. Analizar el alcance:
Identifica las áreas críticas de la aplicación (formularios, navegación, elementos multimedia).
Decide si la prueba será manual, automatizada o una combinación de ambas.

2. Realizar pruebas manuales:
Navega por la aplicación con un lector de pantalla.
Usa solo el teclado para interactuar con los elementos.
Evalúa los mensajes de error, botones y enlaces para garantizar que sean claros y accesibles.

3. Usar herramientas automatizadas:
Ejecuta un análisis de accesibilidad con herramientas como Wave o Axe para identificar problemas de accesibilidad básicos.

4. Validar colores y contraste:
Usa verificadores de contraste para garantizar que los colores sean legibles para personas con daltonismo o visión reducida.

5. Probar tecnologías de asistencia:
Asegúrate de que la aplicación funcione bien con lectores de pantalla y otras tecnologías de asistencia.

6. Generar reportes:
Documenta las vulnerabilidades encontradas y clasifícalas según su severidad (baja, media, alta, crítica).

7. Resolver problemas:
Trabaja con desarrolladores y diseñadores para solucionar los problemas encontrados.

## SDLC
+ Planificación: Se evalúan los términos del proyecto, se estiman costos, se crea un cronograma y se definen objetivos. 
+ Análisis de requisitos: Se definen y documentan los requerimientos del software, buscando la aprobación de los interesados. 
+ Diseño: Se modela la arquitectura, la interfaz de usuario (UI), la programación, la seguridad y otros aspectos técnicos, y se crea un prototipo para obtener una idea básica. 
+ Desarrollo (Codificación): Se escribe el código de la aplicación según los diseños establecidos. 
+ Pruebas: Se comprueba la funcionalidad, la seguridad y la estabilidad del software para detectar y corregir errores. 
+ Despliegue: Se pone la aplicación a disposición de los usuarios de forma manual o automatizada. 
+ Mantenimiento: Se resuelven los errores que pasaron desapercibidos, se realizan actualizaciones y se proporciona soporte continuo al software
## V MODEL
Se llama “V” porque su diagrama tiene forma de esa letra:
En el lado izquierdo de la V están las etapas de desarrollo (análisis, diseño, implementación).
En el lado derecho, las etapas de prueba (verificación y validación) que corresponden directamente a las fases del lado izquierdo.
En el centro o base, se realiza la codificación.
## warerfall model
Requisitos (Requirements)
Se recopilan y documentan todas las necesidades del cliente.
👉 Qué debe hacer el sistema.

Diseño del sistema (System Design)
Se crea la arquitectura del sistema y se definen las especificaciones técnicas.
👉 Cómo funcionará el sistema.

Implementación (Implementation / Coding)
Los programadores escriben el código según el diseño.
👉 Se construye el software.

Pruebas (Testing)
Se verifica y valida que el software cumpla con los requisitos.
👉 Se detectan y corrigen errores.

Despliegue (Deployment)
El sistema se entrega y se pone en funcionamiento.
👉 El cliente comienza a usarlo.

Mantenimiento (Maintenance)
Se corrigen fallos y se realizan mejoras a lo largo del tiempo.
👉 Se mantiene y actualiza el software.

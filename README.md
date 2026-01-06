# Portfolio SPA – Silvana Bertrand

Este repositorio contiene mi **portfolio personal** desarrollado como una **Single Page Application (SPA)** utilizando **HTML, CSS y JavaScript puro**, sin frameworks.

El objetivo del proyecto es presentar mi perfil profesional, proyectos y un medio de contacto de forma clara, liviana y totalmente funcional.

---

## Características principales

* **Single Page Application (SPA)**

  * Navegación sin recarga de página
  * Renderizado dinámico del contenido con JavaScript

* **Tecnologías utilizadas**

  * HTML5
  * CSS3
  * JavaScript 

* **Secciones del sitio**

  * Inicio / Presentación
  * Proyectos
  * Contacto

* **Formulario de contacto funcional**

  * Envío de mensajes mediante FormSubmit
  * Los mensajes llegan directamente a mi correo electrónico

* **Deploy en Netlify**

  * Sitio estático
  * Compatible con SPA gracias a configuración de redirecciones

---

## Estructura del proyecto

```
portfolio/
│── index.html
│── styles.css
│── script.js
│── _redirects
│
└── asset/
    └── img/
        ├── profile.png
        └── logo.jpg
```

---

## Funcionamiento de la SPA

* El archivo `index.html` contiene un único contenedor raíz (`#root`).
* Todo el contenido se genera dinámicamente desde `script.js`.
* La navegación se realiza mediante eventos JavaScript, sin recargar la página.
* El contenido principal se actualiza limpiando el DOM con:

---

## Formulario de contacto

El formulario utiliza el servicio FormSubmit:

* Método: `POST`
* No requiere backend propio
* Incluye:

  * Desactivación de captcha
  * Asunto personalizado
  * Formato de correo tipo tabla

---

## Ejecución en local

Para probar el proyecto de forma local:

```bash
npx serve
```
Luego abrir el navegador en la URL indicada por la terminal.

---

## Deploy en Netlify

El proyecto se encuentra preparado para Netlify como sitio estático:

* No requiere build
* Directorio de publicación: raíz del proyecto (`.`)
* Archivo `_redirects` incluido para soportar SPA:

```
/*    /index.html   200
```

---

## Sobre mí

**Silvana Bertrand**
Desarrolladora de Software Junior
Graduada en la Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones.

LinkedIn: [https://www.linkedin.com/in/silvana-bertrand-605438312/](https://www.linkedin.com/in/silvana-bertrand-605438312/)
GitHub: [https://github.com/bertrandsilvana](https://github.com/bertrandsilvana)
---
Este portfolio forma parte de mi proceso de aprendizaje y crecimiento profesional en desarrollo web.

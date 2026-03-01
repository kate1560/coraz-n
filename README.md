
# ❤️ Corazón que se dibuja

Una experiencia web romántica minimalista diseñada para ser compartida como detalle digital.

Este proyecto muestra un corazón que se dibuja suavemente en pantalla y revela un mensaje emocional al finalizar la animación.

#### Optimizado para:

✔ Celular
✔ Tablet
✔ Computador
✔ Carga rápida
✔ Experiencia táctil

## ✨ Características

* Animación SVG suave del corazón

* Aparición del mensaje con efecto emocional

* Diseño moderno tipo landing premium

* Glow romántico sutil

* Tipografía elegante

* Mobile-first

* Totalmente responsive

Código limpio y separado

## 📂 Estructura del proyecto
corazon-que-se-dibuja/
│
├── index.html
├── styles.css
└── app.js

## ✏️ Cómo editar el mensaje

Abre:

app.js

Busca esta sección:

const CONFIG = {
  kicker: "Te lo digo con el corazón…",
  title: "Eres mi lugar seguro.",
  body: "Gracias por existir y por hacer que todo tenga sentido.",
};

Y cambia el texto.

## ⏱️ Cambiar velocidad del corazón
Más lento o más rápido

En:

styles.css

Busca:

animation: draw 4.5s var(--ease) forwards;

Modifica el número:

Tiempo	Resultado
2s	rápido
4s	romántico
6s	cinematográfico

Luego ajusta también en:

app.js
drawDurationMs: 4500, 

## 🎨 Cambiar color del corazón

En:

styles.css

Busca:

--heart-1
--heart-2
--heart-3

Ejemplo:

--heart-1: #ff4d7d;
--heart-2: #ff7aa2;
--heart-3: #ffd1dc;

## 📱 Uso

Este proyecto está diseñado para ser:

Compartido como enlace

Enviado por WhatsApp

Usado como detalle digital

## 🚀 Demo

Disponible vía GitHub Pages:
 https://kate1560.github.io/coraz-n/


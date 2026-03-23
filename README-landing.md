# Landing Nutriologo - Template

**Demo:** https://demo-nutriologo.mauricioramos.tech

---

## Que es esto?

Este es un template de landing page profesional disenado especificamente para nutriologos, coaches de fitness y profesionales de la salud. Es una pagina web lista para usar que ayuda a convertir visitantes en clientes a traves de WhatsApp.

**Caracteristicas principales:**
- Diseno moderno y profesional optimizado para conversiones
- Totalmente responsivo (se ve bien en celular, tablet y computadora)
- Soporte bilingue (Espanol e Ingles)
- Boton flotante de WhatsApp siempre visible
- Secciones de transformaciones y testimonios
- Optimizado para SEO y redes sociales
- Compatible con PWA (se puede instalar como app)

---

## Stack tecnologico

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estructura semantica |
| TailwindCSS (CDN) | Estilos y diseno responsivo |
| JavaScript Vanilla | Interactividad sin dependencias |
| JSON | Sistema de traduccion i18n |

**Sin dependencias de npm** - Solo archivos estaticos, facil de hostear en cualquier servidor.

---

## Como personalizar para un cliente (5 pasos)

### Paso 1: Cambiar nombre y ciudad

Abre `index.html` y busca/reemplaza:
- `Carlos Lopez` → Nombre del cliente
- `Campeche` → Ciudad del cliente
- Actualiza el `<title>` y las meta descripciones

### Paso 2: Cambiar numero de WhatsApp

Abre `js/whatsapp.js` y cambia:
```javascript
const WA_NUMBER = '5219981234567'; // ← Pon el numero real aqui
```
**Formato:** Codigo de pais + numero sin espacios ni guiones (ej: 5219981234567)

### Paso 3: Reemplazar imagenes

Las imagenes estan en el `index.html`. Busca las URLs de Unsplash y reemplazalas por las fotos reales del cliente:
- **Hero (480x560px):** Foto principal del nutriologo
- **Sobre mi (440x520px):** Foto en consultorio o ambiente profesional
- **Transformaciones (240x300px):** 3 pares de fotos antes/despues

### Paso 4: Cambiar colores de marca

En `index.html`, busca la configuracion de Tailwind (linea ~91) y cambia los colores:
```javascript
brand: {
  600: '#16a34a', // ← Color principal (verde por defecto)
  // ... otros tonos
}
```

### Paso 5: Configurar redes sociales

En `index.html`, busca los links de Facebook, Instagram y TikTok y reemplaza:
```html
<a href="https://facebook.com/USUARIO-REAL">
<a href="https://instagram.com/USUARIO-REAL">
<a href="https://tiktok.com/@USUARIO-REAL">
```

**IMPORTANTE:** Quita el badge "DEMO" del header antes de publicar (busca el comentario `<!-- Badge DEMO -->`).

---

## Estructura del proyecto

```
landing-nutriologo/
├── index.html          # Pagina principal (todo el contenido)
├── manifest.json       # Configuracion PWA
├── robots.txt          # Configuracion para buscadores
├── sitemap.xml         # Mapa del sitio para SEO
├── css/
│   ├── styles.css      # Estilos personalizados
│   └── utilities.css   # Utilidades CSS adicionales
├── js/
│   ├── main.js         # Logica principal (menu, animaciones)
│   ├── whatsapp.js     # Configuracion de WhatsApp
│   └── i18n.js         # Sistema de traduccion
└── lang/
    ├── es.json         # Textos en Espanol
    └── en.json         # Textos en Ingles
```

---

## Deploy en Hostinger (paso a paso)

1. **Comprar hosting** en hostinger.com (plan Single Web Hosting es suficiente)

2. **Acceder al panel** de control (hPanel)

3. **Ir a Administrador de archivos** → `public_html`

4. **Subir todos los archivos** del proyecto:
   - Puedes arrastrar y soltar la carpeta completa
   - O usar el boton "Subir archivos"

5. **Verificar** que `index.html` este en la raiz de `public_html`

6. **Configurar dominio** (opcional):
   - Ve a "Dominios" → "Agregar dominio"
   - Sigue las instrucciones para conectar tu dominio

7. **Activar SSL** (HTTPS):
   - Ve a "SSL" → "Instalar SSL"
   - Selecciona el certificado gratuito

**Listo!** Tu sitio estara disponible en tu dominio.

---

## Creditos

- **Diseno y desarrollo:** Mauricio Ramos
- **Imagenes de muestra:** [Unsplash](https://unsplash.com)
- **Iconos:** SVG inline (sin dependencias externas)
- **Tipografias:** [Google Fonts](https://fonts.google.com) (Inter, Poppins)

---

## Soporte

Para soporte o personalizaciones adicionales, contacta a:
- Web: mauricioramos.tech
- Email: contacto@mauricioramos.tech

*Título:*Ecommerce Full-Stack Application
Descripción: Aplicación de comercio electrónico full-stack construida con Laravel (backend) y React/Vite (frontend), siguiendo una arquitectura API-first con separación clara entre capa de presentación y lógica de negocio.
Tecnologías usadas:
- Backend: Laravel (PHP 8+), Composer, Artisan, MySQL (implícito mediante migraciones)
- Frontend: React 18, Vite, ESLint, JavaScript
- Herramientas de desarrollo: Git, npm, PHPUnit, Laravel Pint
- Configuración: Variables de entorno (.env), scripts de desarrollo y producción
Características y fortalezas principales:
1. Arquitectura separada: Backend Laravel independiente del frontend React/Vite
2. Convenciones establecidas: Pautas de código definidas en AGENTS.md (nomenclatura, estilo, arquitectura)
3. Listo para testing: Soporte para pruebas unitarias/funcionales en backend (PHPUnit) y preparación para pruebas frontend
4. Optimización de desarrollo: HMR mediante Vite, servidor de desarrollo integrado (artisan serve + Vite)
5. Preparado para producción: Scripts de build para ambos extremos (npm run build, artisan optimize)
6. Calidad de código: Linting automático configurado (Laravel Pint para PHP, ESLint para JS)
7. Seguridad y buenas prácticas: Uso de FormRequest para validation, manejo apropiado de excepciones, estructura estándar de Laravel
El proyecto sigue las mejores prácticas de desarrollo web moderno con una base sólida para escalar y mantener. 

https://app.mauricioramos.tech
admin@techstore.com - password



Título: Landing Page Profesional
Descripción: Sistema de landing page universal para negocios de servicios profesionales (consultorías, despachos legales, contadores, coaches, agencias, etc.), diseñado para ser fácilmente desplegado y gestionado sin conocimientos técnicos avanzados.
Tecnologías usadas:
- PHP 8.0+ (enfoque puro sin frameworks)
- PDO para acceso a base de datos
- SQLite (demo/Hostinger) y MySQL (producción) con cambio automático
- TailwindCSS vía CDN para estilos
- Lucide Icons para iconografía
- JavaScript vanilla para interactividad
- Servidor web con soporte para .htaccess (Apache/Nginx)
Características y fortalezas principales:
- Optimizado para conversión: Sigue el modelo AIDA (Atención, Interés, Deseo, Acción)
- Contenido dinámico: Panel de administración para editar servicios, testimonios, FAQ y configuración de marca
- Multi-base de datos: Transparente entre SQLite (ideal para demos/Hostinger) y MySQL (entornos de producción)
- Formularios inteligentes: Contacto con validación, protección anti-spam (honeypot, rate limiting, CSRF)
- Agendamiento de citas: Sistema de slots de tiempo dinámicos con gestión de fechas bloqueadas
- Seguridad empresarial: Protección CSRF, prepared statements, sanitización total, Argon2ID para contraseñas, CSP headers
- Auto-gestión: Creación automática de tablas, generación de credenciales admin, logs de actividad y errores
- Despliegue sencillo: Sin dependencias externas complejas, configuración vía .env, compatibilidad con hosting compartido
- Personalización completa: Colores, textos, SEO y horarios modificables desde el admin sin tocar código
- Lista para producción: Incluye guías de despliegue para Apache y Nginx, checklist de seguridad y optimización
El proyecto destaca por su enfoque "plug-and-play" para profesionales que necesitan una presencia web efectiva sin sobrecarga técnica, manteniendo estándares de seguridad y rendimiento profesional.

https://demo-consultoria.mauricioramos.tech
admin - f3957e09e7cb8188


Título
Sistema de Gestión de Inventario SaaS
Descripción
Una aplicación web SaaS para gestionar inventario, productos, categorías y movimientos de stock, con funcionalidades de generación de reportes en PDF y CSV. El sistema permite a los usuarios controlar su inventario en tiempo real, registrar entradas y salidas de productos, y obtener informes detallados para toma de decisiones.
Tecnologías Utilizadas
- Backend: Laravel 12 (PHP framework)
- Frontend: Vite, TailwindCSS, Alpine.js
- Autenticación: Laravel Breeze
- Base de datos: Compatible con MySQL/SQLite (migraciones incluidas)
- Herramientas de desarrollo: Composer, NPM, PHPUnit
- Reportes: Laravel DomPDF para generación de PDF
Características y Fortalezas Principales
Funcionalidades Core
1. Gestión Completa de Productos
   - Creación, lectura, actualización y eliminación de productos
   - Asociación con categorías
   - Gestión de imágenes de productos
2. Control de Inventario
   - Registro de movimientos (entradas/salidas)
   - Actualización automática de stock
   - Historial de movimientos por producto
3. Reportes y Exportaciones
   - Generación de PDF para inventario actual
   - Generación de PDF para movimientos realizados
   - Exportación de productos a formato CSV
4. Gestión de Categorías
   - Organización jerárquica de productos
   - Operaciones CRUD optimizadas
5. Panel de Control
   - Dashboard con métricas clave del negocio
   - Visualización resumida de inventario y movimientos
Aspectos Técnicos Destacados
- Arquitectura MVC siguiendo convenciones de Laravel
- Rutas RESTful para recursos principales
- Middleware de autenticación para protección de rutas
- Componentes Blade reutilizables (formularios, botones, modales)
- Validación de formularios mediante Form Requests
- Configuración preparada para producción (scripts de setup completos)
- Entorno de desarrollo optimizado con comandos convenientes
El proyecto está listo para ser desplegado como una solución SaaS completa para gestión de inventario, con una base sólida para futuras extensiones y personalizaciones según las necesidades específicas del negocio.

https://saas-inventario.mauricioramos.tech
admin@admin.com - password
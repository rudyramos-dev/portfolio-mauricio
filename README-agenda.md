# AgendaPro - Sistema de Agenda de Citas

Sistema profesional de agenda de citas online construido con PHP puro, SQLite y TailwindCSS. Perfecto para consultorios médicos, salones de belleza, restaurantes, despachos legales y cualquier negocio que requiera gestión de citas.

## Características Principales

- **Wizard de Reserva de 3 Pasos** - Interfaz intuitiva para agendar citas
- **Calendario Interactivo** - Selección visual de fechas disponibles
- **Gestión de Servicios** - Configura múltiples servicios con precios y duraciones
- **Panel de Administración** - Dashboard completo para gestionar citas
- **Notificaciones por Email** - Confirmaciones automáticas de citas
- **Códigos de Confirmación** - Sistema de códigos únicos para cada cita
- **Responsive Design** - Funciona perfectamente en móviles y tablets
- **Base de Datos SQLite** - Sin necesidad de MySQL, todo en un archivo

## Stack Tecnológico

- **Backend:** PHP 8.x puro (sin frameworks)
- **Base de Datos:** SQLite 3
- **Frontend:** HTML5, CSS3, JavaScript Vanilla ES6+
- **Estilos:** TailwindCSS (via CDN)
- **Iconos:** Lucide Icons
- **Fuentes:** Google Fonts (DM Sans + Syne)

## Estructura del Proyecto

```
Citly/
├── index.php                    # Router principal
├── .htaccess                    # Configuración Apache
├── README.md                    # Este archivo
├── config/
│   └── config.php              # Configuración global
├── database/
│   ├── agenda.db               # Base de datos SQLite (auto-generada)
│   └── Database.php            # Clase de conexión PDO
├── app/
│   ├── Controllers/
│   │   ├── AppointmentController.php
│   │   ├── ServiceController.php
│   │   └── AdminController.php
│   ├── Models/
│   │   ├── Appointment.php
│   │   ├── Service.php
│   │   └── TimeSlot.php
│   └── Helpers/
│       ├── Response.php
│       ├── Validator.php
│       └── Mailer.php
├── public/
│   ├── css/
│   │   └── app.css
│   └── js/
│       ├── app.js
│       ├── calendar.js
│       └── admin.js
├── views/
│   ├── layout.php
│   ├── home.php
│   └── admin/
│       ├── dashboard.php
│       ├── appointments.php
│       └── services.php
└── logs/
    └── error.log               # Log de errores
```

## Instalación Local

### Requisitos Previos

- PHP 8.0 o superior
- Extensión SQLite3 habilitada
- Servidor web (Apache recomendado) o usar el servidor integrado de PHP

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd /ruta/donde/quieres/instalar
   ```

2. **Verificar permisos**
   ```bash
   chmod 755 database logs
   chmod 644 config/config.php
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   php -S localhost:8080
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:8080
   ```

5. **Acceder al panel de administración**
   ```
   URL: http://localhost:8080/admin
   Usuario: admin
   Contraseña: admin123
   ```

**IMPORTANTE:** La base de datos `agenda.db` se crea automáticamente en el primer acceso con datos de ejemplo.

## Configuración

### 1. Configuración Básica

Editar `config/config.php`:

```php
// Zona horaria
date_default_timezone_set('America/Mexico_City');

// Nombre de la aplicación
define('APP_NAME', 'AgendaPro');

// URL de la aplicación
define('APP_URL', 'http://localhost:8080');

// Intervalo de citas (minutos)
define('SLOT_INTERVAL_MINUTES', 30);

// Días adelante para agendar
define('DAYS_AHEAD', 30);
```

### 2. Credenciales de Administrador

**IMPORTANTE:** Cambiar las credenciales por defecto en producción:

```php
define('ADMIN_USER', 'tu_usuario');
define('ADMIN_PASSWORD', 'tu_contraseña_segura');
```

### 3. Configuración de Email

```php
define('MAIL_FROM', 'noreply@tudominio.com');
define('MAIL_FROM_NAME', 'Tu Negocio');
```

## Despliegue en Hostinger

### Requisitos

- Plan de hosting con PHP 8.0+ y soporte SQLite
- Acceso FTP o cPanel
- Dominio o subdominio configurado (ej: agenda.mauricioramos.tech)

### Pasos de Despliegue

1. **Subir archivos vía FTP**
   - Conectar a tu cuenta de Hostinger vía FTP
   - Subir todos los archivos a `public_html/` o carpeta del subdominio

2. **Configurar permisos**
   ```
   Carpeta database: 755
   Carpeta logs: 755
   Archivo .htaccess: 644
   ```

3. **Actualizar config.php**
   ```php
   define('APP_URL', 'https://agenda.mauricioramos.tech');
   define('DEBUG_MODE', false); // Importante en producción
   ```

4. **Verificar .htaccess**
   - Asegurarse que el archivo `.htaccess` esté en la raíz
   - Verificar que mod_rewrite esté habilitado

5. **Configurar Subdominio en Hostinger**
   - Panel de Hostinger → Dominios → Subdominios
   - Crear subdominio: `agenda.mauricioramos.tech`
   - Apuntar a la carpeta donde subiste los archivos

6. **Probar la instalación**
   - Visitar: `https://agenda.mauricioramos.tech`
   - Verificar que carga la página principal
   - Acceder al admin: `https://agenda.mauricioramos.tech/admin`

### Configuración SSL (HTTPS)

Hostinger proporciona SSL gratuito:
1. Panel → SSL → Instalar SSL
2. Esperar 5-10 minutos a la activación
3. Forzar HTTPS en .htaccess:

```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

## Personalización para Clientes

### 1. Cambiar Nombre y Branding

`config/config.php`:
```php
define('APP_NAME', 'Consultorio Dr. García');
```

### 2. Gestionar Servicios

Desde el panel admin:
1. Ir a `/admin/services`
2. Crear/editar servicios
3. Configurar: nombre, descripción, duración, precio, color

### 3. Configurar Horarios de Atención

La configuración de horarios se realiza directamente en la base de datos SQLite. Por defecto incluye:
- Lunes a Viernes: 9:00 AM - 6:00 PM

Para modificar horarios, usa un cliente SQLite o edita la función `seedData()` en `database/Database.php`.

### 4. Personalizar Colores

`public/css/app.css`:
```css
:root {
    --primary-500: #3b82f6; /* Color principal */
    --primary-600: #2563eb; /* Color hover */
}
```

### 5. Logo Personalizado

Reemplazar el logo en `views/layout.php`:
```html
<div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
    <img src="/public/assets/logo.png" alt="Logo">
</div>
```

## Uso del Sistema

### Para Clientes (Página Pública)

1. **Seleccionar Servicio** - Elegir el servicio deseado
2. **Seleccionar Fecha y Hora** - Usar el calendario interactivo
3. **Ingresar Datos** - Completar información personal
4. **Confirmar** - Recibir código de confirmación por email

### Para Administradores

**Dashboard:**
- Ver estadísticas generales
- Visualizar próximas citas

**Gestión de Citas:**
- Ver todas las citas
- Filtrar por estado, fecha
- Confirmar/cancelar citas

**Gestión de Servicios:**
- Crear nuevos servicios
- Editar servicios existentes
- Activar/desactivar servicios

## API REST

### Endpoints Públicos

```
GET  /api/services
     Obtener lista de servicios activos

GET  /api/slots?date=YYYY-MM-DD&service_id=X
     Obtener horarios disponibles

POST /api/appointments
     Crear nueva cita
     Body: { service_id, client_name, client_email, client_phone, 
             appointment_date, appointment_time, notes }

GET  /api/appointments/{code}
     Consultar cita por código de confirmación

DELETE /api/appointments/{code}
       Cancelar cita
```

### Endpoints Admin (requiere autenticación)

```
GET  /admin
     Dashboard principal

GET  /admin/appointments
     Lista de citas

POST /admin/appointments/{id}/confirm
     Confirmar cita

POST /admin/appointments/{id}/cancel
     Cancelar cita

GET  /admin/services
     Lista de servicios

POST /admin/services
     Crear servicio

PUT  /admin/services/{id}
     Actualizar servicio
```

## Solución de Problemas

### Error: "Call to undefined function sqlite_open"

**Solución:** Habilitar la extensión SQLite en PHP
```bash
# En php.ini, descomentar:
extension=sqlite3
```

### Error 500 en producción

**Solución:** Verificar permisos y logs
```bash
chmod 755 database logs
tail -f logs/error.log
```

### Las URLs no funcionan (404)

**Solución:** Verificar mod_rewrite
```bash
# En .htaccess debe estar:
RewriteEngine On
```

### Los emails no se envían

**Solución:** Configurar PHP mail() o usar SMTP
- Verificar que el servidor soporte mail()
- Revisar spam/correo no deseado
- Considerar usar PHPMailer para SMTP

## Seguridad

### Checklist de Producción

- [ ] Cambiar credenciales de admin
- [ ] Establecer `DEBUG_MODE` a `false`
- [ ] Configurar HTTPS
- [ ] Restringir acceso a /database/ y /logs/
- [ ] Revisar permisos de archivos
- [ ] Hacer backup regular de agenda.db
- [ ] Actualizar PHP a última versión estable

## Backup y Mantenimiento

### Hacer Backup

```bash
# Backup de la base de datos
cp database/agenda.db backups/agenda_$(date +%Y%m%d).db

# Backup completo
tar -czf backup_$(date +%Y%m%d).tar.gz .
```

### Restaurar Backup

```bash
cp backups/agenda_20240101.db database/agenda.db
chmod 644 database/agenda.db
```

## Soporte y Contacto

Para soporte técnico o consultas sobre personalización:
- Email: mauricio@mauricioramos.tech
- Demo: https://agenda.mauricioramos.tech

## Licencia

Este proyecto es un demo de portafolio. Todos los derechos reservados.

---

**Desarrollado con ❤️ por Mauricio Ramos**

Sistema construido siguiendo las mejores prácticas:
- Arquitectura MVC
- Principios SOLID
- Código limpio y mantenible
- Sin frameworks pesados
- Optimizado para rendimiento

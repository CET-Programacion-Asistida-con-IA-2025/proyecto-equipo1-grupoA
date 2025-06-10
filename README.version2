# 🧠 MentalCare - Plataforma de Apoyo en Salud Mental y Discapacidades

[![Estado del Proyecto](https://img.shields.io/badge/estado-en%20desarrollo-yellow.svg)](https://github.com/tu-usuario/mentalcare)
[![Licencia](https://img.shields.io/badge/licencia-MIT-blue.svg)](LICENSE)
[![Contribuciones](https://img.shields.io/badge/contribuciones-bienvenidas-brightgreen.svg)](CONTRIBUTING.md)
[![Accesibilidad](https://img.shields.io/badge/accesibilidad-WCAG%202.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

## 📋 Descripción

MentalCare es una plataforma web diseñada para brindar apoyo, recursos y herramientas a personas que enfrentan desafíos de salud mental y discapacidades. Nuestro objetivo es crear un espacio seguro, inclusivo y accesible donde las personas puedan encontrar información confiable, conectar con profesionales y acceder a recursos de autoayuda.

## 🎯 Objetivos del Proyecto

- **Democratizar el acceso** a recursos de salud mental
- **Eliminar el estigma** asociado con los problemas de salud mental y discapacidades
- **Proporcionar herramientas** de autoayuda y seguimiento personal
- **Conectar usuarios** con profesionales de la salud mental
- **Crear una comunidad** de apoyo mutuo
- **Garantizar la accesibilidad** para personas con diferentes capacidades

## 🌟 Características Principales

### Para Usuarios
- 🔐 **Registro seguro y anónimo** - Protección total de la privacidad
- 📊 **Seguimiento del estado de ánimo** - Herramientas de autoevaluación
- 📚 **Biblioteca de recursos** - Artículos, videos y materiales educativos
- 🗣️ **Foros de apoyo** - Comunidad moderada y segura
- 🎯 **Planes de bienestar personalizados** - Rutinas adaptadas a cada usuario
- 📱 **Aplicación móvil accesible** - Diseño inclusivo y responsive
- 🚨 **Recursos de crisis** - Líneas de ayuda y contactos de emergencia

### Para Profesionales
- 👨‍⚕️ **Portal de profesionales** - Registro y verificación de credenciales
- 📅 **Sistema de citas** - Calendario integrado y gestión de consultas
- 📈 **Panel de seguimiento** - Herramientas para monitorear el progreso
- 💬 **Chat seguro** - Comunicación encriptada con pacientes

### Accesibilidad
- ♿ **Cumplimiento WCAG 2.1 AA** - Estándares internacionales de accesibilidad
- 🔤 **Soporte de lectores de pantalla** - Compatible con NVDA, JAWS, VoiceOver
- ⌨️ **Navegación por teclado** - Funcionalidad completa sin mouse
- 🎨 **Alto contraste** - Opciones visuales para diferentes necesidades
- 📱 **Diseño responsive** - Adaptado a diferentes dispositivos y tamaños

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de diseño accesible
- **React Hook Form** - Gestión de formularios accesibles
- **Framer Motion** - Animaciones suaves y accesibles

### Backend
- **Node.js** - Entorno de ejecución del servidor
- **Express.js** - Framework web minimalista
- **PostgreSQL** - Base de datos relacional
- **Prisma** - ORM moderno para TypeScript
- **JWT** - Autenticación segura

### Herramientas de Desarrollo
- **ESLint** - Linting con reglas de accesibilidad
- **Prettier** - Formateo de código consistente
- **Jest** - Testing unitario y de integración
- **Cypress** - Testing end-to-end con soporte de accesibilidad
- **Docker** - Containerización para desarrollo y producción

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18 o superior
- PostgreSQL 14 o superior
- Git

### Configuración Local

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/mentalcare.git
cd mentalcare
```

2. **Instalar dependencias**
```bash
# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

3. **Configurar variables de entorno**
```bash
# En la carpeta backend, copiar el archivo de ejemplo
cp .env.example .env

# Editar las variables necesarias
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/mentalcare"
JWT_SECRET="tu-secreto-super-seguro"
PORT=3001
```

4. **Configurar la base de datos**
```bash
cd backend
npx prisma generate
npx prisma db push
npx prisma db seed
```

5. **Iniciar el proyecto**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 🧪 Testing

### Ejecutar Tests
```bash
# Tests unitarios
npm run test

# Tests de integración
npm run test:integration

# Tests de accesibilidad
npm run test:a11y

# Coverage completo
npm run test:coverage
```

### Testing de Accesibilidad
Utilizamos herramientas especializadas para garantizar la accesibilidad:
- **axe-core** - Análisis automático de accesibilidad
- **Pa11y** - Testing de línea de comandos
- **Lighthouse** - Auditorías de rendimiento y accesibilidad

## 📁 Estructura del Proyecto

```
mentalcare/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── prisma/
│   └── tests/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   └── tests/
├── docs/
├── docker/
└── scripts/
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Este proyecto está comprometido con crear un ambiente inclusivo para todos los colaboradores.

### Cómo Contribuir

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Pautas de Contribución

- Seguir las pautas de accesibilidad WCAG 2.1 AA
- Escribir tests para nuevas funcionalidades
- Mantener la documentación actualizada
- Usar commits semánticos
- Respetar el código de conducta del proyecto

### Áreas donde Necesitamos Ayuda

- 🎨 **Diseño UX/UI** - Mejoras en accesibilidad y usabilidad
- 🔧 **Desarrollo** - Nuevas características y corrección de bugs
- 📝 **Documentación** - Guías de usuario y documentación técnica
- 🌍 **Traducción** - Internacionalización del proyecto
- 🧪 **Testing** - Pruebas de accesibilidad y usabilidad
- 👥 **Moderación** - Apoyo en la gestión de la comunidad

## 📞 Recursos de Crisis

**⚠️ Si estás en crisis o necesitas ayuda inmediata:**

### Argentina
- **Centro de Asistencia al Suicida**: 135 (gratuito, 24hs)
- **Línea de Prevención del Suicidio**: (011) 5275-1135
- **Hospital de Emergencias Psiquiátricas**: 4305-6549

### Internacional
- **Línea Nacional de Prevención del Suicidio (EE.UU.)**: 988
- **Samaritanos (Reino Unido)**: 116 123
- **Teléfono de la Esperanza (España)**: 717 003 717

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- A todos los profesionales de salud mental que brindan su tiempo y experiencia
- A las organizaciones que luchan contra el estigma de la salud mental
- A la comunidad de desarrolladores que priorizan la accesibilidad
- A todos los usuarios que comparten sus experiencias para mejorar la plataforma

## 📬 Contacto

- **Email**: info@mentalcare.org
- **Website**: https://mentalcare.org
- **Twitter**: @MentalCareApp
- **Discord**: [Únete a nuestra comunidad](https://discord.gg/mentalcare)

---

<p align="center">
  <strong>💙 Construido con amor y compromiso hacia la salud mental inclusiva 💙</strong>
</p>

<p align="center">
  <i>"La salud mental no es un destino, sino un proceso. No se trata de dónde has estado, sino de dónde estás y hacia dónde te diriges."</i>
</p>


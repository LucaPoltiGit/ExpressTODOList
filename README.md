# Express TODO List Backend

Backend desarrollado con Node.js, Express y MongoDB Atlas.  
Incluye autenticación con JWT, roles de usuario y administrador, y CRUD de tareas.  
Este proyecto forma parte de mi portfolio y está publicado en GitHub:  
[ExpressTODOList](https://github.com/LucaPoltiGit/ExpressTODOList.git)

---

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT (Json Web Token)
- Bcrypt (hash de contraseñas)
- Dotenv (manejo de variables de entorno)
- Nodemon (entorno de desarrollo)

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/LucaPoltiGit/ExpressTODOList.git
cd ExpressTODOList

# Instalar dependencias
npm install

# Configurar variables de entorno en .env
PORT=4000
MONGO_URI=<tu-uri-de-mongo-atlas>
JWT_SECRET=<clave-secreta>
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=supersegura123

# Iniciar servidor en modo desarrollo
npm run dev

```
## Endpoints principales

### Auth
- POST `/auth/register` → Registrar usuario (role siempre "user")
- POST `/auth/login` → Iniciar sesión y obtener token
- GET `/auth/profile` → Ver perfil del usuario logueado (requiere token)

### Tasks (requiere token)
- GET `/tasks` → Ver todas las tareas del usuario
- GET `/tasks/:id` → Ver tarea por id
- POST `/tasks` → Crear tarea
- PUT `/tasks/:id` → Actualizar tarea
- DELETE `/tasks/:id` → Eliminar tarea

### Admin (requiere token de admin)
- GET `/admin/users` → Ver todos los usuarios
- GET `/admin/tasks` → Ver todas las tareas
- POST `/admin/create-admin` → Crear nuevo admin

---

## Roles y permisos
- User: puede registrar, iniciar sesión y manejar solo sus propias tareas.
- Admin: se crea automáticamente al iniciar el servidor (con email y password definidos en `.env`).
  - Puede ver todos los usuarios.
  - Puede ver todas las tareas.
  - Puede crear otros usuarios admin.
  - Los usuarios creados desde `/auth/register` siempre son user.

---
```bash
## Estructura del proyecto

src/
 ├── config/          # Configuración DB y creación automática de admin
 ├── constants/       # enums 
 ├── controllers/     # Controladores (Auth, Task, Admin)
 ├── middleware/      # Middlewares (auth, admin)
 ├── models/          # Modelos Mongoose (User, Task)
 ├── routes/          # Rutas específicas y globales
 ├── services/        # Lógica de negocio (Auth, Task, Admin)
 └── index.js         # Punto de entrada del servidor
```


## Funcionalidades
- Autenticación con JWT.
- Roles: user y admin.
- CRUD de tareas con restricción por usuario.
- Admin inicial creado automáticamente desde `.env`.
- Admin puede ver todos los usuarios y tareas, y crear otros admins.
- Ocultar campos internos en respuestas (`__v`, timestamps).
- Estructura separada en model → service → controller → route específica → route → index.

---

## Autor
Luca Polti
linkedin: https://www.linkedin.com/in/luca-polti/
Github: https://github.com/LucaPoltiGit

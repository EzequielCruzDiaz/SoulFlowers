# 🌸 Soulflower — Proyecto Final

Landing page full-stack construida con **Next.js + TypeScript + Tailwind + Express + MongoDB**.

## 📁 Estructura del monorepo

```
proyecto-final/
├── apps/
│   ├── client/          # Next.js 14 (App Router) + TypeScript + Tailwind
│   └── server/          # Express + TypeScript + MongoDB + JWT
├── docs/
│   └── TASKS.md         # Guía de tareas para el equipo
├── package.json         # Raíz del monorepo (workspaces)
└── README.md
```

## 🚀 Cómo levantar el proyecto

### Requisitos
- Node.js 18 o superior
- npm 9 o superior
- Cuenta en MongoDB Atlas (gratuita)

### Pasos

```bash
# 1. Clonar y entrar al proyecto
git clone <url-del-repo>
cd proyecto-final

# 2. Instalar todas las dependencias
npm install

# 3. Configurar variables de entorno
cp apps/client/.env.example apps/client/.env.local
cp apps/server/.env.example apps/server/.env
# → Llenar los valores en ambos archivos

# 4. (Opcional) Poblar la base de datos con datos de prueba
npm run seed --workspace=apps/server

# 5. Levantar frontend y backend simultáneamente
npm run dev
```

- **Frontend** → http://localhost:3000
- **Backend**  → http://localhost:4000

## 🧱 Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | Express.js, TypeScript |
| Base de datos | MongoDB Atlas (Mongoose) |
| Autenticación | JWT + bcryptjs |
| API externa | OpenWeatherMap |
| Deploy (frontend) | Vercel |
| Deploy (backend) | Render / Railway |

## 🔑 Variables de entorno

### `apps/client/.env.local`
```
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_OPENWEATHER_KEY=   # opcional si usas el proxy del backend
```

### `apps/server/.env`
```
PORT=4000
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=secreto_min_32_chars
OPENWEATHER_API_KEY=tu_api_key
```

## 📋 Tareas del equipo

Ver [`docs/TASKS.md`](./docs/TASKS.md) para la guía completa de tareas dividida por perfil y fase.

## 🌐 Endpoints de la API

| Método | Ruta | Descripción | Auth |
|--------|------|-------------|------|
| POST | /api/auth/register | Registrar usuario | — |
| POST | /api/auth/login | Iniciar sesión | — |
| GET | /api/auth/me | Perfil del usuario | JWT |
| GET | /api/products | Listar productos | — |
| POST | /api/products | Crear producto | Admin |
| PATCH | /api/products/:id | Actualizar producto | Admin |
| DELETE | /api/products/:id | Desactivar producto | Admin |
| POST | /api/contact | Enviar mensaje | — |
| GET | /api/contact | Listar mensajes | Admin |
| GET | /api/weather?city= | Clima por ciudad | — |
| GET | /api/health | Estado del servidor | — |

## 👥 Equipo

- **Dev A** (con experiencia) — configuración, backend, integraciones
- **Dev B** (novato aprendiendo) — componentes UI, exploración del código

---
*Construido con 🤓 como proyecto integrador — Labs 2 al 7*

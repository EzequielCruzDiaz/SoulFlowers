# 📋 TASKS — Proyecto Final: Flores del Alma

> Guía de tareas colaborativa para 2 personas.  
> **Dev A** = desarrollador con experiencia  
> **Dev B** = desarrollador novato (aprendiendo con este proyecto)  
> Cada tarea tiene un nivel de dificultad: 🟢 Fácil · 🟡 Medio · 🔴 Difícil

---

## 🚀 FASE 1 — Configuración del entorno

### Dev A (con experiencia)
- [ ] 🔴 **A-01** — Crear el repositorio en GitHub, configurar `main` + rama `develop`. Invitar al compañero como colaborador.
- [ ] 🔴 **A-02** — Verificar que el monorepo levanta correctamente: `npm install` en raíz, luego `npm run dev:client` y `npm run dev:server`.
- [ ] 🔴 **A-03** — Crear cuenta en MongoDB Atlas, crear cluster M0 (gratuito), crear usuario de BD y copiar el `MONGODB_URI` al archivo `.env` del server.
- [ ] 🟡 **A-04** — Configurar variables de entorno: copiar `apps/server/.env.example` → `.env` y llenar los valores reales.
- [ ] 🟡 **A-05** — Ejecutar el seed de la base de datos: `npm run seed --workspace=apps/server`. Verificar en Atlas que aparecen los productos.

### Dev B (novato)
- [ ] 🟢 **B-01** — Instalar Node.js LTS desde https://nodejs.org y verificar con `node -v` y `npm -v` en la terminal.
- [ ] 🟢 **B-02** — Clonar el repositorio en tu máquina: `git clone <url-del-repo>` y luego `npm install` en la raíz.
- [ ] 🟢 **B-03** — Instalar la extensión "Live Server" y "Tailwind CSS IntelliSense" en VS Code.
- [ ] 🟢 **B-04** — Copiar `apps/client/.env.example` → `.env.local` en `apps/client/`. No llenar el API key todavía.
- [ ] 🟢 **B-05** — Abrir el proyecto en el navegador con `npm run dev:client` y comprobar que carga en http://localhost:3000.

> 💡 **Concepto para Dev B — ¿Qué es un monorepo?**  
> Un monorepo es una carpeta única que contiene múltiples proyectos (frontend y backend) que comparten configuración. Es como tener dos aplicaciones viviendo bajo el mismo techo. `apps/client` es la web y `apps/server` es el servidor.

---

## 🎨 FASE 2 — Componentes UI del Frontend

### Dev B (novato) — Empieza con estos
- [ ] 🟢 **B-06** — Revisar el componente `Hero.tsx`. Cambiar el título y el subtítulo por texto de tu elección. Guardar y ver el cambio en el navegador en tiempo real.
- [ ] 🟢 **B-07** — En `Benefits.tsx`, agregar un 7° beneficio al array `BENEFITS`. Debe tener `icon`, `title` y `description`.
- [ ] 🟢 **B-08** — En `Catalog.tsx`, añadir un nuevo producto al array `PRODUCTS` con los campos: `id`, `name`, `price`, `emoji`, `badge`.
- [ ] 🟡 **B-09** — Crear un nuevo componente `ui/Badge.tsx` que reciba una prop `label: string` y renderice un span con clases de Tailwind de colores. Usarlo en `Catalog.tsx`.
- [ ] 🟡 **B-10** — En `FAQ.tsx`, agregar 2 nuevas preguntas al array `FAQS`. Probar que el acordeón funciona correctamente.
- [ ] 🟡 **B-11** — En `Testimonials.tsx`, agregar un 4° testimonio. Luego cambiar el layout de `grid-cols-3` a `grid-cols-2` en desktop + 1 en móvil. *(Pista: clases Tailwind: `grid-cols-1 md:grid-cols-2`)*.

> 💡 **Concepto para Dev B — ¿Qué son las props en React?**  
> Las props son los "parámetros" que le pasas a un componente. Es cómo los componentes reciben información del exterior. Ejemplo: `<Badge label="Nuevo" />` pasa el texto "Nuevo" al componente Badge.

### Dev A (con experiencia)
- [ ] 🔴 **A-06** — Crear la página `/admin` en `apps/client/src/app/admin/page.tsx` con una tabla que liste los productos cargados desde la API del backend (`GET /api/products`).
- [ ] 🔴 **A-07** — Implementar `ProtectedRoute` en Next.js usando middleware o verificación de JWT en el cliente para proteger la ruta `/admin`.
- [ ] 🟡 **A-08** — Crear el hook `useProducts.ts` en `src/hooks/` que encapsule el fetch a `GET /api/products` y retorne `{ products, loading, error }`.

---

## 🌐 FASE 3 — Integración con API de Clima (Lab 7)

### Dev B (novato)
- [ ] 🟢 **B-12** — Ir a https://openweathermap.org, crear una cuenta gratuita y obtener tu API Key. Guardarla en `apps/client/.env.local` como `NEXT_PUBLIC_OPENWEATHER_KEY`.
- [ ] 🟡 **B-13** — Abrir `WeatherWidget.tsx`. Buscar "Santo Domingo" en el widget del sitio. Verificar que muestra temperatura, humedad y viento.
- [ ] 🟡 **B-14** — Agregar un 4° dato al resultado del clima: **presión** (`data.main.pressure` en hPa). Crear un nuevo cuadro en la grilla de 4 columnas.
- [ ] 🟡 **B-15** — Agregar `localStorage` para recordar la última ciudad buscada: al cargar el widget, pre-llenar el input con la ciudad guardada.

> 💡 **Concepto para Dev B — ¿Qué es una API?**  
> Una API (Application Programming Interface) es un servicio externo al que le haces preguntas y te responde con datos. OpenWeatherMap es como un "oráculo del clima": le preguntas por una ciudad y te responde con temperatura, viento, etc. Tú no manejas esos datos, solo los consumes.

### Dev A (con experiencia)
- [ ] 🔴 **A-09** — Mover la API key de clima al backend. En `apps/server/src/routes/weather.ts` ya existe el proxy. Actualizar `WeatherWidget.tsx` para llamar a `/api/weather?city=...` en lugar de OpenWeatherMap directamente.
- [ ] 🟡 **A-10** — Agregar caché simple en el servidor: guardar la respuesta del clima en memoria (un `Map`) por 10 minutos para no exceder el rate limit de la API gratuita.

---

## 🔐 FASE 4 — Backend: Auth y Productos

### Dev A (con experiencia)
- [ ] 🔴 **A-11** — Conectar el formulario de contacto (`ContactForm.tsx`) al endpoint `POST /api/contact` usando axios. Manejar los estados loading/success/error.
- [ ] 🔴 **A-12** — Crear el servicio `apps/client/src/services/api.ts` con una instancia de axios configurada con `baseURL` y el interceptor para incluir el token JWT en cada petición.
- [ ] 🔴 **A-13** — Crear las páginas de Login y Register en Next.js (`/login`, `/register`) que consuman los endpoints `POST /api/auth/login` y `POST /api/auth/register`. Al iniciar sesión, guardar el JWT en `localStorage`.
- [ ] 🔴 **A-14** — En la página `/admin`, implementar CRUD visual de productos: lista con botones "Editar" y "Eliminar", y un formulario para crear productos nuevos.

### Dev B (novato) — Práctica de backend
- [ ] 🟡 **B-16** — Abrir Thunder Client (extensión de VS Code) o Postman. Hacer una petición `POST /api/auth/register` con body JSON `{"name":"Tu Nombre","email":"tu@email.com","password":"Test1234!"}`. Ver la respuesta.
- [ ] 🟡 **B-17** — Con el token que recibiste en B-16, hacer una petición `GET /api/auth/me` incluyendo el header `Authorization: Bearer <token>`. Verificar que responde con tus datos.
- [ ] 🟡 **B-18** — Probar `GET /api/products` en Thunder Client y ver la lista de productos en formato JSON.

> 💡 **Concepto para Dev B — ¿Qué es JWT?**  
> JWT (JSON Web Token) es como un "pase de acceso" digital. Cuando inicias sesión, el servidor te da un token. En las próximas peticiones, incluyes ese token para demostrar que eres quien dices ser, sin necesidad de enviar tu contraseña cada vez.

---

## ✅ FASE 5 — Calidad, Accesibilidad y Deploy

### Dev B (novato)
- [ ] 🟢 **B-19** — Abrir las DevTools (F12) > Lighthouse en Chrome. Correr un audit de "Accessibility" en http://localhost:3000. Anotar el puntaje y compartirlo.
- [ ] 🟢 **B-20** — Navegar toda la landing page usando **solo el teclado** (Tab, Enter, Esc). Anotar cualquier sección donde el foco desaparezca.
- [ ] 🟡 **B-21** — Revisar que todas las imágenes y emojis informativos tengan `aria-label` o `alt`. Corregir los que no lo tengan.

### Dev A (con experiencia)
- [ ] 🔴 **A-15** — Configurar el deploy del frontend en **Vercel**: conectar el repo de GitHub, setear `apps/client` como root, y agregar las variables de entorno.
- [ ] 🔴 **A-16** — Configurar el deploy del backend en **Render.com** o **Railway**: conectar repo, configurar `apps/server` como root y variables de entorno (MongoDB URI, JWT Secret, etc.).
- [ ] 🟡 **A-17** — Agregar `robots.txt` y `sitemap.xml` en `apps/client/public/`. Verificar que Lighthouse SEO pase de 90.

---

## 🎯 TAREAS BONUS (opcionales para ir más allá)

| # | Tarea | Para quién | Dificultad |
|---|-------|-----------|------------|
| X-01 | Implementar tema oscuro (dark mode) con `prefers-color-scheme` en Tailwind | Ambos | 🟡 |
| X-02 | Agregar paginación real al catálogo conectada al backend | Dev A | 🔴 |
| X-03 | Widget de pronóstico de 5 días (endpoint `/forecast` de OpenWeatherMap) | Dev B | 🟡 |
| X-04 | Enviar emails reales al enviar el formulario de contacto (Nodemailer o Resend) | Dev A | 🔴 |
| X-05 | Agregar animaciones de entrada con Intersection Observer en las secciones | Dev B | 🟡 |
| X-06 | Tests unitarios del backend con Vitest | Dev A | 🔴 |

---

## 📌 Workflow de Git recomendado

```bash
# Antes de empezar cada tarea:
git checkout develop
git pull origin develop
git checkout -b feature/nombre-de-tu-tarea   # ej: feature/b-09-badge-component

# Al terminar:
git add .
git commit -m "feat: descripción corta de lo que hiciste"
git push origin feature/nombre-de-tu-tarea

# Luego crear un Pull Request hacia develop en GitHub
```

## 📊 Progreso recomendado

| Semana | Dev A completar | Dev B completar |
|--------|-----------------|-----------------|
| 1 | A-01 al A-05 | B-01 al B-05 |
| 2 | A-06 al A-08 | B-06 al B-11 |
| 3 | A-09 al A-11 | B-12 al B-15 |
| 4 | A-12 al A-14 | B-16 al B-18 |
| 5 | A-15 al A-17 | B-19 al B-21 |

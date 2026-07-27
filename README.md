# publico-usuarios

API publica de solo lectura para consultar auditorias de login.

## Requisitos

- Node.js 20 o superior
- Acceso a la base de datos SQL Server del backend principal

## Variables de entorno

Copiar `.env.example` a `.env` y completar las credenciales reales:

```txt
PORT=3014
DB_USER=tu_usuario_sql
DB_PASSWORD=tu_password_sql
DB_SERVER=tiusr15pl.cuc-carrera-ti.ac.cr
DB_DATABASE=tiusr15pl_RaicesCafeVivero
DB_PORT=1433
DB_CONNECTION_TIMEOUT_MS=30000
DB_REQUEST_TIMEOUT_MS=30000
DB_POOL_MAX=10
DB_POOL_MIN=0
DB_POOL_IDLE_TIMEOUT_MS=30000
DB_ENCRYPT=true
DB_TRUST_CERT=true
```

## Instalacion local

```bash
npm install
```

## Ejecutar localmente

```bash
npm run dev
```

## Endpoints

```txt
GET /health
GET /auditorias-login
```

## Pruebas con curl

```bash
curl http://localhost:3014/health
curl http://localhost:3014/auditorias-login
curl https://clienteauditoria.onrender.com/health
curl https://clienteauditoria.onrender.com/auditorias-login
```

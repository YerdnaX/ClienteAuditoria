# Deploy en Render - publico-usuarios

## Pasos

1. Crear un nuevo Web Service en Render.
2. Conectar el repositorio del proyecto.
3. Seleccionar el folder `publico/publico-usuarios` como Root Directory.
4. Configurar Build Command:

```txt
npm install
```

5. Configurar Start Command:

```txt
npm start
```

6. Agregar las variables de entorno:

```txt
DB_USER
DB_PASSWORD
DB_SERVER
DB_DATABASE
DB_PORT
DB_CONNECTION_TIMEOUT_MS
DB_REQUEST_TIMEOUT_MS
DB_POOL_MAX
DB_POOL_MIN
DB_POOL_IDLE_TIMEOUT_MS
DB_ENCRYPT
DB_TRUST_CERT
```

Render asigna `PORT` automaticamente.

## Verificacion

```txt
GET https://tu-dominio-render/health
GET https://tu-dominio-render/auditorias-login
```

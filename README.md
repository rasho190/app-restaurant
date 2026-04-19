# Restaurant System with Electronic Invoicing (POS/ERP ligero)

Monorepo base para restaurante/cafetería con arquitectura modular, backend en Express + Prisma + PostgreSQL y frontend en React + Vite.

## Estructura
- `backend/`: API REST, autenticación, módulos operativos y financieros.
- `frontend/`: app web modular por feature.
- `shared/`: contratos y tipos compartidos.
- `docs/`: árbol del proyecto, backlog técnico y decisiones.

## Inicio rápido
1. Copiar `.env.example` a `.env`.
2. Levantar servicios:
   ```bash
   docker-compose up --build
   ```
3. Backend: `http://localhost:4000/api/v1`
4. Swagger: `http://localhost:4000/api/v1/docs`
5. Frontend: `http://localhost:5173`

## Fases implementadas en este commit
- Base de proyecto y arquitectura.
- Prisma schema inicial con entidades núcleo.
- Backend MVP con:
  - Salud API
  - Auth JWT (login + refresh)
  - CRUD categorías y productos
  - Módulo financiero inicial con KPIs y fórmulas reutilizables
  - Swagger/OpenAPI

## Pendientes inmediatos
Ver `docs/backlog.md`.

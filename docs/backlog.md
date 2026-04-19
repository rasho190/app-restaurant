# Backlog técnico por módulos

## Fase 1 (Base + Auth + Productos)
- [x] Monorepo y estructura modular.
- [x] Prisma schema inicial con entidades core.
- [x] Seed de roles/usuario admin/productos demo.
- [x] Auth JWT access + refresh.
- [x] CRUD inicial categorías y productos.
- [ ] RBAC por permisos granular (tabla Permission).
- [ ] DTOs comunes y manejo uniforme de respuestas.

## Fase 2 (Salón + Pedidos + Cocina + Caja)
- [ ] Plano visual de salón con estados de mesa.
- [ ] Flujo de pedido completo (mesa/llevar/delivery).
- [ ] Split/merge de cuentas y transferencia de mesa.
- [ ] KDS en tiempo real por estación.
- [ ] Apertura/cierre caja + arqueo + diferencias.
- [ ] Auditoría de anulaciones y reimpresión.

## Fase 3 (Clientes + Comprobantes + FE)
- [ ] CRUD clientes + segmentación.
- [ ] Motor de comprobantes con series/correlativos.
- [ ] Adapter `ElectronicInvoicingProvider`.
- [ ] `MockProvider` para sandbox.
- [ ] Generación PDF + payload XML/JSON.

## Fase 4 (Dashboard + Reportes + Finanzas)
- [x] Fórmulas financieras núcleo y tests.
- [x] Endpoint KPI financiero inicial.
- [ ] Dashboards financieros y operativos (Recharts).
- [ ] Reportes exportables PDF/Excel/CSV.
- [ ] Proyecciones 7/30 días y comparativos por período.

## Fase 5 (QA + DX + Deploy)
- [ ] Tests backend (Jest/Supertest) por módulo.
- [ ] Tests frontend (Vitest) por feature.
- [ ] Swagger completo por endpoint.
- [ ] Docker optimizado multi-stage.
- [ ] CI pipeline (lint/test/build).
- [ ] README completo de operación funcional.

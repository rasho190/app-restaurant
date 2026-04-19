import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const permissions = [
    'auth.manage',
    'products.read',
    'products.write',
    'orders.manage',
    'kitchen.manage',
    'cash.manage',
    'reports.read',
    'finance.read',
    'invoicing.manage'
  ];

  for (const code of permissions) {
    await prisma.permission.upsert({
      where: { code },
      create: { code, description: code },
      update: {}
    });
  }

  const adminRole = await prisma.role.upsert({
    where: { name: 'Administrador' },
    create: { name: 'Administrador', description: 'Acceso total' },
    update: {}
  });

  const hash = await bcrypt.hash('Admin123*', 10);
  await prisma.user.upsert({
    where: { email: 'admin@restaurant.local' },
    create: {
      email: 'admin@restaurant.local',
      passwordHash: hash,
      fullName: 'Administrador General',
      roleId: adminRole.id
    },
    update: {}
  });

  const food = await prisma.productCategory.upsert({
    where: { slug: 'platos' },
    create: { name: 'Platos', slug: 'platos' },
    update: {}
  });

  await prisma.product.upsert({
    where: { code: 'P-001' },
    create: {
      code: 'P-001',
      name: 'Lomo Saltado',
      categoryId: food.id,
      salePrice: 32,
      costPrice: 14,
      unit: 'PLATO',
      taxRate: 18
    },
    update: {}
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

import { prisma } from '../../config/prisma.js';

export class ProductsService {
  listCategories() {
    return prisma.productCategory.findMany({ where: { deletedAt: null }, orderBy: { name: 'asc' } });
  }

  createCategory(data: { name: string; slug: string; parentId?: string }) {
    return prisma.productCategory.create({ data });
  }

  listProducts(search?: string) {
    return prisma.product.findMany({
      where: {
        deletedAt: null,
        ...(search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { code: { contains: search, mode: 'insensitive' } }
              ]
            }
          : {})
      },
      include: { category: true }
    });
  }

  createProduct(data: {
    code: string;
    name: string;
    categoryId: string;
    salePrice: number;
    costPrice: number;
    unit: string;
    taxRate: number;
    description?: string;
  }) {
    return prisma.product.create({ data });
  }
}

import swaggerJsdoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Restaurant System API',
      version: '0.1.0',
      description: 'API inicial para POS/ERP de restaurante'
    },
    servers: [{ url: 'http://localhost:4000/api/v1' }]
  },
  apis: []
});

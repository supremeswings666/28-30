const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Маргарин техники API",
      version: "1.0.0",
      description:
        "REST API для управления клиентами, заказами и пунктами выдачи (ПВЗ).",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Локальный сервер (разработка)",
      },
    ],
    components: {
      securitySchemes: {
        basicAuth: {
          type: "http",
          scheme: "basic",
          description:
            "Basic Authentication для доступа к административным эндоинтам. Используйте учетные данные из конфигурации.",
        },
      },
    },
    apis: ["./docs/*.yaml"],
  },
};

const specs = swaggerJsdoc(options);

module.exports = specs;

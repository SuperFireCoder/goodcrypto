import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Bequest API",
      version: "1.0.0",
      description: "API documentation for the Bequest application",
    },
  },
  apis: ["./routes/*.ts", "./controllers/*.ts"], // Paths to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

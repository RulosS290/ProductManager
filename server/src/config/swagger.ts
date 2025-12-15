import swaggerJSDo from "swagger-jsdoc"
import { SwaggerUiOptions } from "swagger-ui-express"

const options : swaggerJSDo.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
            name: 'Products',
            description: 'API operations related to products'
            }
        ],
        info: {
            title: 'Product Manager API / Express + TypeScript',
            version: '1.0.0',
            description: 'API Docs for productts'
        },
    },
    apis: ['./src/router.ts']
}
const swaggerSpec = swaggerJSDo(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
        content: url('https://raw.githubusercontent.com/RulosS290/DST-Projects/main/TailwindCSS/Projects/landing%20page/src/assets/logo.svg');
        width: auto;
        height: auto;
        filter: invert(1);
        }
    `,
    customSiteTitle: 'REST API Documentation | Express & TypeScript',
    customfavIcon: 'https://raw.githubusercontent.com/RulosS290/DST-Projects/refs/heads/main/TailwindCSS/Projects/landing%20page/src/assets/img/image.ico'
}

export default swaggerSpec
export {
    swaggerUiOptions
}
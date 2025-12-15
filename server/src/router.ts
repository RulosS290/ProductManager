import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()
/** 
  * @swagger
  * components: 
  *       schemas:
  *             Product:
  *                 type: object
  *                 properties:
  *                     id:
  *                         type: integer
  *                         description: The Product ID
  *                         example: 1
  *                     name: 
  *                         type: string
  *                         description: The Product name
  *                         example: 49-inch curved monitor
  *                     price: 
  *                         type: number
  *                         description: The Product price
  *                         example: 300
  *                     availability: 
  *                         type: boolean
  *                         description: The Product availability
  *                         example: true                  
*/

/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: Get a list of products
 *      tags:
 *          - Products
 *      description: Return a list of products
 *      responses:
 *          200:
 *              description: Succesful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
 * 
 */
router.get('/', getProducts) 

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: Return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          404:
 *              description: Not found
 *          400:
 *              description:  Bad Request - Invalid ID
 */
router.get('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    handleInputErrors,
    getProductById)

/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Create a new product
 *      tags:
 *          - Products
 *      description: Returns a new record in the databases
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 49-inch curved monitor
 *                          price:
 *                              type: number
 *                              example: 399
 *      responses:
 *          201:
 *              description: Product created successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid input data
 */

router.post('/', 
    body('name')
        .notEmpty().withMessage("Name can't be empty"),
    body('price')
        .isNumeric().withMessage('Price must be a number')
        .notEmpty().withMessage("Price can't be empty")
        .custom(value => value > 0).withMessage("Price must be greater than 0"),
    handleInputErrors,
    createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Updates a product with user input
 *      tags: 
 *          - Products
 *      description: Returns the updated product
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              example: 49-inch curved monitor
 *                          price:
 *                              type: number
 *                              example: 300
 *                          availability:
 *                              type: boolean
 *                              example: true
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product not found
 */

router.put('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    body('name')
        .notEmpty().withMessage("Name can't be empty"),
    body('price')
        .isNumeric().withMessage('Price must be a number')
        .notEmpty().withMessage("Price can't be empty")
        .custom(value => value > 0).withMessage("Price must be greater than 0"),
    body('availability')
        .isBoolean().withMessage('Availability must be a boolean'),
    handleInputErrors,
    updateProduct)

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Update Products availability
 *      tags:
 *          - Products
 *      description: Returns the updated availability
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid ID or Invalid input data
 *          404:
 *              description: Product not found
 */

router.patch('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    handleInputErrors,
    updateAvailability)

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Deletes a product by a given ID
 *      tags:
 *          - Products
 *      description: Return a confirmation message
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to delete
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  applicaction/json:
 *                      schema:
 *                          type: string
 *                          value: 'Product delete'
 *          400:
 *              description: Invalid ID
 *          404:
 *              description: Product not found
 */

router.delete('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    handleInputErrors,
    deleteProduct)


export default router
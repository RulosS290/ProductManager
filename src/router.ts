import { Router } from "express"
import { body, param } from "express-validator"
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { handleInputErrors } from "./middleware"

const router = Router()

// Routing
router.get('/', getProducts)

router.get('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    handleInputErrors,
    getProductById)

router.post('/', 
    param('id').isInt().withMessage('Invalid ID'),
    body('name')
        .notEmpty().withMessage("Name can't be empty"),
    body('price')
        .isNumeric().withMessage('Price must be a number')
        .notEmpty().withMessage("Price can't be empty")
        .custom(value => value > 0).withMessage("Price must be greater than 0"),
    handleInputErrors,
    createProduct
)

router.put('/:id', 
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

router.patch('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    handleInputErrors,
    updateAvailability)


router.delete('/:id', 
    param('id').isInt().withMessage('Invalid ID'),
    deleteProduct)


export default router
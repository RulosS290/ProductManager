import request from "supertest"
import server from "../../server"

describe('POST /api/products', () => {
    test('Should display validation errors', async () => {
        const response = await request(server).post('/api/products').send({})
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(4)

        expect(response.status).not.toEqual(404)
        expect(response.body.errors).not.toHaveLength(2)
    })

    test('Should validate that the price is greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Test Product',
            price: 0
        })
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)

        expect(response.status).not.toEqual(404)
        expect(response.body.errors).not.toHaveLength(2)
    })

    test('Should validate that the price is a number and greater than 0', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Test Product',
            price: 'hello'
        })
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(2)

        expect(response.status).not.toEqual(404)
        expect(response.body.errors).not.toHaveLength(1)
    })

    
    test('Should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Test Product',
            price: 0.99
        })

        expect(response.status).toEqual(201)
        expect(response.body).toHaveProperty('data')

        expect(response.body.data).not.toEqual(404)
        expect(response.body.data).not.toEqual(200)
        expect(response.body.data).not.toHaveProperty('errors')
    })
})

describe('GET /api/products', () => {
    test('Should check if /api/products route exists', async () => {
        const response = await request(server).get('/api/products')
        expect(response.status).not.toEqual(404)
    })

    test('Shuold return a list of products', async () => {
        const response = await request(server).get('/api/products')
        expect(response.status).toEqual(200)
        expect(response.header['content-type']).toMatch(/json/)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toEqual(404)
        expect(response.body).not.toHaveProperty('erros')
    })
})

describe('GET /api/products/:id', () => {
    test('Should return a 404 response for a non-existing product', async () => {
        const productId = 4000
        const response = await request(server).get(`/api/products/${productId}`)
        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty('error', 'Product not found')

        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty('data')
    })

    test('Should check a valid ID in the route', async () => {
        const response = await request(server).get('/api/products/hello')
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0]).toHaveProperty('msg', 'Invalid ID')
    })

    test('Should return data for a single product', async () => {
        const response = await request(server).get('/api/products/1')
        expect(response.status).toEqual(200)
        expect(response.body).toHaveProperty('data')
    })
})

describe('PUT /api/products/:id', () => {
    test('Should check a valid ID in the route', async () => {
        const response = await request(server).put('/api/products/hello').send({
            name: 'Monitor - Test',
            price: 200,
            availability: true
        })
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0]).toHaveProperty('msg', 'Invalid ID')

        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty('data')
    })

    test('Should display validation errors for updating a product', async () => {
        const response = await request(server).put('/api/products/1').send({})
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toBeTruthy()
        expect(response.body.errors).toHaveLength(5)

        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty('data')
    })

    test('Should validate that the price is greater than 0', async () => {
        const response = await request(server).put('/api/products/1').send({
            name: 'Monitor - Test',
            price: 0,
            availability: true
        })
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toBeTruthy()
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0]).toHaveProperty('msg', 'Price must be greater than 0')

        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty('data')
    })

    test('Should return a 404 response for a non-existent product', async () => {
        const productId = 4000
        const response = await request(server).put(`/api/products/${productId}`).send({
            name: 'Monitor - Test',
            price: 200,
            availability: true
        })
        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty('error', 'Product not found')

        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty('data')
    })

    test('Should update an existing product with valid data', async () => {
        const response = await request(server).put(`/api/products/1`).send({
            name: 'Monitor - Test',
            price: 200,
            availability: true
        })
        expect(response.status).toEqual(200)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toEqual(400)
        expect(response.body).not.toHaveProperty('errors')
    })
})

describe('PATCH /api/products/:id', () => {
    test('Should return a 404 response for a non-existent product', async () => {
        const productId = 4000
        const response = await request(server).patch(`/api/products/${productId}`)
        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty('error', 'Product not found')

        expect(response.status).not.toEqual(200)
        expect(response.body).not.toHaveProperty('data')
    })

    test('Should update the availability of an existing product', async () => {
        const response = await request(server).patch('/api/products/1')
        expect(response.status).toEqual(200)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toEqual(404)
        expect(response.body).not.toHaveProperty('errors')
    })
})

describe('DELETE /api/products/:id', () => {
    test('Should check a valid ID in the route', async () => {
        const response = await request(server).delete('/api/products/hello')
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errors')
        expect(response.body.errors).toHaveLength(1)
        expect(response.body.errors[0]).toHaveProperty('msg', 'Invalid ID')
    })

    test('Should return a 404 response for a non-existent product', async () => {
        const productId = 4000
        const response = await request(server).delete(`/api/products/${productId}`)
        expect(response.status).toEqual(404)
        expect(response.body).toHaveProperty('error', 'Product not found')

        expect(response.status).not.toEqual(200)
    })

    test('Should delete an existing product', async () => {
        const response = await request(server).delete('/api/products/1')
        expect(response.status).toEqual(200)
        expect(response.body).toHaveProperty('data', 'Product delete')

        expect(response.status).not.toEqual(404)
        expect(response.status).not.toEqual(400)
    })
})



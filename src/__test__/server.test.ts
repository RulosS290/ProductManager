import { connectDB } from "../server"
import db from "../config/db"

jest.mock('../config/db')

describe('Database connection', () => {
    test('Should handle database connection errors', async () => {
        jest.spyOn(db, 'authenticate').mockRejectedValueOnce(new Error('There was an error connecting to the database'))
        const consoleLogSpy = jest.spyOn(console, 'log')

        await connectDB()

        expect(consoleLogSpy).toHaveBeenCalledWith(
            expect.stringContaining('There was an error connecting to the database')
        )
    })

})